
  
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
import { ThirdCategoryService } from ''

@Controller('third-category')
@ApiTags('third-category')
  export class ThirdCategoryController {
   constructor(
      @Inject(WINSTON) private readonly logger: Logger,
    private readonly _ThirdCategoryService: ThirdCategoryService,
  ) {}
  @Get()
  @ApiOperation({ summary: 'ThirdCategory', description: 'Retrieve ThirdCategory' })
   async pagination(
    @Query() { search, page, pageSize }: GetParamPaginationDto,
    @Res() res: Response,
   ): Promise<any> {
    Log({
      module: ThirdCategoryController.name,
      method: 'pagination',
    });
     try {
      return await this._ThirdCategoryService.pagination({ page, pageSize, search }, res);
    } catch (err) {
      throw new HttpException(err.message, HttpStatus.CONFLICT);
    }
   }
  @Get('all')
  @ApiOperation({
    summary: 'Get All ThirdCategory',
    description: `Retrieves all ThirdCategory.`,
  })
  async all(@Res() res: Response): Promise<any> {
    Log({ module: ThirdCategoryController.name, method: 'all' });
    try {
      return await this._ThirdCategoryService.getAll(res);
    } catch (err) {
      throw new HttpException(err.message, HttpStatus.CONFLICT);
    }
  }

  @Post()
  @ApiOperation({
    summary: 'Create ThirdCategory',
    description: 'Creates a ThirdCategory',
  })
  async create(
    @Body() values: any,
    @Res() res: Response,
  ): Promise<any> {
    const log = Log({ module: ThirdCategoryController.name, method: 'create' });
    try {
      const data = await this._ThirdCategoryService.create(values);
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
    summary: 'Update ThirdCategory',
    description: 'Update ThirdCategory',
  })
  async update(
    @Body() values: any,
    @Param('id') id: number,
    @Res() res: Response,
  ): Promise<any> {
    const log = Log({ module: ThirdCategoryController.name, method: 'update' });
    try {
      const data = await this._ThirdCategoryService.update(id, values);
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
    summary: 'Delete ThirdCategory',
    description: 'deletes a ThirdCategory with the specified id ',
  })
  async destroy(@Param('id') id: number, @Res() res: Response): Promise<any> {
    const log = Log({ module: ThirdCategoryController.name, method: 'delete' });
    try {
      return await this._ThirdCategoryService.destroy(id, res);
    } catch (err) {
      throw new HttpException(err.message, HttpStatus.CONFLICT);
    }
  }
}



