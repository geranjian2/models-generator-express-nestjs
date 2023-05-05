const fs = require('fs');
const path = require('path');
const Mustache = require('mustache');
const { FOLDERS, NUMBER_FOLDER } = require('../../../core/constants');
const route = '../../../';

let templateEntity = fs.readFileSync(
  path.join(
    __dirname,
    route + 'templates/nestjs/sequelize/modelEntity.mustache',
  ),
  'UTF-8',
);

let templateModel = fs.readFileSync(
  path.join(
    __dirname,
    route + 'templates/nestjs/sequelize/modelClass.mustache',
  ),
  'UTF-8',
);
let templateDto = fs.readFileSync(
  path.join(__dirname, route + 'templates/nestjs/sequelize/modelDto.mustache'),
  'UTF-8',
);
let templateService = fs.readFileSync(
  path.join(
    __dirname,
    route + 'templates/nestjs/sequelize/modelService.mustache',
  ),
  'UTF-8',
);
let templateController = fs.readFileSync(
  path.join(
    __dirname,
    route + 'templates/nestjs/sequelize/modelController.mustache',
  ),
  'UTF-8',
);
let templateQuery = fs.readFileSync(
  path.join(
    __dirname,
    route + 'templates/nestjs/sequelize/modelQuery.mustache',
  ),
  'UTF-8',
);
let templateInterface = fs.readFileSync(
  path.join(__dirname, route + 'templates/interfaces/modelInterface.mustache'),
  'UTF-8',
);
let templateModule = fs.readFileSync(
  path.join(
    __dirname,
    route + 'templates/nestjs/sequelize/modelModule.mustache',
  ),
  'UTF-8',
);
let templateModuleApp = fs.readFileSync(
  path.join(
    __dirname,
    route + 'templates/nestjs/sequelize/modelModuleApp.mustache',
  ),
  'UTF-8',
);
let templateMain = fs.readFileSync(
  path.join(__dirname, route + 'templates/nestjs/general/main.mustache'),
  'UTF-8',
);
let templateDatabaseProvider = fs.readFileSync(
  path.join(
    __dirname,
    route + 'templates/nestjs/sequelize/modelDatabaseProvider.mustache',
  ),
  'UTF-8',
);
let templateDatabaseConstants = fs.readFileSync(
  path.join(
    __dirname,
    route + 'templates/nestjs/sequelize/modelDatabaseConstants.mustache',
  ),
  'UTF-8',
);
let templateDatabaseInitial = fs.readFileSync(
  path.join(
    __dirname,
    route + 'templates/nestjs/sequelize/modelDatabaseInitial.mustache',
  ),
  'UTF-8',
);
let templateDatabaseModels = fs.readFileSync(
  path.join(
    __dirname,
    route + 'templates/nestjs/sequelize/modelDatabaseModels.mustache',
  ),
  'UTF-8',
);
let templateDatabaseModule = fs.readFileSync(
  path.join(
    __dirname,
    route + 'templates/nestjs/sequelize/modelDatabaseModule.mustache',
  ),
  'UTF-8',
);
let templatePostman = fs.readFileSync(
  path.join(__dirname, route + 'templates/rest/modelJsonPostman.mustache'),
  'UTF-8',
);
let configInitialSequelize = fs.readFileSync(
  path.join(__dirname, route + 'templates/nestjs/sequelize/sequelize/config.mustache'),
  'UTF-8',
);

let authDecorator = fs.readFileSync(path.join(__dirname, route+'templates/nestjs/sequelize/auth/decorators/user.decorator.mustache'), 'UTF-8');
let authDto = fs.readFileSync(path.join(__dirname, route+'templates/nestjs/sequelize/auth/dtos/auth.dto.mustache'), 'UTF-8');
let authGuardsLocal = fs.readFileSync(path.join(__dirname, route+'templates/nestjs/sequelize/auth/guards/mode.local-auth.guard.mustache'), 'UTF-8');
let authGuardsJwt = fs.readFileSync(path.join(__dirname, route+'templates/nestjs/sequelize/auth/guards/model.jwt.auth.guard.mustache'), 'UTF-8');
let authStrategyLocal = fs.readFileSync(path.join(__dirname, route+'templates/nestjs/sequelize/auth/strategies/local.strategy.mustache'), 'UTF-8');
let authStrategyJwt = fs.readFileSync(path.join(__dirname, route+'templates/nestjs/sequelize/auth/strategies/jwt.strategy.mustache'), 'UTF-8');
let authService = fs.readFileSync(path.join(__dirname, route+'templates/nestjs/sequelize/auth/model.service.mustache'), 'UTF-8');
let authModule = fs.readFileSync(path.join(__dirname, route+'templates/nestjs/sequelize/auth/model.module.mustache'), 'UTF-8');
let authController = fs.readFileSync(path.join(__dirname, route+'templates/nestjs/sequelize/auth/model.controller.mustache'), 'UTF-8');

class TemplateNestSequelize {
  config;
  constructor(config) {
    this.config = config;
  }

  async run(models) {
    await this.generator(models);
    await this.generateIndividual(models);
    await this.generateAuth(models)
  }

  generator(models) {
    models.classes.forEach(async (classTable) => {
      await this.createFolder(classTable);
      let models = Mustache.render(templateModel, classTable);
      let entities = Mustache.render(templateEntity, classTable);
      let dtos = Mustache.render(templateDto, classTable);
      let service = Mustache.render(templateService, classTable);
      let controller = Mustache.render(templateController, classTable);
      let query = Mustache.render(templateQuery, classTable);
      let interfaceT = Mustache.render(templateInterface, classTable);
      let moduleT = Mustache.render(templateModule, classTable);
      let rest = Mustache.render(templatePostman, classTable);

      //   fs.writeFileSync(
      //     `${this.config.outputModelFile}/${classTable.tablePluralize}/${
      //       FOLDERS[NUMBER_FOLDER.QUERY]
      //     }/${classTable.tablePluralize}.query.ts`,
      //     query,
      //   );
      if (this.config.generatorForModule.rest) {
        fs.writeFileSync(
          `${this.config.outputModelFile}/${classTable.tablePluralize}/${
            FOLDERS[NUMBER_FOLDER.REST]
          }/${classTable.tablePluralize}.json`,
          rest,
        );
      }
      if (this.config.generatorForModule.interface) {
        fs.writeFileSync(
          `${this.config.outputModelFile}/${classTable.tablePluralize}/${
            FOLDERS[NUMBER_FOLDER.INTERFACE]
          }/${classTable.tablePluralize}.interface.ts`,
          interfaceT,
        );
      }
      if (this.config.generatorForModule.models) {
        fs.writeFileSync(
          `${this.config.outputModelFile}/${classTable.tablePluralize}/${
            FOLDERS[NUMBER_FOLDER.MODELS]
          }/${classTable.tablePluralize}.model.ts`,
          models,
        );
      }
      if (this.config.generatorForModule.entitie) {
        fs.writeFileSync(
          `${this.config.outputModelFile}/${classTable.tablePluralize}/${
            FOLDERS[NUMBER_FOLDER.ENTITY]
          }/${classTable.tablePluralize}.entity.ts`,
          entities,
        );
      }
      if (this.config.generatorForModule.dto) {
        fs.writeFileSync(
          `${this.config.outputModelFile}/${classTable.tablePluralize}/${
            FOLDERS[NUMBER_FOLDER.DTO]
          }/${classTable.tablePluralize}.dto.ts`,
          dtos,
        );
      }
      if (this.config.generatorForModule.module) {
        fs.writeFileSync(
          `${this.config.outputModelFile}/${classTable.tablePluralize}/${classTable.tablePluralize}.module.ts`,
          moduleT,
        );
      }
      if (this.config.generatorForModule.controller) {
        fs.writeFileSync(
          `${this.config.outputModelFile}/${classTable.tablePluralize}/${classTable.tablePluralize}.controller.ts`,
          controller,
        );
      }
      if (this.config.generatorForModule.service) {
        fs.writeFileSync(
          `${this.config.outputModelFile}/${classTable.tablePluralize}/${classTable.tablePluralize}.service.ts`,
          service,
        );
      }
    });
    return true;
  }
  async createFolder(classTable) {
    await FOLDERS.forEach(async (folder) => {
      if (
        !fs.existsSync(
          `${this.config.outputModelFile}/${classTable.tablePluralize}/${folder}`,
        )
      ) {
        if (
          folder === FOLDERS[NUMBER_FOLDER.DTO] &&
          this.config.generatorForModule.dto
        ) {
          await fs.mkdirSync(
            `${this.config.outputModelFile}/${classTable.tablePluralize}/${folder}`,
            { recursive: true },
          );
        }
        if (
          folder === FOLDERS[NUMBER_FOLDER.MODELS] &&
          this.config.generatorForModule.models
        ) {
          await fs.mkdirSync(
            `${this.config.outputModelFile}/${classTable.tablePluralize}/${folder}`,
            { recursive: true },
          );
        }
        if (
          folder === FOLDERS[NUMBER_FOLDER.ENTITY] &&
          this.config.generatorForModule.entitie
        ) {
          await fs.mkdirSync(
            `${this.config.outputModelFile}/${classTable.tablePluralize}/${folder}`,
            { recursive: true },
          );
        }
        if (
          folder === FOLDERS[NUMBER_FOLDER.INTERFACE] &&
          this.config.generatorForModule.interface
        ) {
          await fs.mkdirSync(
            `${this.config.outputModelFile}/${classTable.tablePluralize}/${folder}`,
            { recursive: true },
          );
        }
        if (
          folder === FOLDERS[NUMBER_FOLDER.REST] &&
          this.config.generatorForModule.rest
        ) {
          await fs.mkdirSync(
            `${this.config.outputModelFile}/${classTable.tablePluralize}/${folder}`,
            { recursive: true },
          );
        }
        // await fs.mkdirSync(
        //   `${this.config.outputModelFile}/${classTable.tablePluralize}/${folder}`,
        //   { recursive: true },
        // );
      }
    });
    return true;
  }
  async generateIndividual(classModelNames) {
    let moduleApp = await Mustache.render(templateModuleApp, {tables:classModelNames.classes, auth:classModelNames.auth});
    let moduleMain = await Mustache.render(templateMain);
    let databaseProvider = await Mustache.render(templateDatabaseProvider, {
      tables: classModelNames.classes,
    });
    let databaseContants = await Mustache.render(templateDatabaseConstants, {
      tables: classModelNames.classes,
      config: this.config
    });
    let databaseInitial = await Mustache.render(templateDatabaseInitial, {
      tables: classModelNames.classes,
    });
    let databaseModels = await Mustache.render(templateDatabaseModels, {
      tables: classModelNames.classes,
    });
    let databaseModule = await Mustache.render(templateDatabaseModule, {
      tables: classModelNames.classes,
    });
    let configSequelize = await Mustache.render(configInitialSequelize, {
      tables: classModelNames.classes,
    });
    if (!fs.existsSync(`${this.config.outputModelFile}/../database`)) {
      await fs.mkdirSync(`${this.config.outputModelFile}/../database`, {
        recursive: true,
      });
    }
    if (!fs.existsSync(`${this.config.outputModelFile}/../sequelize`)) {
      await fs.mkdirSync(`${this.config.outputModelFile}/../sequelize`, {
        recursive: true,
      });
    }
    if (!fs.existsSync(`${this.config.outputModelFile}/../sequelize/config`)) {
      await fs.mkdirSync(`${this.config.outputModelFile}/../sequelize/config`, {
        recursive: true,
      });
    }
    if (!fs.existsSync(`${this.config.outputModelFile}/../sequelize/migrations`)) {
      await fs.mkdirSync(`${this.config.outputModelFile}/../sequelize/migrations`, {
        recursive: true,
      });
    }
    if (!fs.existsSync(`${this.config.outputModelFile}/../sequelize/seeders`)) {
      await fs.mkdirSync(`${this.config.outputModelFile}/../sequelize/seeders`, {
        recursive: true,
      });
    }
    fs.writeFileSync(`${this.config.outputModelFile}/../app.module.ts`, moduleApp);
    fs.writeFileSync(`${this.config.outputModelFile}/../main.ts`, moduleMain);
    fs.writeFileSync(
      `${this.config.outputModelFile}/../database/modules.providers.ts`,
      databaseProvider,
    );
    fs.writeFileSync(
      `${this.config.outputModelFile}/../database/sequalize.constants.ts`,
      databaseContants,
    );
    fs.writeFileSync(
      `${this.config.outputModelFile}/../database/database.providers.ts`,
      databaseInitial,
    );
    fs.writeFileSync(
      `${this.config.outputModelFile}/../database/database.models.ts`,
      databaseModels,
    );
    fs.writeFileSync(
      `${this.config.outputModelFile}/../database/database.module.ts`,
      databaseModule,
    );
    fs.writeFileSync(
      `${this.config.outputModelFile}/../sequelize/config/config.js`,
      configSequelize,
    );
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
  TemplateNestSequelize: TemplateNestSequelize,
};
