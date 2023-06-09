var PrettyError = require('pretty-error');
const Knex = require('knex');
const { transformText } = require('../utils/format-text');
const pgAdmin = async (dbName, dbConnection, config) => {
  try {
      const knex = await Knex({
        client: 'pg',
        connection: { ...dbConnection, database: dbName },
      });
      knex.raw("SELECT 1").then(() => {})
      .catch((e) => {
        let pe = new PrettyError();
        let renderedError = pe.render(new Error(`${e.message} 
        Not connected database ${JSON.stringify(dbConnection)}
        Type: ${config.database}
        `));
        // console.log(renderedError)
      });
    let addNotTables = '';
    let quearyAdd = '';
    if (config['tables']['exclude']) {
      let excluede = config['tables']['exclude'];
      let tables = transformText(excluede, ',');
      addNotTables = `,${tables}`;
    }
    if (config['tables']['include']) {
      let include = config['tables']['include'];
      let tables = transformText(include, ',');
      quearyAdd = ` AND tb.table_name in (${tables})`;
    }


    tablesNotIn = `'sequelize_migrations', 'sequelize_data', 'migrations' ${addNotTables}`;
    let sqlTables = `SELECT tb.table_name 
    FROM information_schema.tables tb
    WHERE tb.table_schema = 'public'
    AND tb.table_name not in (${tablesNotIn})
    ${quearyAdd}
    ORDER BY tb.table_name`
    const tables = await knex.raw(sqlTables);

    const columns = await knex.raw(`SELECT 
        cl.table_name, cl.column_name,
        cl.data_type, cl.is_nullable,
        cl.column_default,
        cl.character_maximum_length 
        FROM information_schema.tables tb
        left join information_schema.columns cl on cl.table_name =  tb.table_name 
        WHERE tb.table_schema = 'public'
        ORDER BY cl.table_name, cl.ordinal_position`);

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
        ORDER BY tb.table_name)`);

    const idsPrimary = await knex.raw(`SELECT tc.constraint_type, c.table_name, c.column_name 
    FROM information_schema.table_constraints tc 
    JOIN information_schema.constraint_column_usage AS ccu USING (constraint_schema, constraint_name) 
    JOIN information_schema.columns AS c ON c.table_schema = tc.constraint_schema
    AND tc.table_name = c.table_name AND ccu.column_name = c.column_name
    WHERE tc.constraint_type IN ('PRIMARY KEY', 'UNIQUE') and tc.table_name in (SELECT tb.table_name 
    FROM information_schema.tables tb
    WHERE tb.table_schema = 'public'
    
    ORDER BY tb.table_name)`);

    const enums = await knex.raw(`select
        col.table_schema,
        col.table_name,
        col.column_name,
        string_agg(concat('"',enu.enumlabel,'"'), ', ' 
                  order by enu.enumsortorder) as enum_values,
        string_agg(concat('"',enu.enumlabel,'"'), ' | '  
                  order by enu.enumsortorder) as enum_values_or
    from
        information_schema.columns col
    join information_schema.tables tab on
        tab.table_schema = col.table_schema
        and tab.table_name = col.table_name
        and tab.table_type = 'BASE TABLE'
    join pg_type typ on
        col.udt_name = typ.typname
    join pg_enum enu on
        typ.oid = enu.enumtypid
    where
        col.table_schema not in ('information_schema', 'pg_catalog')
        and typ.typtype = 'e'
    group by
        col.table_schema,
        col.table_name,
        col.ordinal_position,
        col.column_name,
        col.udt_name
    order by
        col.table_name,
        col.ordinal_position;`);

    const arrayTables = {
      tables: [],
    };
    searchArray=[]
    tables.rows.forEach((table, index) => {
      arrayTables['tables'][index] = {
        table: table.table_name,
        columns: [],
        foreigns: [],
        foreignsRelations: [],
        ids: [],
      };
      columns.rows.forEach((column) => {
        enumColumn = '';
        enum_or = '';
        if (arrayTables['tables'][index]['table'] === column.table_name) {
          column.type_initial = column.data_type;
          column.data_type =
            column.data_type === 'uuid' ||
            column.data_type === 'character varying'
              ? 'varchar'
              : column.data_type;

         
          if (column.type_initial === 'USER-DEFINED') {
            column.type_initial = 'enum';
          }
          if (column.column_name === 'uuid') {
            column.character_maximum_length = 20;
          }
          enums.rows.forEach((enumInfo, index4) => {
            if (column.column_name === enumInfo.column_name) {
              column.type_initial = 'enum';
              (enumColumn = enumInfo.enum_values),
                (enum_or = enumInfo.enum_values_or);
            }
          });
          column['enum'] = enumColumn;
          column['enum_or'] = enum_or;
          arrayTables['tables'][index]['columns'].push(column);
        }
      });
      foreigns.rows.forEach((foreing) => {
        if (arrayTables['tables'][index]['table'] === foreing.table_name) {
          let existeElemen = arrayTables['tables'][index]['foreigns'].find(
            (element) =>
              element.foreign_table_name === foreing.foreign_table_name,
          );
          if (!existeElemen) {
            arrayTables['tables'][index]['foreigns'].push(foreing);
          }
        }
        if (
          arrayTables['tables'][index]['table'] === foreing.foreign_table_name
        ) {
          let existeElemen = arrayTables['tables'][index][
            'foreignsRelations'
          ].find((element) => element.table_name === foreing.table_name);
          if (!existeElemen) {
            arrayTables['tables'][index]['foreignsRelations'].push(foreing);
          }
        }
      });
      let search = 0
      idsPrimary.rows.forEach((column, index4) => {
        
        if (arrayTables['tables'][index]['table'] === column.table_name) {
          let isIncrement = false
          if(column['constraint_type']==='PRIMARY KEY'){
            
            isIncrement = true
            search++;
            
          }
          if(search===0){
            column['constraint_type']='PRIMARY'
            searchArray.push(column)
          }
          column['increment']=isIncrement
          arrayTables['tables'][index]['ids'].push(column);
          // console.log(arrayTables['tables'][index]['ids'])

        }
      });
    });
    return arrayTables;
  } catch (error) {
    let pe = new PrettyError();
    let renderedError = pe.render(new Error(error.message));
    console.log(renderedError)
  }
};

module.exports = {
  pgAdmin,
};
