import { Module } from '@nestjs/common';
import { SequelizeDatumController } from '../controllers/sequelize-datum.controller';
import { SequelizeDatumService } from '../service/sequelize-datum.service';

@Module({
  controllers: [SequelizeDatumController],
  providers: [SequelizeDatumService],
  imports: [],
})
export class SequelizeDatumModule {}