
  
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
import { PlanService } from ''

@Controller('plan')
@ApiTags('plan')
  export class PlanController {
   constructor(
      @Inject(WINSTON) private readonly logger: Logger,
    private readonly _PlanService: PlanService,
  ) {}
  @Get()
  @ApiOperation({ summary: 'Plan', description: 'Retrieve Plan' })
   async pagination(
    @Query() { search, page, pageSize }: GetParamPaginationDto,
    @Res() res: Response,
   ): Promise<any> {
    Log({
      module: PlanController.name,
      method: 'pagination',
    });
     try {
      return await this._PlanService.pagination({ page, pageSize, search }, res);
    } catch (err) {
      throw new HttpException(err.message, HttpStatus.CONFLICT);
    }
   }
  @Get('all')
  @ApiOperation({
    summary: 'Get All Plan',
    description: `Retrieves all Plan.`,
  })
  async all(@Res() res: Response): Promise<any> {
    Log({ module: PlanController.name, method: 'all' });
    try {
      return await this._PlanService.getAll(res);
    } catch (err) {
      throw new HttpException(err.message, HttpStatus.CONFLICT);
    }
  }

  @Post()
  @ApiOperation({
    summary: 'Create Plan',
    description: 'Creates a Plan',
  })
  async create(
    @Body() values: any,
    @Res() res: Response,
  ): Promise<any> {
    const log = Log({ module: PlanController.name, method: 'create' });
    try {
      const data = await this._PlanService.create(values);
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
    summary: 'Update Plan',
    description: 'Update Plan',
  })
  async update(
    @Body() values: any,
    @Param('id') id: number,
    @Res() res: Response,
  ): Promise<any> {
    const log = Log({ module: PlanController.name, method: 'update' });
    try {
      const data = await this._PlanService.update(id, values);
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
    summary: 'Delete Plan',
    description: 'deletes a Plan with the specified id ',
  })
  async destroy(@Param('id') id: number, @Res() res: Response): Promise<any> {
    const log = Log({ module: PlanController.name, method: 'delete' });
    try {
      return await this._PlanService.destroy(id, res);
    } catch (err) {
      throw new HttpException(err.message, HttpStatus.CONFLICT);
    }
  }
}



