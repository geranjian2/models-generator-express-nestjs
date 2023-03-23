
  
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
import { CompanyPlanService } from ''

@Controller('company-plan')
@ApiTags('company-plan')
  export class CompanyPlanController {
   constructor(
      @Inject(WINSTON) private readonly logger: Logger,
    private readonly _CompanyPlanService: CompanyPlanService,
  ) {}
  @Get()
  @ApiOperation({ summary: 'CompanyPlan', description: 'Retrieve CompanyPlan' })
   async pagination(
    @Query() { search, page, pageSize }: GetParamPaginationDto,
    @Res() res: Response,
   ): Promise<any> {
    Log({
      module: CompanyPlanController.name,
      method: 'pagination',
    });
     try {
      return await this._CompanyPlanService.pagination({ page, pageSize, search }, res);
    } catch (err) {
      throw new HttpException(err.message, HttpStatus.CONFLICT);
    }
   }
  @Get('all')
  @ApiOperation({
    summary: 'Get All CompanyPlan',
    description: `Retrieves all CompanyPlan.`,
  })
  async all(@Res() res: Response): Promise<any> {
    Log({ module: CompanyPlanController.name, method: 'all' });
    try {
      return await this._CompanyPlanService.getAll(res);
    } catch (err) {
      throw new HttpException(err.message, HttpStatus.CONFLICT);
    }
  }

  @Post()
  @ApiOperation({
    summary: 'Create CompanyPlan',
    description: 'Creates a CompanyPlan',
  })
  async create(
    @Body() values: any,
    @Res() res: Response,
  ): Promise<any> {
    const log = Log({ module: CompanyPlanController.name, method: 'create' });
    try {
      const data = await this._CompanyPlanService.create(values);
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
    summary: 'Update CompanyPlan',
    description: 'Update CompanyPlan',
  })
  async update(
    @Body() values: any,
    @Param('id') id: number,
    @Res() res: Response,
  ): Promise<any> {
    const log = Log({ module: CompanyPlanController.name, method: 'update' });
    try {
      const data = await this._CompanyPlanService.update(id, values);
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
    summary: 'Delete CompanyPlan',
    description: 'deletes a CompanyPlan with the specified id ',
  })
  async destroy(@Param('id') id: number, @Res() res: Response): Promise<any> {
    const log = Log({ module: CompanyPlanController.name, method: 'delete' });
    try {
      return await this._CompanyPlanService.destroy(id, res);
    } catch (err) {
      throw new HttpException(err.message, HttpStatus.CONFLICT);
    }
  }
}



