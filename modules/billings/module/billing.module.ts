import { Module } from '@nestjs/common';
import { BillingController } from '../controllers/billing.controller';
import { BillingService } from '../service/billing.service';

@Module({
  controllers: [BillingController],
  providers: [BillingService],
  imports: [],
})
export class BillingModule {}