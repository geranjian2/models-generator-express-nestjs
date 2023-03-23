import { Module } from '@nestjs/common';
import { AccountTypeController } from '../controllers/account-type.controller';
import { AccountTypeService } from '../service/account-type.service';

@Module({
  controllers: [AccountTypeController],
  providers: [AccountTypeService],
  imports: [],
})
export class AccountTypeModule {}