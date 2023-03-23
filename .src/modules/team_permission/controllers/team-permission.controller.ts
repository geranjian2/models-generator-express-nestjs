
  
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
import { TeamPermissionService } from ''

@Controller('team-permission')
@ApiTags('team-permission')
  export class TeamPermissionController {
   constructor(
      @Inject(WINSTON) private readonly logger: Logger,
    private readonly _TeamPermissionService: TeamPermissionService,
  ) {}
  @Get()
  @ApiOperation({ summary: 'TeamPermission', description: 'Retrieve TeamPermission' })
   async pagination(
    @Query() { search, page, pageSize }: GetParamPaginationDto,
    @Res() res: Response,
   ): Promise<any> {
    Log({
      module: TeamPermissionController.name,
      method: 'pagination',
    });
     try {
      return await this._TeamPermissionService.pagination({ page, pageSize, search }, res);
    } catch (err) {
      throw new HttpException(err.message, HttpStatus.CONFLICT);
    }
   }
  @Get('all')
  @ApiOperation({
    summary: 'Get All TeamPermission',
    description: `Retrieves all TeamPermission.`,
  })
  async all(@Res() res: Response): Promise<any> {
    Log({ module: TeamPermissionController.name, method: 'all' });
    try {
      return await this._TeamPermissionService.getAll(res);
    } catch (err) {
      throw new HttpException(err.message, HttpStatus.CONFLICT);
    }
  }

  @Post()
  @ApiOperation({
    summary: 'Create TeamPermission',
    description: 'Creates a TeamPermission',
  })
  async create(
    @Body() values: any,
    @Res() res: Response,
  ): Promise<any> {
    const log = Log({ module: TeamPermissionController.name, method: 'create' });
    try {
      const data = await this._TeamPermissionService.create(values);
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
    summary: 'Update TeamPermission',
    description: 'Update TeamPermission',
  })
  async update(
    @Body() values: any,
    @Param('id') id: number,
    @Res() res: Response,
  ): Promise<any> {
    const log = Log({ module: TeamPermissionController.name, method: 'update' });
    try {
      const data = await this._TeamPermissionService.update(id, values);
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
    summary: 'Delete TeamPermission',
    description: 'deletes a TeamPermission with the specified id ',
  })
  async destroy(@Param('id') id: number, @Res() res: Response): Promise<any> {
    const log = Log({ module: TeamPermissionController.name, method: 'delete' });
    try {
      return await this._TeamPermissionService.destroy(id, res);
    } catch (err) {
      throw new HttpException(err.message, HttpStatus.CONFLICT);
    }
  }
}



