const validationsConfig =  function validations(config){
    if(!config.orm){
        return {
            message:"not add orm (TYPEORM | SEQUELIZE) to config"
        } 
    }
    if(!config.outputModelFile){
        return {
            message:"not add outputModelFile to config"
        } 
    }
    return {
        message:""
    }
}
module.exports = {
    validationsConfig
}