import { Module } from '@nestjs/common';
import { CountryController } from '../controllers/country.controller';
import { CountryService } from '../service/country.service';

@Module({
  controllers: [CountryController],
  providers: [CountryService],
  imports: [],
})
export class CountryModule {}