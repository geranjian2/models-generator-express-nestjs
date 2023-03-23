
  
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
import { ThirdBankService } from ''

@Controller('third-bank')
@ApiTags('third-bank')
  export class ThirdBankController {
   constructor(
      @Inject(WINSTON) private readonly logger: Logger,
    private readonly _ThirdBankService: ThirdBankService,
  ) {}
  @Get()
  @ApiOperation({ summary: 'ThirdBank', description: 'Retrieve ThirdBank' })
   async pagination(
    @Query() { search, page, pageSize }: GetParamPaginationDto,
    @Res() res: Response,
   ): Promise<any> {
    Log({
      module: ThirdBankController.name,
      method: 'pagination',
    });
     try {
      return await this._ThirdBankService.pagination({ page, pageSize, search }, res);
    } catch (err) {
      throw new HttpException(err.message, HttpStatus.CONFLICT);
    }
   }
  @Get('all')
  @ApiOperation({
    summary: 'Get All ThirdBank',
    description: `Retrieves all ThirdBank.`,
  })
  async all(@Res() res: Response): Promise<any> {
    Log({ module: ThirdBankController.name, method: 'all' });
    try {
      return await this._ThirdBankService.getAll(res);
    } catch (err) {
      throw new HttpException(err.message, HttpStatus.CONFLICT);
    }
  }

  @Post()
  @ApiOperation({
    summary: 'Create ThirdBank',
    description: 'Creates a ThirdBank',
  })
  async create(
    @Body() values: any,
    @Res() res: Response,
  ): Promise<any> {
    const log = Log({ module: ThirdBankController.name, method: 'create' });
    try {
      const data = await this._ThirdBankService.create(values);
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
    summary: 'Update ThirdBank',
    description: 'Update ThirdBank',
  })
  async update(
    @Body() values: any,
    @Param('id') id: number,
    @Res() res: Response,
  ): Promise<any> {
    const log = Log({ module: ThirdBankController.name, method: 'update' });
    try {
      const data = await this._ThirdBankService.update(id, values);
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
    summary: 'Delete ThirdBank',
    description: 'deletes a ThirdBank with the specified id ',
  })
  async destroy(@Param('id') id: number, @Res() res: Response): Promise<any> {
    const log = Log({ module: ThirdBankController.name, method: 'delete' });
    try {
      return await this._ThirdBankService.destroy(id, res);
    } catch (err) {
      throw new HttpException(err.message, HttpStatus.CONFLICT);
    }
  }
}



