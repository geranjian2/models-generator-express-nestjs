import { Module } from '@nestjs/common';
import { VoucherController } from '../controllers/voucher.controller';
import { VoucherService } from '../service/voucher.service';

@Module({
  controllers: [VoucherController],
  providers: [VoucherService],
  imports: [],
})
export class VoucherModule {}