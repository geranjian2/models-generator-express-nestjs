import { Module } from '@nestjs/common';
import { TeamPermissionController } from '../controllers/team-permission.controller';
import { TeamPermissionService } from '../service/team-permission.service';

@Module({
  controllers: [TeamPermissionController],
  providers: [TeamPermissionService],
  imports: [],
})
export class TeamPermissionModule {}