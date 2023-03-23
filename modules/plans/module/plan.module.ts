import { Module } from '@nestjs/common';
import { PlanController } from '../controllers/plan.controller';
import { PlanService } from '../service/plan.service';

@Module({
  controllers: [PlanController],
  providers: [PlanService],
  imports: [],
})
export class PlanModule {}