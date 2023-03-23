import { Module } from '@nestjs/common';
import { BankController } from '../controllers/bank.controller';
import { BankService } from '../service/bank.service';

@Module({
  controllers: [BankController],
  providers: [BankService],
  imports: [],
})
export class BankModule {}