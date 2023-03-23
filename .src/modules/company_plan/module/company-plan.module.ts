import { Module } from '@nestjs/common';
import { CompanyPlanController } from '../controllers/company-plan.controller';
import { CompanyPlanService } from '../service/company-plan.service';

@Module({
  controllers: [CompanyPlanController],
  providers: [CompanyPlanService],
  imports: [],
})
export class CompanyPlanModule {}