const { singularize } = require("i/lib/methods");
const { MODELS_NAME } = require("../core/constants");
const { capitalize, camelCase, pluralizeReplace, replace, getInitials } = require("../utils/format-text");
const { RouteGenerate } = require("./routes.class");
const { TransformName } = require("./transform-name.class");
const { dataTypes } = require("../utils/types");
const logger = require('pino')({
    transport: {
        target: 'pino-pretty',
        options: {
            translateTime: false,
            colorize: true,
            ignore: 'pid,hostname,time',
        },
    },
});
class TableClass {
  model(tables) {
    
    let classModelNames = {
      classes: [],
    };
    
    tables.forEach((table, index) => {
     let tableName =   new TransformName()
     let nameTransform = tableName.run(table.table)
     let tableRoutes =   new RouteGenerate (nameTransform)
      let data = {
        tableInialP:getInitials(table.table),
        ...tableName.run(table.table),
        ...tableRoutes.nest(),
        properties: this.columns(table.columns, table),
        relations: this.foreigns(table.foreigns),
        foreignsRelations: this.foreignsRelations(table.foreignsRelations),
      };
      classModelNames.classes.push(data);
      // console.log(classModelNames.classes[6])
    });
    return classModelNames;
  }
  columns(columns,table) {
    return columns.map((column) => {
      let is_nullable = true;
      if (column.is_nullable === "NO") {
        is_nullable = false;
      }
      let type = dataTypes(column.data_type);
      let isTypeString = false;
      let isTypeText = false;
      let isTypeInteger = false;
      let isTypeBoolean = false;
      if (type === "string") {
        isTypeString = true;
      }
      if (type === "boolean") {
        isTypeBoolean = true;
      }
      if (type === "text") {
        isTypeText = true;
      }
      if (type === "number") {
        isTypeInteger = true;
      }
      let primary = false;
      table.ids.forEach((element) => {
        if (column.column_name === element) {
          primary = true;
        }
      });
      let foreign = false;
      let tableForeign = null;
      table.foreigns.forEach((element) => {
        if (column.column_name === element.column_name) {
          foreign = true;
          let referenceTableName = singularize(element.foreign_table_name);
          referenceTableName = camelCase(referenceTableName);
          tableForeign = capitalize(referenceTableName) + "Entity";
        }
      });
      let created_at = false;
      let updated_at = false;
      let deleted_at = false;
      let isDate     = false;
      if (column.column_name === "created_at") {
        created_at = true;
        isDate = true;
      }
      if (column.column_name === "updated_at") {
        isTypeText;
        updated_at = true;
        isDate = true;
      }
      if (column.column_name === "deleted_at") {
        deleted_at = true;
        isDate = true;
      }
      let isEnum = false
      if(column.enum){
        isEnum= true
      }

      return {
        name: column.column_name,
        nameCamelCase: camelCase(column.column_name),
        is_nullable,
        type: type,
        type_column: column.data_type,
        type_initial:column.type_initial,
        length: column.character_maximum_length,
        enumArray: column.enum,
        enumOr: column.enum_or,
        primary,
        isTypeString,
        isTypeText,
        isTypeInteger,
        isTypeBoolean,
        isEnum,
        foreign,
        created_at,
        updated_at,
        deleted_at,
        tableForeign,
        isDate
      };
    });
  }
  foreigns(foreigns) {
    return foreigns.map((column) => {

        let tableName      = new TransformName()
        let nameTransform  = tableName.run(column.table_name)
        let tableRoutes    = new RouteGenerate (nameTransform)
        let tableNameR     = new TransformName()
        let nameTransformR = tableNameR.run(column.foreign_table_name)
        let tableRoutesR   = new RouteGenerate (nameTransformR)

        
      return {
        name: column.table_name,
        column_name:column.column_name,
        foreing_column_name:column.foreign_column_name,
        ...nameTransform,
        targetTableName: column.foreign_table_name,
        ...nameTransformR,
        ...tableRoutesR.nest()
      };
    });
  }

  foreignsRelations(foreignsRelations) {
    return foreignsRelations.map((column) => {

        let tableName                  = new TransformName()
        let nameTransform              = tableName.run(column.table_name)
        let tableRoutes                = new RouteGenerate (nameTransform)
        let tableNameR                 = new TransformName()
        let nameTransformR             = tableNameR.run(column.foreign_table_name)
        let tableRoutesR               = new RouteGenerate (nameTransformR)
        let tableSingular              = singularize(column.foreign_table_name);   // demo-post
        let tableForeignName           = camelCase(tableSingular); 
        let tablePluralize             = pluralizeReplace(column.foreign_table_name,'-') // demo-posts
        let foreignTableCamelPluralize = camelCase(tablePluralize); 
        
      return {
        name: column.table_name,
        tableForeignName,
        foreignTableCamelPluralize,
        column_name:column.column_name,
        ...nameTransform,
        ...tableRoutes.nest(),
        targetTableName: column.foreign_table_name,
        // ...nameTransformR,
        // ...tableRoutesR.nest()
      };
    });
  }
}

module.exports = {
    TableClass
}