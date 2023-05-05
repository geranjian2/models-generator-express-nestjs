const fs = require("fs");
const { execSync } = require("child_process");
const path = require("path");
const Mustache = require("mustache");
const PrettyError = require("pretty-error");
const pluralize = require("pluralize");
const { pgAdmin } = require("./databases/pg");
const { dataTypes } = require("./utils/types");
const {
  getInitials,
  singularize,
  capitalize,
  camelCase,
  middleDash,
  addSpace,
  pluralizeReplace,
  replace,
} = require("./utils/format-text");
const { TableClass } = require("./models/table.class");
const {
    TemplateNestSequelize,
} = require("./models/nestjs/sequelize/template-sequelize.class");
const {
  TemplateNestTypeOrm,
} = require("./models/nestjs/type-orm/template-typeorm.class");
const { ORMS, DATABASE } = require("./core/constants");
const { validationsConfig } = require("./core/validations");
const { mysqlAdmin } = require("./databases/mysql");
const { typeOrmInstalation } = require("./core/instalations/typeorm-instalation.class");
const { sequelizeOrmInstalation } = require("./core/instalations/sequelize-instalation.class");
const { mysqlInstalation } = require("./core/instalations/mysql-instalation.class");
const { generalInstalation } = require("./core/instalations/general.instalation.class");
const { migrationsConfig } = require("./core/instalations/migrations.config.class");

function fileread(filename)
{            
   var contents= fs.readFileSync(filename);
   return contents;
}  

module.exports = async (dbName, dbConnection, config) => {
  try {
    if(config.configMigrations){
      migrationsConfig.run(config)
    }
    let template;
    let confirm = validationsConfig(config)
    if(confirm.message){
        const pe = new PrettyError();
        const renderedError = pe.render(confirm.message);
        console.info(renderedError);
    }
    

    switch (config.orm) {
      case ORMS.typeorm:
        template = new TemplateNestTypeOrm(config);
        break;
      case ORMS.sequelize:
        template = new TemplateNestSequelize(config);
        break;
      default:
        let pe = new PrettyError();
        var renderedError = pe.render(
          "not add orm (TYPEORM | SEQUELIZE) to config"
        );
        console.info(renderedError);
        return;
    }
    let arrayTables
    switch (config.database) {
      case DATABASE.MYSQL:
        arrayTables = await mysqlAdmin(dbName, dbConnection, config);
        break;
      case DATABASE.POSTGRES:
        arrayTables = await pgAdmin(dbName, dbConnection, config);
        break;
      default:
        let pe = new PrettyError();
        var renderedError = pe.render(
          "not add database (POSTGRESS | MYSQL) to config"
        );
        console.info(renderedError);
        return;
    }
    if(arrayTables){

      let tableModel = new TableClass();
      let dataGenerate = await tableModel.model(arrayTables["tables"], config);
      if(config.installPackage){
        switch (config.orm) {
          case ORMS.typeorm:
            typeOrmInstalation.run()
            break;
          case ORMS.sequelize:
            sequelizeOrmInstalation.run()
            break;
        }
        switch (config.database) {
          case DATABASE.MYSQL:
            mysqlInstalation.run()   
            break;
            case DATABASE.POSTGRES:
            pgInstalation.run()
            break;
        }
        generalInstalation.run(config)
      }
      if(config.deleteAlways){

        fs.rmSync(config.outputModelFile, { recursive: true, force: true });
        fs.rmSync(path.join(config.outputModelFile,'../database/'), { recursive: true, force: true });
        fs.rmSync(path.join(config.outputModelFile,'../config/'), { recursive: true, force: true });
        fs.rmSync(path.join(config.outputModelFile,'../sequelize/'), { recursive: true, force: true });
        fs.rmSync(path.join(config.outputModelFile,'../typeorm/'), { recursive: true, force: true });
      }
      
      await template.run(dataGenerate);
      console.info("Success Generator!!");
      return true;
    }
  } catch (error) {
    let pe = new PrettyError();
    let renderedError = pe.render(new Error(error.message));
    console.info(renderedError);
  }
};
