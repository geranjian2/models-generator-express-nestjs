import { Module } from '@nestjs/common';
import { RolePermissionController } from '../controllers/role-permission.controller';
import { RolePermissionService } from '../service/role-permission.service';

@Module({
  controllers: [RolePermissionController],
  providers: [RolePermissionService],
  imports: [],
})
export class RolePermissionModule {}