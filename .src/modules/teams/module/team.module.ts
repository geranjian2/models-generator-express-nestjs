import { Module } from '@nestjs/common';
import { TeamController } from '../controllers/team.controller';
import { TeamService } from '../service/team.service';

@Module({
  controllers: [TeamController],
  providers: [TeamService],
  imports: [],
})
export class TeamModule {}