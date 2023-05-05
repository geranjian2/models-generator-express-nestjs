const fs = require("fs");
const { exec } = require("child_process");
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
} = require("./models/nestjs/sequlize/template-sequalize.class");
const {
  TemplateNestTypeOrm,
} = require("./models/nestjs/type-orm/template-typeorm.class");
const { ORMS } = require("./core/constants");
const { validationsConfig } = require("./core/validations");

module.exports = async (dbName, dbConnection, config) => {
  try {
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
    let arrayTables = await pgAdmin(dbName, dbConnection, config);
    let tableModel = new TableClass();
    let dataGenerate = await tableModel.model(arrayTables["tables"]);
    fs.rmSync(config.outputModelFile, { recursive: true, force: true });
    await template.run(dataGenerate);
    console.info("Success Generator!!");
    return true;
  } catch (error) {
    let pe = new PrettyError();
    let renderedError = pe.render(new Error(error.message));
    console.info(renderedError);
  }
};
