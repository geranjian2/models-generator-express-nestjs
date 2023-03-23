
  
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
import { SequelizeDatumService } from ''

@Controller('sequelize-datum')
@ApiTags('sequelize-datum')
  export class SequelizeDatumController {
   constructor(
      @Inject(WINSTON) private readonly logger: Logger,
    private readonly _SequelizeDatumService: SequelizeDatumService,
  ) {}
  @Get()
  @ApiOperation({ summary: 'SequelizeDatum', description: 'Retrieve SequelizeDatum' })
   async pagination(
    @Query() { search, page, pageSize }: GetParamPaginationDto,
    @Res() res: Response,
   ): Promise<any> {
    Log({
      module: SequelizeDatumController.name,
      method: 'pagination',
    });
     try {
      return await this._SequelizeDatumService.pagination({ page, pageSize, search }, res);
    } catch (err) {
      throw new HttpException(err.message, HttpStatus.CONFLICT);
    }
   }
  @Get('all')
  @ApiOperation({
    summary: 'Get All SequelizeDatum',
    description: `Retrieves all SequelizeDatum.`,
  })
  async all(@Res() res: Response): Promise<any> {
    Log({ module: SequelizeDatumController.name, method: 'all' });
    try {
      return await this._SequelizeDatumService.getAll(res);
    } catch (err) {
      throw new HttpException(err.message, HttpStatus.CONFLICT);
    }
  }

  @Post()
  @ApiOperation({
    summary: 'Create SequelizeDatum',
    description: 'Creates a SequelizeDatum',
  })
  async create(
    @Body() values: any,
    @Res() res: Response,
  ): Promise<any> {
    const log = Log({ module: SequelizeDatumController.name, method: 'create' });
    try {
      const data = await this._SequelizeDatumService.create(values);
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
    summary: 'Update SequelizeDatum',
    description: 'Update SequelizeDatum',
  })
  async update(
    @Body() values: any,
    @Param('id') id: number,
    @Res() res: Response,
  ): Promise<any> {
    const log = Log({ module: SequelizeDatumController.name, method: 'update' });
    try {
      const data = await this._SequelizeDatumService.update(id, values);
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
    summary: 'Delete SequelizeDatum',
    description: 'deletes a SequelizeDatum with the specified id ',
  })
  async destroy(@Param('id') id: number, @Res() res: Response): Promise<any> {
    const log = Log({ module: SequelizeDatumController.name, method: 'delete' });
    try {
      return await this._SequelizeDatumService.destroy(id, res);
    } catch (err) {
      throw new HttpException(err.message, HttpStatus.CONFLICT);
    }
  }
}



