const { FOLDERS, MODELS_NAME, NUMBER_FOLDER } = require("../core/constants");

class RouteGenerate {
    routes
    tableNames
    config={
        outputModelFile:''
    }
    constructor(tableNames,config){
        this.tableNames = tableNames;
        if(config){
            this.config = config
        }
    }
    nest(){
        return {
            routeController: `import { ${this.tableNames.tableClassController} } from '../../${this.tableNames.tablePluralize}/${FOLDERS[NUMBER_FOLDER.CONTROLLER]}/${this.tableNames.tablePluralize}.controller'`,
            routeControllerDirect: `import { ${this.tableNames.tableClassController} } from './${this.tableNames.tablePluralize}.controller'`,
            
            routeService: `import { ${this.tableNames.tableClassService} } from '../../${this.tableNames.tablePluralize}/${FOLDERS[NUMBER_FOLDER.SERVICE]}/${this.tableNames.tablePluralize}.service'`,
            routeServiceDirect: `import { ${this.tableNames.tableClassService} } from './${this.tableNames.tablePluralize}.service'`,
            routeModel: `import { ${this.tableNames.tableClassModel} } from '../../${this.tableNames.tablePluralize}/${FOLDERS[NUMBER_FOLDER.MODELS]}/${this.tableNames.tablePluralize}.model'`,

            routeDto: `import { ${this.tableNames.tableModelDto} } from './${FOLDERS[NUMBER_FOLDER.DTO]}/${this.tableNames.tablePluralize}.dto'`,
            
            routeEntity:`import { ${this.tableNames.tableEntity} } from '../../${this.tableNames.tablePluralize}/${FOLDERS[NUMBER_FOLDER.ENTITY]}/${this.tableNames.tablePluralize}.entity'`,
            routeEntityMain:`import { ${this.tableNames.tableEntity} } from '${this.config.outputModelFile}${this.tableNames.tablePluralize}/${FOLDERS[NUMBER_FOLDER.ENTITY]}/${this.tableNames.tablePluralize}.entity'`,
            routeEntityDirect:`import { ${this.tableNames.tableEntity} } from './${FOLDERS[NUMBER_FOLDER.ENTITY]}/${this.tableNames.tablePluralize}.entity'`,

            routeInterface:`import { ${this.tableNames.tableModel} } from '../../${this.tableNames.tablePluralize}/${FOLDERS[NUMBER_FOLDER.INTERFACE]}/${this.tableNames.tablePluralize}.interface'`,
            routeModule:`import { ${this.tableNames.tableClassModule} } from './modules/${this.tableNames.tablePluralize}/${FOLDERS[NUMBER_FOLDER.MODULE]}/${this.tableNames.tablePluralize}.module'`,
            routeModuleDirect:`import { ${this.tableNames.tableClassModule} } from './modules/${this.tableNames.tablePluralize}/${this.tableNames.tablePluralize}.module'`
        }
    }
}
module.exports={RouteGenerate}