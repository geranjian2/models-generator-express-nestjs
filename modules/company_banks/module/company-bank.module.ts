import { Module } from '@nestjs/common';
import { CompanyBankController } from '../controllers/company-bank.controller';
import { CompanyBankService } from '../service/company-bank.service';

@Module({
  controllers: [CompanyBankController],
  providers: [CompanyBankService],
  imports: [],
})
export class CompanyBankModule {}