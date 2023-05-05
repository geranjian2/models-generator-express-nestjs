
const { execSync } = require("child_process");
class GeneralInstalation {
    constructor(){
        
    }
    run(config){
        if(config.auth.generate && !config.auth.uninstallPackage){
            console.log('bcryptjs')
            console.log('@nestjs/jwt')
            console.log('@nestjs/passport')
            console.log('@types/bcryptjs')
            console.log('@types/passport-jwt')
            console.log('@types/passport-local')
            console.log('passport')
            console.log('passport-jwt')
            console.log('passport-local')
            execSync("npm i bcryptjs @nestjs/jwt @nestjs/passport @types/bcryptjs @types/passport-jwt @types/passport-local passport passport-jwt passport-local")
            console.log('installing packages...','⛏️')
        }
        if(config.auth.uninstallPackage){
            console.log('bcryptjs')
            console.log('@nestjs/jwt')
            console.log('@nestjs/passport')
            console.log('@types/bcryptjs')
            console.log('@types/passport-jwt')
            console.log('@types/passport-local')
            console.log('passport')
            console.log('passport-jwt')
            console.log('passport-local') 
            execSync("npm un bcryptjs @nestjs/jwt @nestjs/passport @types/bcryptjs @types/passport-jwt @types/passport-local passport passport-jwt passport-local")
            console.log('uninstalling packages...','⛏️')
        }
    }
    
}

module.exports= {
    generalInstalation: new GeneralInstalation()
}