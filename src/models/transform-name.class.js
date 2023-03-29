const { MODELS_NAME } = require('../core/constants');
const {getInitials, singularize, capitalize, camelCase, middleDash, addSpace, pluralizeReplace, replace } = require('../utils/format-text')

class TransformName {
    trasnform={}
    run(table){
        // table demo_posts
        let nameTable             = table 
        let tableSingular         = singularize(table);   // demo-post
        let tableCamelCase        = camelCase(tableSingular);   // demoPost
        let tableCamelCaseService = `${tableCamelCase}${MODELS_NAME.service}`;   // demoPostService
        let tableModel            = capitalize(tableCamelCase); // DemoPost
        let tableModelDto         = `${tableModel}${MODELS_NAME.dto}` // DemoPostDto
        let tableEntity           = `${tableModel}${MODELS_NAME.entity}`; // DemoPostEntity
        let tableClassModel       = `${tableModel}${MODELS_NAME.model}`; // DemoPostModel
        let tableClassService     = `${tableModel}${MODELS_NAME.service}`; // DemoPostService
        let tableClassModule     = `${tableModel}${MODELS_NAME.module}`; // DemoPostModule
        let tableClassrepository  = `${tableCamelCase}${MODELS_NAME.repository}`; // DemoPostRepository
        let tableClassController  = `${tableModel}${MODELS_NAME.controller}`; // DemoPostController
        let tablePluralize        = pluralizeReplace(table,'-') // demo-posts
        let tableCamelPluralize   = camelCase(tablePluralize); 
        let tableUppercase        = table.toUpperCase()         // DEMO_POSTS
        let modelUppercase        = tableModel.toUpperCase()    // DEMOPOST
        let tablemiddleDash       = singularize(middleDash(table)); //demo-posts
        let tableInitial          = getInitials(table);           // dp
        let tableUnderScorePlural = pluralizeReplace(table, "_") // demo_posts
        return {
            nameTable,
            tableSingular,
            tableCamelCase,
            tableCamelCaseService,
            tableCamelPluralize,
            tableModel,
            tableEntity,
            tableModelDto,
            tableClassModel,
            tableClassService,
            tableClassController,
            tableClassrepository,
            tableClassModule,
            tablePluralize,
            tableUppercase,
            modelUppercase,
            tablemiddleDash,
            tableInitial,
            tableUnderScorePlural,
        }
    }
}

module.exports = {
    TransformName
}