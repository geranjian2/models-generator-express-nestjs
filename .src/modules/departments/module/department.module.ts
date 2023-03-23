import { Module } from '@nestjs/common';
import { DepartmentController } from '../controllers/department.controller';
import { DepartmentService } from '../service/department.service';

@Module({
  controllers: [DepartmentController],
  providers: [DepartmentService],
  imports: [],
})
export class DepartmentModule {}