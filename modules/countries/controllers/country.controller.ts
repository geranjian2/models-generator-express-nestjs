
  
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
import { CountryService } from ''

@Controller('country')
@ApiTags('country')
  export class CountryController {
   constructor(
      @Inject(WINSTON) private readonly logger: Logger,
    private readonly _CountryService: CountryService,
  ) {}
  @Get()
  @ApiOperation({ summary: 'Country', description: 'Retrieve Country' })
   async pagination(
    @Query() { search, page, pageSize }: GetParamPaginationDto,
    @Res() res: Response,
   ): Promise<any> {
    Log({
      module: CountryController.name,
      method: 'pagination',
    });
     try {
      return await this._CountryService.pagination({ page, pageSize, search }, res);
    } catch (err) {
      throw new HttpException(err.message, HttpStatus.CONFLICT);
    }
   }
  @Get('all')
  @ApiOperation({
    summary: 'Get All Country',
    description: `Retrieves all Country.`,
  })
  async all(@Res() res: Response): Promise<any> {
    Log({ module: CountryController.name, method: 'all' });
    try {
      return await this._CountryService.getAll(res);
    } catch (err) {
      throw new HttpException(err.message, HttpStatus.CONFLICT);
    }
  }

  @Post()
  @ApiOperation({
    summary: 'Create Country',
    description: 'Creates a Country',
  })
  async create(
    @Body() values: any,
    @Res() res: Response,
  ): Promise<any> {
    const log = Log({ module: CountryController.name, method: 'create' });
    try {
      const data = await this._CountryService.create(values);
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
    summary: 'Update Country',
    description: 'Update Country',
  })
  async update(
    @Body() values: any,
    @Param('id') id: number,
    @Res() res: Response,
  ): Promise<any> {
    const log = Log({ module: CountryController.name, method: 'update' });
    try {
      const data = await this._CountryService.update(id, values);
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
    summary: 'Delete Country',
    description: 'deletes a Country with the specified id ',
  })
  async destroy(@Param('id') id: number, @Res() res: Response): Promise<any> {
    const log = Log({ module: CountryController.name, method: 'delete' });
    try {
      return await this._CountryService.destroy(id, res);
    } catch (err) {
      throw new HttpException(err.message, HttpStatus.CONFLICT);
    }
  }
}



