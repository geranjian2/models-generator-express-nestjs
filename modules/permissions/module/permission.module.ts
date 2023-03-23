import { Module } from '@nestjs/common';
import { PermissionController } from '../controllers/permission.controller';
import { PermissionService } from '../service/permission.service';

@Module({
  controllers: [PermissionController],
  providers: [PermissionService],
  imports: [],
})
export class PermissionModule {}