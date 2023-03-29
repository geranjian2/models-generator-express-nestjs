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
    
    const folders=['models','entities','dtos','controllers','services','query', 'interface', 'module', 'rest']


    let templateEntity = fs.readFileSync(path.join(__dirname, 'templates/nestjs/sequalize/modelEntity.mustache'), 'UTF-8');
    let templateModel = fs.readFileSync(path.join(__dirname, 'templates/nestjs/sequalize/modelClass.mustache'), 'UTF-8');
    let templateDto = fs.readFileSync(path.join(__dirname, 'templates/nestjs/sequalize/modelDto.mustache'), 'UTF-8');
    let templateController = fs.readFileSync(path.join(__dirname, 'templates/nestjs/sequalize/modelController.mustache'), 'UTF-8');
    let templateService = fs.readFileSync(path.join(__dirname, 'templates/nestjs/sequalize/modelService.mustache'), 'UTF-8');
    let templateQuery = fs.readFileSync(path.join(__dirname, 'templates/nestjs/sequalize/modelQuery.mustache'), 'UTF-8');
    let templateInterface = fs.readFileSync(path.join(__dirname, 'templates/interfaces/modelInterface.mustache'), 'UTF-8');
    let templateModule = fs.readFileSync(path.join(__dirname, 'templates/nestjs/sequalize/modelModule.mustache'), 'UTF-8');
    let templateModuleApp = fs.readFileSync(path.join(__dirname, 'templates/nestjs/sequalize/modelModuleApp.mustache'), 'UTF-8');
    let templateDatabaseProvider = fs.readFileSync(path.join(__dirname, 'templates/nestjs/sequalize/modelDatabaseProvider.mustache'), 'UTF-8');
    let templateDatabaseConstants = fs.readFileSync(path.join(__dirname, 'templates/nestjs/sequalize/modelDatabaseConstants.mustache'), 'UTF-8');
    let templateDatabaseInitial= fs.readFileSync(path.join(__dirname, 'templates/nestjs/sequalize/modelDatabaseInitial.mustache'), 'UTF-8');
    let templateDatabaseModels= fs.readFileSync(path.join(__dirname, 'templates/nestjs/sequalize/modelDatabaseModels.mustache'), 'UTF-8');
    let templateDatabaseModule= fs.readFileSync(path.join(__dirname, 'templates/nestjs/sequalize/modelDatabaseModule.mustache'), 'UTF-8');
    let templatePostman = fs.readFileSync(path.join(__dirname, 'templates/rest/modelJsonPostman.mustache'), 'UTF-8');


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
        return true;
       
    
         
        //  classModelNames.classes.forEach( async classTable => {
        //     folders.forEach(async (folder)=>{
        //         if (!fs.existsSync(`${outputModelFile}/${classTable.tablePluralize}/${folder}`)){
        //             await fs.mkdirSync(`${outputModelFile}/${classTable.tablePluralize}/${folder}`, { recursive: true });
        //         }
        //     })
        //   let models = await Mustache.render(templateModel, classTable);
        //   let entities = await Mustache.render(templateEntity, classTable);
        //   let dtos = await Mustache.render(templateDto, classTable);
        //   let controller = await Mustache.render(templateController, classTable);
        //   let service = await Mustache.render(templateService, classTable);
        //   let query = await Mustache.render(templateQuery, classTable);
        //   let interface = await Mustache.render(templateInterface, classTable);
        //   let module = await Mustache.render(templateModule, classTable);
        //   let rest = await Mustache.render(templatePostman, classTable);
        //    fs.writeFileSync(`${outputModelFile}/${classTable.tablePluralize}/${folders[0]}/${classTable.tablePluralize}.model.ts`, models);
        //    fs.writeFileSync(`${outputModelFile}/${classTable.tablePluralize}/${folders[1]}/${classTable.tablePluralize}.entity.ts`, entities);
        //    fs.writeFileSync(`${outputModelFile}/${classTable.tablePluralize}/${folders[2]}/${classTable.tablePluralize}.dto.ts`, dtos);
        //    fs.writeFileSync(`${outputModelFile}/${classTable.tablePluralize}/${folders[3]}/${classTable.tablePluralize}.controller.ts`, controller);
        //    fs.writeFileSync(`${outputModelFile}/${classTable.tablePluralize}/${folders[4]}/${classTable.tablePluralize}.service.ts`, service);
        //    fs.writeFileSync(`${outputModelFile}/${classTable.tablePluralize}/${folders[5]}/${classTable.tablePluralize}.query.ts`, query);
        //    fs.writeFileSync(`${outputModelFile}/${classTable.tablePluralize}/${folders[6]}/${classTable.tablePluralize}.interface.ts`, interface);
        //    fs.writeFileSync(`${outputModelFile}/${classTable.tablePluralize}/${folders[7]}/${classTable.tablePluralize}.module.ts`, module);
        //    fs.writeFileSync(`${outputModelFile}/${classTable.tablePluralize}/${folders[8]}/${classTable.tablePluralize}.json`, rest);
        // })
        // let moduleApp = await Mustache.render(templateModuleApp, {tables:classModelNames.classes});
        // let databaseProvider = await Mustache.render(templateDatabaseProvider, {tables:classModelNames.classes});
        // let databaseContants = await Mustache.render(templateDatabaseConstants, {tables:classModelNames.classes});
        // let databaseInitial = await Mustache.render(templateDatabaseInitial, {tables:classModelNames.classes});
        // let databaseModels = await Mustache.render(templateDatabaseModels, {tables:classModelNames.classes});
        // let databaseModule = await Mustache.render(templateDatabaseModule, {tables:classModelNames.classes});
    
    
        // if (!fs.existsSync(`${outputModelFile}/../database`)){
        //     await fs.mkdirSync(`${outputModelFile}/../database`, { recursive: true });
        // }
        // fs.writeFileSync(`${outputModelFile}/../app.module.ts`, moduleApp);
        // fs.writeFileSync(`${outputModelFile}/../database/modules.providers.ts`, databaseProvider);
        // fs.writeFileSync(`${outputModelFile}/../database/sequalize.constants.ts`, databaseContants);
        // fs.writeFileSync(`${outputModelFile}/../database/database.providers.ts`, databaseInitial);
        // fs.writeFileSync(`${outputModelFile}/../database/database.models.ts`, databaseModels);
        // fs.writeFileSync(`${outputModelFile}/../database/database.module.ts`, databaseModule);
        // return true;
    } catch (error) {
        let pe = new PrettyError();
        let renderedError = pe.render(new Error(error.message));
        console.log(renderedError);
    }
    

}