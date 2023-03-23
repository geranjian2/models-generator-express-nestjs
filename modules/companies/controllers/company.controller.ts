
  
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
import { CompanyService } from ''

@Controller('company')
@ApiTags('company')
  export class CompanyController {
   constructor(
      @Inject(WINSTON) private readonly logger: Logger,
    private readonly _CompanyService: CompanyService,
  ) {}
  @Get()
  @ApiOperation({ summary: 'Company', description: 'Retrieve Company' })
   async pagination(
    @Query() { search, page, pageSize }: GetParamPaginationDto,
    @Res() res: Response,
   ): Promise<any> {
    Log({
      module: CompanyController.name,
      method: 'pagination',
    });
     try {
      return await this._CompanyService.pagination({ page, pageSize, search }, res);
    } catch (err) {
      throw new HttpException(err.message, HttpStatus.CONFLICT);
    }
   }
  @Get('all')
  @ApiOperation({
    summary: 'Get All Company',
    description: `Retrieves all Company.`,
  })
  async all(@Res() res: Response): Promise<any> {
    Log({ module: CompanyController.name, method: 'all' });
    try {
      return await this._CompanyService.getAll(res);
    } catch (err) {
      throw new HttpException(err.message, HttpStatus.CONFLICT);
    }
  }

  @Post()
  @ApiOperation({
    summary: 'Create Company',
    description: 'Creates a Company',
  })
  async create(
    @Body() values: any,
    @Res() res: Response,
  ): Promise<any> {
    const log = Log({ module: CompanyController.name, method: 'create' });
    try {
      const data = await this._CompanyService.create(values);
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
    summary: 'Update Company',
    description: 'Update Company',
  })
  async update(
    @Body() values: any,
    @Param('id') id: number,
    @Res() res: Response,
  ): Promise<any> {
    const log = Log({ module: CompanyController.name, method: 'update' });
    try {
      const data = await this._CompanyService.update(id, values);
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
    summary: 'Delete Company',
    description: 'deletes a Company with the specified id ',
  })
  async destroy(@Param('id') id: number, @Res() res: Response): Promise<any> {
    const log = Log({ module: CompanyController.name, method: 'delete' });
    try {
      return await this._CompanyService.destroy(id, res);
    } catch (err) {
      throw new HttpException(err.message, HttpStatus.CONFLICT);
    }
  }
}



