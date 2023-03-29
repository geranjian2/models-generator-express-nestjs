const fs = require('fs');
const path = require('path');
const Mustache = require('mustache');
const { FOLDERS } = require("../../../core/constants");
const route = '../../../'
let templateEntity = fs.readFileSync(path.join(__dirname, route+'templates/nestjs/sequalize/modelEntity.mustache'), 'UTF-8');

let templateModel = fs.readFileSync(path.join(__dirname,route+'templates/nestjs/sequalize/modelClass.mustache'), 'UTF-8');
let templateDto = fs.readFileSync(path.join(__dirname, route+'templates/nestjs/sequalize/modelDto.mustache'), 'UTF-8');
let templateService = fs.readFileSync(path.join(__dirname, route+'templates/nestjs/sequalize/modelService.mustache'), 'UTF-8');
let templateController = fs.readFileSync(path.join(__dirname, route+'templates/nestjs/sequalize/modelController.mustache'), 'UTF-8');
let templateQuery = fs.readFileSync(path.join(__dirname, route+'templates/nestjs/sequalize/modelQuery.mustache'), 'UTF-8');
let templateInterface = fs.readFileSync(path.join(__dirname, route+'templates/interfaces/modelInterface.mustache'), 'UTF-8');
let templateModule = fs.readFileSync(path.join(__dirname, route+'templates/nestjs/sequalize/modelModule.mustache'), 'UTF-8');
let templateModuleApp = fs.readFileSync(path.join(__dirname, route+'templates/nestjs/sequalize/modelModuleApp.mustache'), 'UTF-8');
let templateMain = fs.readFileSync(path.join(__dirname, route+'templates/nestjs/general/main.mustache'), 'UTF-8');
let templateDatabaseProvider = fs.readFileSync(path.join(__dirname, route+'templates/nestjs/sequalize/modelDatabaseProvider.mustache'), 'UTF-8');
let templateDatabaseConstants = fs.readFileSync(path.join(__dirname, route+'templates/nestjs/sequalize/modelDatabaseConstants.mustache'), 'UTF-8');
let templateDatabaseInitial= fs.readFileSync(path.join(__dirname, route+'templates/nestjs/sequalize/modelDatabaseInitial.mustache'), 'UTF-8');
let templateDatabaseModels= fs.readFileSync(path.join(__dirname, route+'templates/nestjs/sequalize/modelDatabaseModels.mustache'), 'UTF-8');
let templateDatabaseModule= fs.readFileSync(path.join(__dirname, route+'templates/nestjs/sequalize/modelDatabaseModule.mustache'), 'UTF-8');
let templatePostman = fs.readFileSync(path.join(__dirname, route+'templates/rest/modelJsonPostman.mustache'), 'UTF-8');




class TemplateNestSequalize {
    config
    constructor(config) {
        this.config = config
    }
    
    async run(models) { 
        await this.generator(models)
        await this.generateIndividual(models)
    } 
    
     generator(models){
        models.classes.forEach( async classTable => {
            await this.createFolder(classTable)
            let models     = Mustache.render(templateModel, classTable);
            let entities   = Mustache.render(templateEntity, classTable);
            let dtos       = Mustache.render(templateDto, classTable);
            let service    = Mustache.render(templateService, classTable);
            let controller = Mustache.render(templateController, classTable);
            let query      = Mustache.render(templateQuery, classTable);
            let interfaceT = Mustache.render(templateInterface, classTable);
            let moduleT    = Mustache.render(templateModule, classTable);
            let rest       =  Mustache.render(templatePostman, classTable);

            fs.writeFileSync(`${this.config.route}/${classTable.tablePluralize}/${FOLDERS[5]}/${classTable.tablePluralize}.query.ts`, query);

            fs.writeFileSync(`${this.config.route}/${classTable.tablePluralize}/${FOLDERS[8]}/${classTable.tablePluralize}.json`, rest);

            fs.writeFileSync(`${this.config.route}/${classTable.tablePluralize}/${FOLDERS[7]}/${classTable.tablePluralize}.module.ts`, moduleT);
            fs.writeFileSync(`${this.config.route}/${classTable.tablePluralize}/${FOLDERS[6]}/${classTable.tablePluralize}.interface.ts`, interfaceT);
            
            fs.writeFileSync(`${this.config.route}/${classTable.tablePluralize}/${FOLDERS[0]}/${classTable.tablePluralize}.model.ts`, models);

            
            fs.writeFileSync(`${this.config.route}/${classTable.tablePluralize}/${FOLDERS[1]}/${classTable.tablePluralize}.entity.ts`, entities);
            fs.writeFileSync(`${this.config.route}/${classTable.tablePluralize}/${FOLDERS[2]}/${classTable.tablePluralize}.dto.ts`, dtos);
            fs.writeFileSync(`${this.config.route}/${classTable.tablePluralize}/${FOLDERS[3]}/${classTable.tablePluralize}.controller.ts`, controller);
            fs.writeFileSync(`${this.config.route}/${classTable.tablePluralize}/${FOLDERS[4]}/${classTable.tablePluralize}.service.ts`, service);
            
        })
        return true
    }
    async createFolder(classTable){
        await FOLDERS.forEach(async (folder)=>{
            if (!fs.existsSync(`${this.config.route}/${classTable.tablePluralize}/${folder}`)){
                await fs.mkdirSync(`${this.config.route}/${classTable.tablePluralize}/${folder}`, { recursive: true });
            }
        })
        return true
    }
    async generateIndividual(classModelNames){
        let moduleApp = await Mustache.render(templateModuleApp, {tables:classModelNames.classes});
        let moduleMain = await Mustache.render(templateMain);
        let databaseProvider = await Mustache.render(templateDatabaseProvider, {tables:classModelNames.classes});
        let databaseContants = await Mustache.render(templateDatabaseConstants, {tables:classModelNames.classes});
        let databaseInitial = await Mustache.render(templateDatabaseInitial, {tables:classModelNames.classes});
        let databaseModels = await Mustache.render(templateDatabaseModels, {tables:classModelNames.classes});
        let databaseModule = await Mustache.render(templateDatabaseModule, {tables:classModelNames.classes});
        if (!fs.existsSync(`${this.config.route}/../database`)){
            await fs.mkdirSync(`${this.config.route}/../database`, { recursive: true });
        }
        fs.writeFileSync(`${this.config.route}/../app.module.ts`, moduleApp);
        fs.writeFileSync(`${this.config.route}/../main.ts`, moduleMain);
        fs.writeFileSync(`${this.config.route}/../database/modules.providers.ts`, databaseProvider);
        fs.writeFileSync(`${this.config.route}/../database/sequalize.constants.ts`, databaseContants);
        fs.writeFileSync(`${this.config.route}/../database/database.providers.ts`, databaseInitial);
        fs.writeFileSync(`${this.config.route}/../database/database.models.ts`, databaseModels);
        fs.writeFileSync(`${this.config.route}/../database/database.module.ts`, databaseModule);
    }
  }

  module.exports = {
    TemplateNestSequalize
  }