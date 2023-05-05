const { execSync } = require("child_process");
class TypeOrmInstalation {
    constructor(){
        
    }
    run(){
        console.log('typeorm')
        console.log('@nestjs/typeorm')
        console.log('@nestjs/config')
        console.log('installing packages...','⛏️')
        execSync("npm un sequelize sequelize-typescript @nestjs/sequelize")
        execSync("npm i typeorm @nestjs/typeorm @nestjs/config")
    }
    
}

module.exports= {
    typeOrmInstalation: new TypeOrmInstalation()
}