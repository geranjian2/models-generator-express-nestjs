import { Module } from '@nestjs/common';
import { InvoicePaymentController } from '../controllers/invoice-payment.controller';
import { InvoicePaymentService } from '../service/invoice-payment.service';

@Module({
  controllers: [InvoicePaymentController],
  providers: [InvoicePaymentService],
  imports: [],
})
export class InvoicePaymentModule {}