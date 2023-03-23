const fs = require('fs');
const { exec } = require("child_process");
const path = require('path');
const Mustache = require('mustache');
const pluralize = require('pluralize');
const {pgAdmin} = require('./databases/pg')
const {dataTypes} = require('./utils/types')
const {getInitials, singularize, capitalize, camelCase, middleDash, addSpace } = require('./utils/format-text')
module.exports = async(dbName, dbConnection,  outputModelFile) => {

    let templateEntity = fs.readFileSync(path.join(__dirname, 'templates/nestjs/sequalize/modelEntity.mustache'), 'UTF-8');
    let templateModel = fs.readFileSync(path.join(__dirname, 'templates/nestjs/sequalize/modelClass.mustache'), 'UTF-8');
    let templateDto = fs.readFileSync(path.join(__dirname, 'templates/nestjs/sequalize/modelDto.mustache'), 'UTF-8');
    let templateController = fs.readFileSync(path.join(__dirname, 'templates/nestjs/sequalize/modelController.mustache'), 'UTF-8');
    let templateService = fs.readFileSync(path.join(__dirname, 'templates/nestjs/sequalize/modelService.mustache'), 'UTF-8');
    let templateQuery = fs.readFileSync(path.join(__dirname, 'templates/nestjs/sequalize/modelQuery.mustache'), 'UTF-8');
    let templateInterface = fs.readFileSync(path.join(__dirname, 'templates/interfaces/modelInterface.mustache'), 'UTF-8');
    let templateModule = fs.readFileSync(path.join(__dirname, 'templates/nestjs/sequalize/modelModule.mustache'), 'UTF-8');
    let templateModuleApp = fs.readFileSync(path.join(__dirname, 'templates/nestjs/sequalize/modelModuleApp.mustache'), 'UTF-8');
    let templatePostman = fs.readFileSync(path.join(__dirname, 'templates/rest/modelJsonPostman.mustache'), 'UTF-8');


    let arrayTables = await pgAdmin(dbName,dbConnection)
    
    let classModelNames = {
        classes: []
    };
    
    arrayTables['tables'].forEach((table, index) => {
        let modelName = singularize(table.table);
        modelName = camelCase(modelName);
        modelName = capitalize(modelName);
        middleDashName = singularize(middleDash(table.table));
        tableInitial = getInitials(table.table);
        tablePluralize = pluralize.plural(middleDashName)
        let data = {
            table: table.table,
            tableClass:modelName,
            modelName: modelName + 'Model',
            EnityName: modelName + 'Entity',
            middleDashName,
            tableInitial,
            tablePluralize,
            properties: table.columns.map(column => {
                
                let is_nullable = true
                if (column.is_nullable === 'NO' ) {
                    is_nullable = false
                }
                let type = dataTypes(column.data_type);
                let isTypeString=false
                let isTypeText=false
                let isTypeInteger=false
                let isTypeBoolean=false
                if (column.data_type === 'varchar') {
                    isTypeString=true
                }
                if (column.data_type === 'boolean') {
                    isTypeBoolean=true
                }
                if (column.data_type === 'text') {
                    isTypeText=true
                }
                if (column.data_type === 'integer') {
                    isTypeInteger=true
                }
                let primary = false;
                table.ids.forEach(element => {
                    if(column.column_name===element){
                        primary=true
                    }
                });
                let foreign = false;
                let tableForeign=null
                table.foreigns.forEach(element => {
                    if(column.column_name===element.column_name){
                        foreign=true
                        let referenceTableName = singularize(element.foreign_table_name);
                        referenceTableName = camelCase(referenceTableName);
                        tableForeign= capitalize(referenceTableName) + 'Entity'
                    }
                });
                let created_at=false
                let updated_at=false
                let deleted_at=false
                if (column.column_name === 'created_at'){
                    created_at=true
                }
                if (column.column_name === 'updated_at'){isTypeText
                    updated_at=true
                }
                if (column.column_name === 'deleted_at'){
                    deleted_at=true
                }
                return {
                    name: column.column_name,
                    nameCamelCase: camelCase(column.column_name),
                    is_nullable,
                    type: type,
                    length:column.character_maximum_length,
                    primary,
                    isTypeString,
                    isTypeText,
                    isTypeInteger,
                    isTypeBoolean,
                    foreign,
                    created_at,
                    updated_at,
                    deleted_at,
                    tableForeign
                }
            }),
            foreignsRelations:table.foreignsRelations.map(column => {
                let targetTableName = singularize(column.table_name);
                targetTableName = camelCase(targetTableName);

                let referenceColumName = singularize(column.column_name);
                referenceColumName = camelCase(referenceColumName);


                let referenceTableName = singularize(column.foreign_table_name);
                referenceTableName = camelCase(referenceTableName);
                return {
                    name: targetTableName,
                    column: column.column_name,
                    columnModel: referenceColumName,
                    targetClass: capitalize(targetTableName), 
                    targetModel: capitalize(targetTableName) + 'Model',
                    targetEntity: capitalize(targetTableName) + 'Entity',
                    targetTableName: column.foreign_table_name,
                    targetTableNameRef: referenceTableName,
                    initialsTableNameRef:getInitials(referenceTableName),
                    TableNameRefModel: capitalize(referenceTableName) + 'Model',
                    TableNameRefEntity: capitalize(referenceTableName) + 'Entity',
                    targetColumn: column.foreign_column_name,
                }
            }),
            relations: table.foreigns.map(column => {
                let targetTableName = singularize(column.table_name);
                targetTableName = camelCase(targetTableName);

                let referenceColumName = singularize(column.column_name);
                referenceColumName = camelCase(referenceColumName);


                let referenceTableName = singularize(column.foreign_table_name);
                referenceTableName = camelCase(referenceTableName);
                return {
                    name: targetTableName,
                    column: column.column_name,
                    columnModel: referenceColumName,
                    targetModel: capitalize(targetTableName) + 'Model',
                    targetEntity: capitalize(targetTableName) + 'Entity',
                    targetTableName: column.foreign_table_name,
                    targetTableNameRef: referenceTableName,
                    initialsTableNameRef:getInitials(referenceTableName),
                    TableNameRefModel: capitalize(referenceTableName) + 'Model',
                    TableNameRefEntity: capitalize(referenceTableName) + 'Entity',
                    targetColumn: column.foreign_column_name,
                }
            })
        }
        classModelNames.classes.push(data);
     });
     console.log(classModelNames.classes[0])
    fs.rmSync(outputModelFile, { recursive: true, force: true });

     let folders=['models','entities','dtos','controllers','services','query', 'interface', 'module', 'rest']
     classModelNames.classes.forEach( async classTable => {
        folders.forEach(async (folder)=>{
            if (!fs.existsSync(`${outputModelFile}/${classTable.tablePluralize}/${folder}`)){
                await fs.mkdirSync(`${outputModelFile}/${classTable.tablePluralize}/${folder}`, { recursive: true });
            }
        })
      let models = await Mustache.render(templateModel, classTable);
      let entities = await Mustache.render(templateEntity, classTable);
      let dtos = await Mustache.render(templateDto, classTable);
      let controller = await Mustache.render(templateController, classTable);
      let service = await Mustache.render(templateService, classTable);
      let query = await Mustache.render(templateQuery, classTable);
      let interface = await Mustache.render(templateInterface, classTable);
      let module = await Mustache.render(templateModule, classTable);
      let rest = await Mustache.render(templatePostman, classTable);
       fs.writeFileSync(`${outputModelFile}/${classTable.tablePluralize}/${folders[0]}/${classTable.tablePluralize}.model.ts`, models);
       fs.writeFileSync(`${outputModelFile}/${classTable.tablePluralize}/${folders[1]}/${classTable.tablePluralize}.entity.ts`, entities);
       fs.writeFileSync(`${outputModelFile}/${classTable.tablePluralize}/${folders[2]}/${classTable.tablePluralize}.dto.ts`, dtos);
       fs.writeFileSync(`${outputModelFile}/${classTable.tablePluralize}/${folders[3]}/${classTable.tablePluralize}.controller.ts`, controller);
       fs.writeFileSync(`${outputModelFile}/${classTable.tablePluralize}/${folders[4]}/${classTable.tablePluralize}.service.ts`, service);
       fs.writeFileSync(`${outputModelFile}/${classTable.tablePluralize}/${folders[5]}/${classTable.tablePluralize}.query.ts`, query);
       fs.writeFileSync(`${outputModelFile}/${classTable.tablePluralize}/${folders[6]}/${classTable.tablePluralize}.interface.ts`, interface);
       fs.writeFileSync(`${outputModelFile}/${classTable.tablePluralize}/${folders[7]}/${classTable.tablePluralize}.module.ts`, module);
       fs.writeFileSync(`${outputModelFile}/${classTable.tablePluralize}/${folders[8]}/${classTable.tablePluralize}.json`, rest);
    })
    let moduleApp = await Mustache.render(templateModuleApp, {tables:classModelNames.classes});
    fs.writeFileSync(`${outputModelFile}/module.app.ts`, moduleApp);
    return true;
}