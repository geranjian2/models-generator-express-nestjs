
  
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Inject,
  Param,
  Post,
  Put,
  Query,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Log } from '../../utils/logger/log';
import { Logger } from '../../utils/logger/logger';
import { Request, Response } from 'express';
import { GetParamPaginationDto } from '../../utils/standar-dto/get-param-pagination.dto';
import { CREATE, UPDATE } from '../../utils/constants/messages';
import { RolePermissionService } from ''

@Controller('role-permission')
@ApiTags('role-permission')
  export class RolePermissionController {
   constructor(
      @Inject(WINSTON) private readonly logger: Logger,
    private readonly _RolePermissionService: RolePermissionService,
  ) {}
  @Get()
  @ApiOperation({ summary: 'RolePermission', description: 'Retrieve RolePermission' })
   async pagination(
    @Query() { search, page, pageSize }: GetParamPaginationDto,
    @Res() res: Response,
   ): Promise<any> {
    Log({
      module: RolePermissionController.name,
      method: 'pagination',
    });
     try {
      return await this._RolePermissionService.pagination({ page, pageSize, search }, res);
    } catch (err) {
      throw new HttpException(err.message, HttpStatus.CONFLICT);
    }
   }
  @Get('all')
  @ApiOperation({
    summary: 'Get All RolePermission',
    description: `Retrieves all RolePermission.`,
  })
  async all(@Res() res: Response): Promise<any> {
    Log({ module: RolePermissionController.name, method: 'all' });
    try {
      return await this._RolePermissionService.getAll(res);
    } catch (err) {
      throw new HttpException(err.message, HttpStatus.CONFLICT);
    }
  }

  @Post()
  @ApiOperation({
    summary: 'Create RolePermission',
    description: 'Creates a RolePermission',
  })
  async create(
    @Body() values: any,
    @Res() res: Response,
  ): Promise<any> {
    const log = Log({ module: RolePermissionController.name, method: 'create' });
    try {
      const data = await this._RolePermissionService.create(values);
      if (data) {
        return res.status(HttpStatus.OK).json({
          error: 0,
          message: CREATE,
        });
      }
    } catch (err) {
      throw new HttpException(err.message, HttpStatus.CONFLICT);
    }
  }

  @Put(':id')
  @ApiOperation({
    summary: 'Update RolePermission',
    description: 'Update RolePermission',
  })
  async update(
    @Body() values: any,
    @Param('id') id: number,
    @Res() res: Response,
  ): Promise<any> {
    const log = Log({ module: RolePermissionController.name, method: 'update' });
    try {
      const data = await this._RolePermissionService.update(id, values);
      if (data) {
        return res.status(HttpStatus.OK).json({
          error: 0,
          message: UPDATE,
        });
      }
    } catch (err) {
      throw new HttpException(err.message, HttpStatus.CONFLICT);
    }
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Delete RolePermission',
    description: 'deletes a RolePermission with the specified id ',
  })
  async destroy(@Param('id') id: number, @Res() res: Response): Promise<any> {
    const log = Log({ module: RolePermissionController.name, method: 'delete' });
    try {
      return await this._RolePermissionService.destroy(id, res);
    } catch (err) {
      throw new HttpException(err.message, HttpStatus.CONFLICT);
    }
  }
}



