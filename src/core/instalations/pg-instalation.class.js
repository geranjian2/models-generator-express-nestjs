
const { execSync } = require("child_process");
class PgInstalation {
    constructor(){
        
    }
    run(){
        console.log('pg')
        console.log('installing packages...','⛏️')
        execSync("npm un mysql2")
        execSync("npm i pg @types/pg @nestjs/config")
    }
    
}

module.exports= {
    pgInstalation: new PgInstalation()
}