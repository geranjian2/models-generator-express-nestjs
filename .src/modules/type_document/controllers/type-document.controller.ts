
  
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
import { TypeDocumentService } from ''

@Controller('type-document')
@ApiTags('type-document')
  export class TypeDocumentController {
   constructor(
      @Inject(WINSTON) private readonly logger: Logger,
    private readonly _TypeDocumentService: TypeDocumentService,
  ) {}
  @Get()
  @ApiOperation({ summary: 'TypeDocument', description: 'Retrieve TypeDocument' })
   async pagination(
    @Query() { search, page, pageSize }: GetParamPaginationDto,
    @Res() res: Response,
   ): Promise<any> {
    Log({
      module: TypeDocumentController.name,
      method: 'pagination',
    });
     try {
      return await this._TypeDocumentService.pagination({ page, pageSize, search }, res);
    } catch (err) {
      throw new HttpException(err.message, HttpStatus.CONFLICT);
    }
   }
  @Get('all')
  @ApiOperation({
    summary: 'Get All TypeDocument',
    description: `Retrieves all TypeDocument.`,
  })
  async all(@Res() res: Response): Promise<any> {
    Log({ module: TypeDocumentController.name, method: 'all' });
    try {
      return await this._TypeDocumentService.getAll(res);
    } catch (err) {
      throw new HttpException(err.message, HttpStatus.CONFLICT);
    }
  }

  @Post()
  @ApiOperation({
    summary: 'Create TypeDocument',
    description: 'Creates a TypeDocument',
  })
  async create(
    @Body() values: any,
    @Res() res: Response,
  ): Promise<any> {
    const log = Log({ module: TypeDocumentController.name, method: 'create' });
    try {
      const data = await this._TypeDocumentService.create(values);
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
    summary: 'Update TypeDocument',
    description: 'Update TypeDocument',
  })
  async update(
    @Body() values: any,
    @Param('id') id: number,
    @Res() res: Response,
  ): Promise<any> {
    const log = Log({ module: TypeDocumentController.name, method: 'update' });
    try {
      const data = await this._TypeDocumentService.update(id, values);
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
    summary: 'Delete TypeDocument',
    description: 'deletes a TypeDocument with the specified id ',
  })
  async destroy(@Param('id') id: number, @Res() res: Response): Promise<any> {
    const log = Log({ module: TypeDocumentController.name, method: 'delete' });
    try {
      return await this._TypeDocumentService.destroy(id, res);
    } catch (err) {
      throw new HttpException(err.message, HttpStatus.CONFLICT);
    }
  }
}



