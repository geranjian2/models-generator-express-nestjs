import { Module } from '@nestjs/common';
import { TransactionDetailController } from '../controllers/transaction-detail.controller';
import { TransactionDetailService } from '../service/transaction-detail.service';

@Module({
  controllers: [TransactionDetailController],
  providers: [TransactionDetailService],
  imports: [],
})
export class TransactionDetailModule {}