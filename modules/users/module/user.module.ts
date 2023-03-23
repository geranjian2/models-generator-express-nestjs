import { Module } from '@nestjs/common';
import { UserController } from '../controllers/user.controller';
import { UserService } from '../service/user.service';

@Module({
  controllers: [UserController],
  providers: [UserService],
  imports: [],
})
export class UserModule {}