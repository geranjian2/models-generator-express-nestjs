
const { execSync } = require("child_process");
class SequelizeOrmInstalation {
    constructor(){
        
    }
    run(){
        console.log('sequelize')
        console.log('sequelize-typescript')
        console.log('@nestjs/sequelize')
        console.log('installing packages...','⛏️')
        execSync("npm un typeorm @nestjs/typeorm @nestjs/config")
        execSync("npm i sequelize sequelize-typescript @nestjs/sequelize")
    }
    
}

module.exports= {
    sequelizeOrmInstalation: new SequelizeOrmInstalation()
}