import { Module } from '@nestjs/common';
import { ThirdBankController } from '../controllers/third-bank.controller';
import { ThirdBankService } from '../service/third-bank.service';

@Module({
  controllers: [ThirdBankController],
  providers: [ThirdBankService],
  imports: [],
})
export class ThirdBankModule {}