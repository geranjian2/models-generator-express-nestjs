const fs = require('fs');
const { exec } = require("child_process");
const path = require('path');
const Mustache = require('mustache');
const PrettyError = require('pretty-error');
const pluralize = require('pluralize');
const {pgAdmin} = require('./databases/pg')
const {dataTypes} = require('./utils/types')
const {getInitials, singularize, capitalize, camelCase, middleDash, addSpace, pluralizeReplace, replace } = require('./utils/format-text');
const { TableClass } = require('./models/table.class');
const { TemplateNestSequalize } = require('./models/nestjs/sequlize/template-sequalize.class');

module.exports = async(dbName, dbConnection,  outputModelFile) => {
    
   
    let arrayTables = await pgAdmin(dbName,dbConnection)
    try {
        let tableModel = new TableClass(); 
        let dataGenerate = await tableModel.model(arrayTables['tables'])
        let config = {
            route: outputModelFile
        }
        let template = new TemplateNestSequalize(config); 
        fs.rmSync(outputModelFile, { recursive: true, force: true });
        await template.run(dataGenerate)
        console.info('Success Generator!!')
        return true;
       
    } catch (error) {
        let pe = new PrettyError();
        let renderedError = pe.render(new Error(error.message));
    }
    

}