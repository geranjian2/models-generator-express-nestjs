import { Module } from '@nestjs/common';
import { ThirdController } from '../controllers/third.controller';
import { ThirdService } from '../service/third.service';

@Module({
  controllers: [ThirdController],
  providers: [ThirdService],
  imports: [],
})
export class ThirdModule {}