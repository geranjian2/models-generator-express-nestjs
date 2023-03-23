
  
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
import { UserPermissionService } from ''

@Controller('user-permission')
@ApiTags('user-permission')
  export class UserPermissionController {
   constructor(
      @Inject(WINSTON) private readonly logger: Logger,
    private readonly _UserPermissionService: UserPermissionService,
  ) {}
  @Get()
  @ApiOperation({ summary: 'UserPermission', description: 'Retrieve UserPermission' })
   async pagination(
    @Query() { search, page, pageSize }: GetParamPaginationDto,
    @Res() res: Response,
   ): Promise<any> {
    Log({
      module: UserPermissionController.name,
      method: 'pagination',
    });
     try {
      return await this._UserPermissionService.pagination({ page, pageSize, search }, res);
    } catch (err) {
      throw new HttpException(err.message, HttpStatus.CONFLICT);
    }
   }
  @Get('all')
  @ApiOperation({
    summary: 'Get All UserPermission',
    description: `Retrieves all UserPermission.`,
  })
  async all(@Res() res: Response): Promise<any> {
    Log({ module: UserPermissionController.name, method: 'all' });
    try {
      return await this._UserPermissionService.getAll(res);
    } catch (err) {
      throw new HttpException(err.message, HttpStatus.CONFLICT);
    }
  }

  @Post()
  @ApiOperation({
    summary: 'Create UserPermission',
    description: 'Creates a UserPermission',
  })
  async create(
    @Body() values: any,
    @Res() res: Response,
  ): Promise<any> {
    const log = Log({ module: UserPermissionController.name, method: 'create' });
    try {
      const data = await this._UserPermissionService.create(values);
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
    summary: 'Update UserPermission',
    description: 'Update UserPermission',
  })
  async update(
    @Body() values: any,
    @Param('id') id: number,
    @Res() res: Response,
  ): Promise<any> {
    const log = Log({ module: UserPermissionController.name, method: 'update' });
    try {
      const data = await this._UserPermissionService.update(id, values);
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
    summary: 'Delete UserPermission',
    description: 'deletes a UserPermission with the specified id ',
  })
  async destroy(@Param('id') id: number, @Res() res: Response): Promise<any> {
    const log = Log({ module: UserPermissionController.name, method: 'delete' });
    try {
      return await this._UserPermissionService.destroy(id, res);
    } catch (err) {
      throw new HttpException(err.message, HttpStatus.CONFLICT);
    }
  }
}



