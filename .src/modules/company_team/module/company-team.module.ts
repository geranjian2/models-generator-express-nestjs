import { Module } from '@nestjs/common';
import { CompanyTeamController } from '../controllers/company-team.controller';
import { CompanyTeamService } from '../service/company-team.service';

@Module({
  controllers: [CompanyTeamController],
  providers: [CompanyTeamService],
  imports: [],
})
export class CompanyTeamModule {}