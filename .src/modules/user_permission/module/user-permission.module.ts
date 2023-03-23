import { Module } from '@nestjs/common';
import { UserPermissionController } from '../controllers/user-permission.controller';
import { UserPermissionService } from '../service/user-permission.service';

@Module({
  controllers: [UserPermissionController],
  providers: [UserPermissionService],
  imports: [],
})
export class UserPermissionModule {}