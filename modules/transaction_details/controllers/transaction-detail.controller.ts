
  
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
import { TransactionDetailService } from ''

@Controller('transaction-detail')
@ApiTags('transaction-detail')
  export class TransactionDetailController {
   constructor(
      @Inject(WINSTON) private readonly logger: Logger,
    private readonly _TransactionDetailService: TransactionDetailService,
  ) {}
  @Get()
  @ApiOperation({ summary: 'TransactionDetail', description: 'Retrieve TransactionDetail' })
   async pagination(
    @Query() { search, page, pageSize }: GetParamPaginationDto,
    @Res() res: Response,
   ): Promise<any> {
    Log({
      module: TransactionDetailController.name,
      method: 'pagination',
    });
     try {
      return await this._TransactionDetailService.pagination({ page, pageSize, search }, res);
    } catch (err) {
      throw new HttpException(err.message, HttpStatus.CONFLICT);
    }
   }
  @Get('all')
  @ApiOperation({
    summary: 'Get All TransactionDetail',
    description: `Retrieves all TransactionDetail.`,
  })
  async all(@Res() res: Response): Promise<any> {
    Log({ module: TransactionDetailController.name, method: 'all' });
    try {
      return await this._TransactionDetailService.getAll(res);
    } catch (err) {
      throw new HttpException(err.message, HttpStatus.CONFLICT);
    }
  }

  @Post()
  @ApiOperation({
    summary: 'Create TransactionDetail',
    description: 'Creates a TransactionDetail',
  })
  async create(
    @Body() values: any,
    @Res() res: Response,
  ): Promise<any> {
    const log = Log({ module: TransactionDetailController.name, method: 'create' });
    try {
      const data = await this._TransactionDetailService.create(values);
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
    summary: 'Update TransactionDetail',
    description: 'Update TransactionDetail',
  })
  async update(
    @Body() values: any,
    @Param('id') id: number,
    @Res() res: Response,
  ): Promise<any> {
    const log = Log({ module: TransactionDetailController.name, method: 'update' });
    try {
      const data = await this._TransactionDetailService.update(id, values);
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
    summary: 'Delete TransactionDetail',
    description: 'deletes a TransactionDetail with the specified id ',
  })
  async destroy(@Param('id') id: number, @Res() res: Response): Promise<any> {
    const log = Log({ module: TransactionDetailController.name, method: 'delete' });
    try {
      return await this._TransactionDetailService.destroy(id, res);
    } catch (err) {
      throw new HttpException(err.message, HttpStatus.CONFLICT);
    }
  }
}



