
const { execSync } = require("child_process");
class MysqlInstalation {
    constructor(){
        
    }
    run(){
        console.log('mysql2')
        console.log('installing packages...','⛏️')
        execSync("npm un pg @types/pg")
        execSync("npm i mysql2 @nestjs/config")
    }
    
}

module.exports= {
    mysqlInstalation: new MysqlInstalation()
}