import { Module } from '@nestjs/common';
import { CompanyController } from '../controllers/company.controller';
import { CompanyService } from '../service/company.service';

@Module({
  controllers: [CompanyController],
  providers: [CompanyService],
  imports: [],
})
export class CompanyModule {}