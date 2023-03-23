import { Module } from '@nestjs/common';
import { CityController } from '../controllers/city.controller';
import { CityService } from '../service/city.service';

@Module({
  controllers: [CityController],
  providers: [CityService],
  imports: [],
})
export class CityModule {}