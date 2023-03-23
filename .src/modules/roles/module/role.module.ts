import { Module } from '@nestjs/common';
import { RoleController } from '../controllers/role.controller';
import { RoleService } from '../service/role.service';

@Module({
  controllers: [RoleController],
  providers: [RoleService],
  imports: [],
})
export class RoleModule {}