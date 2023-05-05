const fs = require('fs');
const path = require('path');
const Mustache = require('mustache');
const { FOLDERS, NUMBER_FOLDER } = require("../../../core/constants");
const route = '../../../'
let templateEntity = fs.readFileSync(path.join(__dirname, route+'templates/nestjs/type-orm/modelEntity.mustache'), 'UTF-8');
let templateService = fs.readFileSync(path.join(__dirname, route+'templates/nestjs/type-orm/modelService.mustache'), 'UTF-8');
let templateController = fs.readFileSync(path.join(__dirname, route+'templates/nestjs/type-orm/modelController.mustache'), 'UTF-8');
let templateModule = fs.readFileSync(path.join(__dirname, route+'templates/nestjs/type-orm/modelModule.mustache'), 'UTF-8');
let templateModuleApp = fs.readFileSync(path.join(__dirname, route+'templates/nestjs/type-orm/modelModuleApp.mustache'), 'UTF-8');
let templateDatabaseConfig = fs.readFileSync(path.join(__dirname, route+'templates/nestjs/type-orm/config/modelConfig.mustache'), 'UTF-8');
let templateMigrationConfig = fs.readFileSync(path.join(__dirname, route+'templates/nestjs/type-orm/config/modelConfigMigrations.mustache'), 'UTF-8');
let templateModuleConfig = fs.readFileSync(path.join(__dirname, route+'templates/nestjs/type-orm/config/modelConfigModule.mustache'), 'UTF-8');
let templateModel = fs.readFileSync(path.join(__dirname,route+'templates/nestjs/type-orm/modelClass.mustache'), 'UTF-8');
let templateDto = fs.readFileSync(path.join(__dirname, route+'templates/nestjs/type-orm/modelDto.mustache'), 'UTF-8');
let templateInterface = fs.readFileSync(path.join(__dirname, route+'templates/interfaces/modelInterface.mustache'), 'UTF-8');

let templateMain = fs.readFileSync(path.join(__dirname, route+'templates/nestjs/general/main.mustache'), 'UTF-8');


let templatePostman = fs.readFileSync(path.join(__dirname, route+'templates/rest/modelJsonPostman.mustache'), 'UTF-8');


let authDecorator = fs.readFileSync(path.join(__dirname, route+'templates/nestjs/type-orm/auth/decorators/user.decorator.mustache'), 'UTF-8');
let authDto = fs.readFileSync(path.join(__dirname, route+'templates/nestjs/type-orm/auth/dtos/auth.dto.mustache'), 'UTF-8');
let authGuardsLocal = fs.readFileSync(path.join(__dirname, route+'templates/nestjs/type-orm/auth/guards/mode.local-auth.guard.mustache'), 'UTF-8');
let authGuardsJwt = fs.readFileSync(path.join(__dirname, route+'templates/nestjs/type-orm/auth/guards/model.jwt.auth.guard.mustache'), 'UTF-8');
let authStrategyLocal = fs.readFileSync(path.join(__dirname, route+'templates/nestjs/type-orm/auth/strategies/local.strategy.mustache'), 'UTF-8');
let authStrategyJwt = fs.readFileSync(path.join(__dirname, route+'templates/nestjs/type-orm/auth/strategies/jwt.strategy.mustache'), 'UTF-8');
let authService = fs.readFileSync(path.join(__dirname, route+'templates/nestjs/type-orm/auth/model.service.mustache'), 'UTF-8');
let authModule = fs.readFileSync(path.join(__dirname, route+'templates/nestjs/type-orm/auth/model.module.mustache'), 'UTF-8');
let authController = fs.readFileSync(path.join(__dirname, route+'templates/nestjs/type-orm/auth/model.controller.mustache'), 'UTF-8');




class TemplateNestTypeOrm {
    config
    constructor(config) {
        this.config = config
    }
    
    async run(models) { 
        await this.generator(models)
        await this.generateIndividual(models)
        await this.generateAuth(models)
    } 
    
     generator(models){
        models.classes.forEach( async classTable => {
            await this.createFolder(classTable)
            let models       = Mustache.render(templateModel, classTable);
            let entities     = Mustache.render(templateEntity, classTable);
            let dtos         = Mustache.render(templateDto, classTable);
            let service      = Mustache.render(templateService, classTable);
            let controller   = Mustache.render(templateController, classTable);
            let interfaceT   = Mustache.render(templateInterface, classTable);
            let moduleT      = Mustache.render(templateModule, classTable);
            let rest         = Mustache.render(templatePostman, classTable);
            
            fs.writeFileSync(`${this.config.outputModelFile}/${classTable.tablePluralize}/${FOLDERS[NUMBER_FOLDER.MODELS]}/${classTable.tablePluralize}.model.ts`, models);
            fs.writeFileSync(`${this.config.outputModelFile}/${classTable.tablePluralize}/${FOLDERS[NUMBER_FOLDER.ENTITY]}/${classTable.tablePluralize}.entity.ts`, entities);
            fs.writeFileSync(`${this.config.outputModelFile}/${classTable.tablePluralize}/${FOLDERS[NUMBER_FOLDER.DTO]}/${classTable.tablePluralize}.dto.ts`, dtos);
            fs.writeFileSync(`${this.config.outputModelFile}/${classTable.tablePluralize}/${classTable.tablePluralize}.controller.ts`, controller);
            fs.writeFileSync(`${this.config.outputModelFile}/${classTable.tablePluralize}/${classTable.tablePluralize}.service.ts`, service);
            fs.writeFileSync(`${this.config.outputModelFile}/${classTable.tablePluralize}/${FOLDERS[NUMBER_FOLDER.INTERFACE]}/${classTable.tablePluralize}.interface.ts`, interfaceT);
            fs.writeFileSync(`${this.config.outputModelFile}/${classTable.tablePluralize}/${classTable.tablePluralize}.module.ts`, moduleT);
            fs.writeFileSync(`${this.config.outputModelFile}/${classTable.tablePluralize}/${FOLDERS[NUMBER_FOLDER.REST]}/${classTable.tablePluralize}.json`, rest);
            
        })
        return true
    }
    async createFolder(classTable){
        await FOLDERS.forEach(async (folder)=>{
            if (!fs.existsSync(`${this.config.outputModelFile}/${classTable.tablePluralize}/${folder}`)){
                await fs.mkdirSync(`${this.config.outputModelFile}/${classTable.tablePluralize}/${folder}`, { recursive: true });
            }
        })
        return true
    }
    async generateIndividual(classModelNames){
        let moduleApp = await Mustache.render(templateModuleApp, {tables:classModelNames.classes, auth:classModelNames.auth});
        let moduleMain = await Mustache.render(templateMain);
        let databaseConfig = await Mustache.render(templateDatabaseConfig, {tables:classModelNames.classes});
        let databaseMigration = await Mustache.render(templateMigrationConfig, {tables:classModelNames.classes});
        let databaseModuleApp = await Mustache.render(templateModuleConfig, {tables:classModelNames.classes});
        if (!fs.existsSync(`${this.config.outputModelFile}/../config`)){
            await fs.mkdirSync(`${this.config.outputModelFile}/../config`, { recursive: true });
        }
        if (!fs.existsSync(`${this.config.outputModelFile}/../typeorm/migrations`)){
            await fs.mkdirSync(`${this.config.outputModelFile}/../typeorm/migrations`, { recursive: true });
        }
        fs.writeFileSync(`${this.config.outputModelFile}/../app.module.ts`, moduleApp);
        fs.writeFileSync(`${this.config.outputModelFile}/../main.ts`, moduleMain);
        fs.writeFileSync(`${this.config.outputModelFile}/../config/database.typeorm.config.ts`, databaseConfig);
        fs.writeFileSync(`${this.config.outputModelFile}/../config/migrations.typeorm.config.ts`, databaseMigration);
        fs.writeFileSync(`${this.config.outputModelFile}/../config/config.typeorm.module.ts`, databaseModuleApp);

    }
    async generateAuth(models){
        let FOLDERS = ['guards','strategies', 'dtos', 'decorators']
        if(this.config.auth.generate){
            await FOLDERS.forEach(async (folder)=>{
                if (!fs.existsSync(`${this.config.outputModelFile}/auth/${folder}`)){
                    await fs.mkdirSync(`${this.config.outputModelFile}/auth/${folder}`, { recursive: true });
                }
            })
            models.auth.forEach( async auth => {
                let gAuthDecorator     = Mustache.render(authDecorator, auth);
                let gAuthDto           = Mustache.render(authDto, auth);
                let gAuthGuardsLocal   = Mustache.render(authGuardsLocal, auth);
                let gAuthGuardsJwt     = Mustache.render(authGuardsJwt, auth);
                let gAuthStrategyLocal = Mustache.render(authStrategyLocal, auth);
                let gAuthStrategyJwt   = Mustache.render(authStrategyJwt, auth);
                let gAuthService       = Mustache.render(authService, auth)
                let gAuthModule        = Mustache.render(authModule, auth)
                let gAuthController    = Mustache.render(authController, auth)
                
                fs.writeFileSync(`${this.config.outputModelFile}/auth/${FOLDERS[0]}/jwt.auth.guard.ts`, gAuthGuardsJwt);
                fs.writeFileSync(`${this.config.outputModelFile}/auth/${FOLDERS[0]}/local-auth.guard.ts`, gAuthGuardsLocal);
    
                fs.writeFileSync(`${this.config.outputModelFile}/auth/${FOLDERS[1]}/jwt.strategy.ts`, gAuthStrategyJwt);
                fs.writeFileSync(`${this.config.outputModelFile}/auth/${FOLDERS[1]}/local.strategy.ts`, gAuthStrategyLocal);

                fs.writeFileSync(`${this.config.outputModelFile}/auth/${FOLDERS[2]}/auth.dto.ts`, gAuthDto);
                fs.writeFileSync(`${this.config.outputModelFile}/auth/${FOLDERS[3]}/user.decorator.ts`, gAuthDecorator);

                fs.writeFileSync(`${this.config.outputModelFile}/auth/auth.service.ts`, gAuthService);
                fs.writeFileSync(`${this.config.outputModelFile}/auth/auth.module.ts`, gAuthModule);
                fs.writeFileSync(`${this.config.outputModelFile}/auth/auth.controller.ts`, gAuthController);
            })
        }
    }
  }

  module.exports = {
    TemplateNestTypeOrm
  }