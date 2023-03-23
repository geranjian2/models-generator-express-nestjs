
  
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
import { TransactionService } from ''

@Controller('transaction')
@ApiTags('transaction')
  export class TransactionController {
   constructor(
      @Inject(WINSTON) private readonly logger: Logger,
    private readonly _TransactionService: TransactionService,
  ) {}
  @Get()
  @ApiOperation({ summary: 'Transaction', description: 'Retrieve Transaction' })
   async pagination(
    @Query() { search, page, pageSize }: GetParamPaginationDto,
    @Res() res: Response,
   ): Promise<any> {
    Log({
      module: TransactionController.name,
      method: 'pagination',
    });
     try {
      return await this._TransactionService.pagination({ page, pageSize, search }, res);
    } catch (err) {
      throw new HttpException(err.message, HttpStatus.CONFLICT);
    }
   }
  @Get('all')
  @ApiOperation({
    summary: 'Get All Transaction',
    description: `Retrieves all Transaction.`,
  })
  async all(@Res() res: Response): Promise<any> {
    Log({ module: TransactionController.name, method: 'all' });
    try {
      return await this._TransactionService.getAll(res);
    } catch (err) {
      throw new HttpException(err.message, HttpStatus.CONFLICT);
    }
  }

  @Post()
  @ApiOperation({
    summary: 'Create Transaction',
    description: 'Creates a Transaction',
  })
  async create(
    @Body() values: any,
    @Res() res: Response,
  ): Promise<any> {
    const log = Log({ module: TransactionController.name, method: 'create' });
    try {
      const data = await this._TransactionService.create(values);
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
    summary: 'Update Transaction',
    description: 'Update Transaction',
  })
  async update(
    @Body() values: any,
    @Param('id') id: number,
    @Res() res: Response,
  ): Promise<any> {
    const log = Log({ module: TransactionController.name, method: 'update' });
    try {
      const data = await this._TransactionService.update(id, values);
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
    summary: 'Delete Transaction',
    description: 'deletes a Transaction with the specified id ',
  })
  async destroy(@Param('id') id: number, @Res() res: Response): Promise<any> {
    const log = Log({ module: TransactionController.name, method: 'delete' });
    try {
      return await this._TransactionService.destroy(id, res);
    } catch (err) {
      throw new HttpException(err.message, HttpStatus.CONFLICT);
    }
  }
}



