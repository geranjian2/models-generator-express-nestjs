import { Module } from '@nestjs/common';
import { TransactionController } from '../controllers/transaction.controller';
import { TransactionService } from '../service/transaction.service';

@Module({
  controllers: [TransactionController],
  providers: [TransactionService],
  imports: [],
})
export class TransactionModule {}