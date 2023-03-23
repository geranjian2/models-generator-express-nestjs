import { Module } from '@nestjs/common';
import { SequelizeMigrationController } from '../controllers/sequelize-migration.controller';
import { SequelizeMigrationService } from '../service/sequelize-migration.service';

@Module({
  controllers: [SequelizeMigrationController],
  providers: [SequelizeMigrationService],
  imports: [],
})
export class SequelizeMigrationModule {}