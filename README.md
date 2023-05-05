<h1 align="center">
<div align="center">
    <img src="https://raw.githubusercontent.com/geranjian2/models-generator-express-nestjs/develop/media/logo-generators.png" width="600" alt="NestJS Express Generators Logo" />
</div>
</h1>

## Features 

- Config file generate models  
- Support for nestjs and express ts
- Generate models, interface, entities, dto from your database postgres

## package install

  ```bash
    $ npm i  @nestjs/swagger dotenv
  ```


## Installation

**NPM**
```bash
$ npm i  models-generator-express-nestjs
```

## Getting started

Once the installation process is complete,  create file config in the root project for generate models 

&nbsp;

### File configuration

```javascript
const models = require('models-generator-express-nestjs/src/index')
require('dotenv').config()
const main = async () => {
    const connection = {
      host: process.env.DATABASE_HOST || 'localhost',
      port: process.env.DATABASE_PORT || '5432',
      user: process.env.DATABASE_USER || 'user_db',
      password: process.env.DATABASE_PASSWORD || 'pass_db',
      database: process.env.DATABASE || 'your_database'
    };

    const config = {
    database:'mysql', //mysql | postgres 
    orm: 'SEQUELIZE', // TYPEORM | SEQUELIZE,
    configMigrations: true,
    installPackage:true,
    outputModelFile: '.app/modules/',
    tables: {
      exclude: '',
      include: '',
    },
    auth:{
      generate:true,
      table: 'users',
      fields:{
        user:'email',
        password:'password',
      },
      uninstallPackage:false
    },
    generatorForModule: {
      dto: true,
      models: true,
      entitie: true,
      interface: true,
      module: true,
      controller: true,
      rest: true,
      service: true,
    },
    deleteAlways:true
  };

    const modelsPromise = await models(connection.database, connection, config);
    const all = await Promise.all([modelsPromise]);
    process.exit();
}
```

### Add command package.json

```bash
 "generator": "node main.js"
```
## Running 

```bash
npm run generator
```

##  json config paramters description
### database
  - Select database mysql or postgress 
### orm
  - Select orm sequelize or typeorm 
### configMigrations true | false
  - configure in the json package the necessary commands to run migrations
### installPackage true | false
  -Depending on the orm you select, it will install the corresponding packages

    #package typeorm
      -typeorm
      -@nestjs/typeorm
      -@nestjs/config

    #package sequelize
      -sequelize
      -sequelize-typescript
      -@nestjs/sequelize

### outputModelFile
  - path where the modules will be created

### tables
  - configuration to exclude or include tables in the generation of modules
  ### exclude
    -tables not included
  ### include
    -tables that only include

### auth
  - We can generate a login from a table and its respective field of username and password
  ### generate true | false
    -validate if we are going to generate the auth module
  ### table
    -name of the table where the auth module will be generated
  ### fields
    - username and password fields for login
    ### user
    ### password

### generatorForModule
  ### dto true | false
  ### models true | false
  ### entitie true | false
  ### interface true | false
  ### module true | false
  ### controller true | false
  ### rest true | false
  ### service true | false

### deleteAlways true | false
  - 📢 important this parameter should only be in tru only in the initial part of the generator then it should be left in false, it already eliminates the folders



Example modules generators sequelize

```bash
├── ./app
│   └── main.ts
│   └── app.module.ts
│   ├── modules
│   │   ├── users
│   │   │   ├── dtos
│   │   │   │   ├── user.dto.ts
│   │   │   ├── entities
│   │   │   │   ├── user.entity.ts
│   │   │   ├── interface
│   │   │   │   ├── user.interface.ts
│   │   │   ├── models
│   │   │   │   ├── user.model.ts
│   │   │   ├── rest
│   │   │   │   ├── user.json
│   │   │   ├── user.service.ts
│   │   │   ├── user.module.ts
│   │   │   ├── user.controller.ts
│   ├── database
│   │   ├── database.models.ts
│   │   ├── database.module.ts
│   │   ├── database.providers.ts
│   │   ├── sequalize.constants.ts
│   │   └── modules.providers.ts
│   ├── sequelize
│   │   ├── config
│   │   │   ├── config.js
│   │   ├── migrations
│   │   └── seeders
```


Example modules generators typeorm

```bash
├── ./app
│   └── main.ts
│   └── app.module.ts
│   ├── modules
│   │   ├── users
│   │   │   ├── dtos
│   │   │   │   ├── user.dto.ts
│   │   │   ├── entities
│   │   │   │   ├── user.entity.ts
│   │   │   ├── interface
│   │   │   │   ├── user.interface.ts
│   │   │   ├── models
│   │   │   │   ├── user.model.ts
│   │   │   ├── rest
│   │   │   │   ├── user.json
│   │   │   ├── user.service.ts
│   │   │   ├── user.module.ts
│   │   │   └── user.controller.ts
│   ├── config
│   │   ├── config.typeorm.module.ts
│   │   ├── database.typeorm.config.ts
│   │   └── migrations.typeorm.config.ts
│   ├── typeorm
│   │   └── migrations
```



### File configuration .env

```javascript
 TYPE_CONNECTION=mysql
 DATABASE_PORT=3306
 DATABASE_HOST=localhost
 DATABASE_USER=root
 DATABASE_PASSWORD=admin
 DATABASE=payment_backoffice

# generate orm is sequelize, add variables
 DATABASE_DIALECT=mysql
 DATABASE_SCHEMA=public
 DATABASE_LOGGING=true
 NODE_ENV=development

 #generate auth is true, add variable
 JWT_SECRET='mysecret'
 ```
