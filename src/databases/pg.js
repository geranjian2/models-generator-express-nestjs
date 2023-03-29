var PrettyError = require('pretty-error');
const Knex = require('knex');
const pgAdmin = async (dbName, dbConnection)=>{
    try {
        
        const knex = Knex({
            client: 'pg',
            connection: {...dbConnection, database: dbName }
        });
    
        const tables = await knex.raw(`SELECT tb.table_name 
        FROM information_schema.tables tb
        WHERE tb.table_schema = 'public'
        ORDER BY tb.table_name`)
    
        const columns = await knex.raw(`SELECT 
        cl.table_name, cl.column_name,
         cl.data_type, cl.is_nullable,
         cl.column_default,
         cl.character_maximum_length 
        FROM information_schema.tables tb
        left join information_schema.columns cl on cl.table_name =  tb.table_name 
        WHERE tb.table_schema = 'public'
        ORDER BY cl.table_name, cl.ordinal_position`)
    
        const foreigns = await knex.raw(`SELECT
        /*tc.table_schema,*/ 
        /*tc.constraint_name,*/ 
        tc.table_name, 
        kcu.column_name, 
        ccu.table_schema AS foreign_table_schema,
        ccu.table_name AS foreign_table_name,
        ccu.column_name AS foreign_column_name 
        FROM 
            information_schema.table_constraints AS tc 
            JOIN information_schema.key_column_usage AS kcu
            ON tc.constraint_name = kcu.constraint_name
            AND tc.table_schema = kcu.table_schema
            JOIN information_schema.constraint_column_usage AS ccu
            ON ccu.constraint_name = tc.constraint_name
            AND ccu.table_schema = tc.table_schema
        WHERE tc.constraint_type = 'FOREIGN KEY' AND tc.table_name in (SELECT tb.table_name 
        FROM information_schema.tables tb
        WHERE tb.table_schema = 'public'
        ORDER BY tb.table_name)`)
    
        const idsPrimary = await knex.raw(`SELECT c.table_name, c.column_name 
        FROM information_schema.table_constraints tc 
        JOIN information_schema.constraint_column_usage AS ccu USING (constraint_schema, constraint_name) 
        JOIN information_schema.columns AS c ON c.table_schema = tc.constraint_schema
        AND tc.table_name = c.table_name AND ccu.column_name = c.column_name
        WHERE constraint_type = 'PRIMARY KEY' and tc.table_name in (SELECT tb.table_name 
        FROM information_schema.tables tb
        WHERE tb.table_schema = 'public'
        and c.column_default is not null
        ORDER BY tb.table_name)`);
    
        
        const arrayTables = {
            tables:[]
        }
    
        tables.rows.forEach((table, index) => {
            arrayTables['tables'][index]=({table:table.table_name, columns:[], foreigns:[],foreignsRelations:[], ids:[]})
            columns.rows.forEach((column) => {
                if(arrayTables['tables'][index]['table']===column.table_name){
                    column.data_type = (column.data_type === 'uuid' || column.data_type === 'character varying')?'varchar':column.data_type
    
                    
                    if(column.column_name==='uuid'){
                        column.character_maximum_length=20
                    }
                    
                    arrayTables['tables'][index]['columns'].push(column)
                }
            });
            foreigns.rows.forEach((foreing) => {
                if(arrayTables['tables'][index]['table']===foreing.table_name){
                    let existeElemen =  arrayTables['tables'][index]['foreigns'].find(element=>element.foreign_table_name===foreing.foreign_table_name)
                    if(!existeElemen){
                        arrayTables['tables'][index]['foreigns'].push(foreing)
                    }
                }
                if(arrayTables['tables'][index]['table']===foreing.foreign_table_name){
                    let existeElemen =  arrayTables['tables'][index]['foreignsRelations'].find(element=>element.table_name===foreing.table_name)
                    if(!existeElemen){
                        arrayTables['tables'][index]['foreignsRelations'].push(foreing)
                    }
                }
            });
            idsPrimary.rows.forEach((foreing, index4) => {
                if(arrayTables['tables'][index]['table']===foreing.table_name){
                    arrayTables['tables'][index]['ids'].push(foreing.column_name)
                }
            });
        });
    
        return arrayTables;
    } catch (error) {
        let pe = new PrettyError();
        let renderedError = pe.render(new Error(error.message));
    }

}

module.exports={
    pgAdmin
}