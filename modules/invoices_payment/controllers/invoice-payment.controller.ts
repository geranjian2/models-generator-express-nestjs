
  
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
import { InvoicePaymentService } from ''

@Controller('invoice-payment')
@ApiTags('invoice-payment')
  export class InvoicePaymentController {
   constructor(
      @Inject(WINSTON) private readonly logger: Logger,
    private readonly _InvoicePaymentService: InvoicePaymentService,
  ) {}
  @Get()
  @ApiOperation({ summary: 'InvoicePayment', description: 'Retrieve InvoicePayment' })
   async pagination(
    @Query() { search, page, pageSize }: GetParamPaginationDto,
    @Res() res: Response,
   ): Promise<any> {
    Log({
      module: InvoicePaymentController.name,
      method: 'pagination',
    });
     try {
      return await this._InvoicePaymentService.pagination({ page, pageSize, search }, res);
    } catch (err) {
      throw new HttpException(err.message, HttpStatus.CONFLICT);
    }
   }
  @Get('all')
  @ApiOperation({
    summary: 'Get All InvoicePayment',
    description: `Retrieves all InvoicePayment.`,
  })
  async all(@Res() res: Response): Promise<any> {
    Log({ module: InvoicePaymentController.name, method: 'all' });
    try {
      return await this._InvoicePaymentService.getAll(res);
    } catch (err) {
      throw new HttpException(err.message, HttpStatus.CONFLICT);
    }
  }

  @Post()
  @ApiOperation({
    summary: 'Create InvoicePayment',
    description: 'Creates a InvoicePayment',
  })
  async create(
    @Body() values: any,
    @Res() res: Response,
  ): Promise<any> {
    const log = Log({ module: InvoicePaymentController.name, method: 'create' });
    try {
      const data = await this._InvoicePaymentService.create(values);
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
    summary: 'Update InvoicePayment',
    description: 'Update InvoicePayment',
  })
  async update(
    @Body() values: any,
    @Param('id') id: number,
    @Res() res: Response,
  ): Promise<any> {
    const log = Log({ module: InvoicePaymentController.name, method: 'update' });
    try {
      const data = await this._InvoicePaymentService.update(id, values);
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
    summary: 'Delete InvoicePayment',
    description: 'deletes a InvoicePayment with the specified id ',
  })
  async destroy(@Param('id') id: number, @Res() res: Response): Promise<any> {
    const log = Log({ module: InvoicePaymentController.name, method: 'delete' });
    try {
      return await this._InvoicePaymentService.destroy(id, res);
    } catch (err) {
      throw new HttpException(err.message, HttpStatus.CONFLICT);
    }
  }
}



