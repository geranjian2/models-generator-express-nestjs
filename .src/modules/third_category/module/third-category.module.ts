import { Module } from '@nestjs/common';
import { ThirdCategoryController } from '../controllers/third-category.controller';
import { ThirdCategoryService } from '../service/third-category.service';

@Module({
  controllers: [ThirdCategoryController],
  providers: [ThirdCategoryService],
  imports: [],
})
export class ThirdCategoryModule {}