const { FOLDERS, MODELS_NAME } = require("../core/constants");
const MODELS=0
const ENTITY=1
const DTO=2
const CONTROLLER=3
const SERVICE=4
const QUERY=5
const INTERFACE=6
const MODULE=7
const REST=8
class RouteGenerate {
    routes
    tableNames
    constructor(tableNames){
        this.tableNames = tableNames;
    }
    nest(){
        return {
            routeController: `import { ${this.tableNames.tableClassController} } from '../../${this.tableNames.tablePluralize}/${FOLDERS[CONTROLLER]}/${this.tableNames.tablePluralize}.controller'`,
            
            routeService: `import { ${this.tableNames.tableClassService} } from '../../${this.tableNames.tablePluralize}/${FOLDERS[SERVICE]}/${this.tableNames.tablePluralize}.service'`,
            routeModel: `import { ${this.tableNames.tableClassModel} } from '../../${this.tableNames.tablePluralize}/${FOLDERS[MODELS]}/${this.tableNames.tablePluralize}.model'`,

            routeDto: `import { ${this.tableNames.tableModelDto} } from '../../${this.tableNames.tablePluralize}/${FOLDERS[DTO]}/${this.tableNames.tablePluralize}.dto'`,
            
            routeEntity:`import { ${this.tableNames.tableEntity} } from '../../${this.tableNames.tablePluralize}/${FOLDERS[ENTITY]}/${this.tableNames.tablePluralize}.entity'`,

            routeInterface:`import { ${this.tableNames.tableModel} } from '../../${this.tableNames.tablePluralize}/${FOLDERS[INTERFACE]}/${this.tableNames.tablePluralize}.interface'`,
            routeModule:`import { ${this.tableNames.tableClassModule} } from './modules/${this.tableNames.tablePluralize}/${FOLDERS[MODULE]}/${this.tableNames.tablePluralize}.module'`
        }
    }
}
module.exports={RouteGenerate}