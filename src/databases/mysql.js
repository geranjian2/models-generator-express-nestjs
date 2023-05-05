var PrettyError = require('pretty-error');
const Knex = require('knex');
const { transformText } = require('../utils/format-text');
const mysqlAdmin = async (dbName, dbConnection, config) => {
  try {
    const knex = await Knex({
      client: 'mysql',
      connection: { ...dbConnection, database: dbName },
    });

    knex
      .raw('SELECT 1')
      .then(() => {})
      .catch((e) => {
        let pe = new PrettyError();
        let renderedError = pe.render(
          new Error(`${e.message} 
    Not connected database ${JSON.stringify(dbConnection)}
    Type: ${config.database}
    `),
        );
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
      quearyAdd = ` AND table_name in (${tables})`;
    }

    tablesNotIn = `'public.sequelize_migrations','sequelize_migrations', 'sequelize_data', 'migrations' ${addNotTables}`;

    let sqlTables = `SELECT table_name, table_schema 
    FROM INFORMATION_SCHEMA.TABLES WHERE  table_schema = '${dbName}'
    AND table_name not in (${tablesNotIn})
    ${quearyAdd}
    ORDER BY table_name`;

    const tables = await knex.raw(sqlTables);

    let sqlColumns = `SELECT  cl.table_name, cl.column_name,
    cl.data_type, cl.is_nullable,
    cl.column_default,
    cl.character_maximum_length 
FROM INFORMATION_SCHEMA.COLUMNS cl
WHERE TABLE_SCHEMA='${dbName}'`;

    const columns = await knex.raw(sqlColumns);

    let sqlForeigns = `SELECT 
    i.TABLE_SCHEMA,
    i.TABLE_NAME table_name,
    k.COLUMN_NAME column_name,
    k.REFERENCED_TABLE_NAME foreign_table_name,
    k.REFERENCED_COLUMN_NAME  foreign_column_name
    FROM information_schema.TABLE_CONSTRAINTS i 
    LEFT JOIN information_schema.KEY_COLUMN_USAGE k ON i.CONSTRAINT_NAME = k.CONSTRAINT_NAME 
    WHERE i.CONSTRAINT_TYPE = 'FOREIGN KEY'
    AND i.table_schema = '${dbName}'`;

    const foreigns = await knex.raw(sqlForeigns);

    const idsPrimary = await knex.raw(`SELECT 
    TABLE_NAME table_name,
    COLUMN_NAME column_name,
    IF(COLUMN_KEY='PRI', "PRIMARY KEY", "UNIQUE") constraint_type,
    EXTRA extra
    FROM INFORMATION_SCHEMA.COLUMNS 
    WHERE  TABLE_SCHEMA = 'payment_backoffice'
    and COLUMN_KEY IN ('PRI','UNI')`);

    const enums = await knex.raw(`SELECT
    TABLE_NAME table_name, 
    COLUMN_NAME column_name,
    Replace(Replace(Replace(COLUMN_TYPE, 'enum(',''),')',''),',',' | ') as enum_values_or,
    Replace(Replace(COLUMN_TYPE, 'enum(',''),')','') as enum_values
    FROM
    INFORMATION_SCHEMA.COLUMNS
    WHERE  TABLE_SCHEMA = 'payment_backoffice'
    and data_type in ('enum')`);

    const arrayTables = {
      tables: [],
    };

    tables[0].forEach((table, index) => {
      arrayTables['tables'][index] = {
        table: table.table_name,
        columns: [],
        foreigns: [],
        foreignsRelations: [],
        ids: [],
      };
      columns[0].forEach((column) => {
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
          if (column.data_type === 'text') {
            column.character_maximum_length = null;
          }
          enums[0].forEach((enumInfo, index4) => {
            if (column.column_name === enumInfo.column_name) {
              column.type_initial = 'enum';
              column.character_maximum_length = null;
              (enumColumn = enumInfo.enum_values),
                (enum_or = enumInfo.enum_values_or);
            }
          });
          column['enum'] = enumColumn;
          column['enum_or'] = enum_or;
          arrayTables['tables'][index]['columns'].push(column);
        }
      });
      foreigns[0].forEach((foreing) => {
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
      idsPrimary[0].forEach((column, index4) => {
        if (arrayTables['tables'][index]['table'] === column.table_name) {
          let isIncrement = false;
          if (column.constraint_type === 'PRIMARY KEY') {
            if (column.extra === 'auto_increment') {
              isIncrement = true;
            } else {
              column['constraint_type'] = 'PRIMARY';
            }
          }
          column['increment'] = isIncrement;
          arrayTables['tables'][index]['ids'].push(column);
        }
      });
    });
    return arrayTables;
  } catch (error) {
    let pe = new PrettyError();
    let renderedError = pe.render(new Error(error.message));
    console.log(renderedError);
  }
};

module.exports = {
  mysqlAdmin,
};
