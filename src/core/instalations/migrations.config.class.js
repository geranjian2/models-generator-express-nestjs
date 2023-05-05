const fs = require('fs');
const path = require('path');
const { ORMS } = require('../constants');
class MigrationsConfig {
  run(config) {
    let content = JSON.parse(
      fs.readFileSync(path.join('package.json'), 'utf8'),
    );
    switch (config.orm) {
      case ORMS.sequelize:
        if (!content.scripts['migrate-seedsss']) {
          console.log('🚀 ----->>> Config Migrations');
          delete content.scripts['typeorm'];
          delete content.scripts['migration:generate'];
          delete content.scripts['migration:show'];
          delete content.scripts['migration:run'];
          delete content.scripts['migration:revert'];
          delete content.scripts['migration:create'];
          content.scripts['seed'] = 'npx sequelize-cli db:seed:all';
          content.scripts['seed:fresh'] = 'npx sequelize-cli db:seed --seed';
          content.scripts['seed:rollback'] =
            'npx sequelize-cli db:seed:undo:all && npx sequelize-cli db:seed:all';
          content.scripts['migrate'] = 'npx sequelize-cli db:migrate';
          content.scripts['migrate:rollback'] =
            'npx sequelize-cli db:migrate:undo:all && npx sequelize-db:migrate';
          content.scripts['create-db'] = 'npx sequelize-cli db:create';
          content.scripts['drop-db'] = 'npx sequelize-cli db:drop';
          content.scripts['migrate-seeds'] =
            'npx sequelize-cli db:migrate:undo:all && npx sequelize-cli db:migrate && npx sequelize-cli db:seed:all';
          //write file
          fs.writeFileSync(path.join('package.json'), JSON.stringify(content));
        }
        break;
      case ORMS.typeorm:
        if (!content.scripts['typeorm']) {
          console.log('🚀 ----->>> Config Migrations');
          delete content.scripts['seed'];
          delete content.scripts['seed:fresh'];
          delete content.scripts['seed:rollback'];
          delete content.scripts['migrate'];
          delete content.scripts['migrate:rollback'];
          delete content.scripts['create-db'];
          delete content.scripts['drop-db'];
          delete content.scripts['migrate-seeds'];
          (content.scripts['typeorm'] =
            'typeorm-ts-node-commonjs -d ./src/config/migrations.typeorm.config.ts'),
            (content.scripts['migration:generate'] =
              'node --loader ts-node/esm ./node_modules/.bin/typeorm migration:generate -d ./libs/config/migrations.typeorm.config.ts'),
            (content.scripts['migration:show'] =
              'npm run typeorm migration:show'),
            (content.scripts['migration:run'] =
              'npm run typeorm migration:run'),
            (content.scripts['migration:revert'] =
              'npm run typeorm migration:revert'),
            (content.scripts['migration:create'] =
              'typeorm-ts-node-commonjs migration:create');
          //write file
          fs.writeFileSync(path.join('package.json'), JSON.stringify(content));
        }
        break;
      default:
        break;
    }
  }
}

module.exports= {
    migrationsConfig: new MigrationsConfig()
}
