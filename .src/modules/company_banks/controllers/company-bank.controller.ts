
  
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
import { CompanyBankService } from ''

@Controller('company-bank')
@ApiTags('company-bank')
  export class CompanyBankController {
   constructor(
      @Inject(WINSTON) private readonly logger: Logger,
    private readonly _CompanyBankService: CompanyBankService,
  ) {}
  @Get()
  @ApiOperation({ summary: 'CompanyBank', description: 'Retrieve CompanyBank' })
   async pagination(
    @Query() { search, page, pageSize }: GetParamPaginationDto,
    @Res() res: Response,
   ): Promise<any> {
    Log({
      module: CompanyBankController.name,
      method: 'pagination',
    });
     try {
      return await this._CompanyBankService.pagination({ page, pageSize, search }, res);
    } catch (err) {
      throw new HttpException(err.message, HttpStatus.CONFLICT);
    }
   }
  @Get('all')
  @ApiOperation({
    summary: 'Get All CompanyBank',
    description: `Retrieves all CompanyBank.`,
  })
  async all(@Res() res: Response): Promise<any> {
    Log({ module: CompanyBankController.name, method: 'all' });
    try {
      return await this._CompanyBankService.getAll(res);
    } catch (err) {
      throw new HttpException(err.message, HttpStatus.CONFLICT);
    }
  }

  @Post()
  @ApiOperation({
    summary: 'Create CompanyBank',
    description: 'Creates a CompanyBank',
  })
  async create(
    @Body() values: any,
    @Res() res: Response,
  ): Promise<any> {
    const log = Log({ module: CompanyBankController.name, method: 'create' });
    try {
      const data = await this._CompanyBankService.create(values);
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
    summary: 'Update CompanyBank',
    description: 'Update CompanyBank',
  })
  async update(
    @Body() values: any,
    @Param('id') id: number,
    @Res() res: Response,
  ): Promise<any> {
    const log = Log({ module: CompanyBankController.name, method: 'update' });
    try {
      const data = await this._CompanyBankService.update(id, values);
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
    summary: 'Delete CompanyBank',
    description: 'deletes a CompanyBank with the specified id ',
  })
  async destroy(@Param('id') id: number, @Res() res: Response): Promise<any> {
    const log = Log({ module: CompanyBankController.name, method: 'delete' });
    try {
      return await this._CompanyBankService.destroy(id, res);
    } catch (err) {
      throw new HttpException(err.message, HttpStatus.CONFLICT);
    }
  }
}



