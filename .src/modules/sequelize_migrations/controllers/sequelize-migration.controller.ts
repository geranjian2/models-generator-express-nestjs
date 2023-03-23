
  
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
import { SequelizeMigrationService } from ''

@Controller('sequelize-migration')
@ApiTags('sequelize-migration')
  export class SequelizeMigrationController {
   constructor(
      @Inject(WINSTON) private readonly logger: Logger,
    private readonly _SequelizeMigrationService: SequelizeMigrationService,
  ) {}
  @Get()
  @ApiOperation({ summary: 'SequelizeMigration', description: 'Retrieve SequelizeMigration' })
   async pagination(
    @Query() { search, page, pageSize }: GetParamPaginationDto,
    @Res() res: Response,
   ): Promise<any> {
    Log({
      module: SequelizeMigrationController.name,
      method: 'pagination',
    });
     try {
      return await this._SequelizeMigrationService.pagination({ page, pageSize, search }, res);
    } catch (err) {
      throw new HttpException(err.message, HttpStatus.CONFLICT);
    }
   }
  @Get('all')
  @ApiOperation({
    summary: 'Get All SequelizeMigration',
    description: `Retrieves all SequelizeMigration.`,
  })
  async all(@Res() res: Response): Promise<any> {
    Log({ module: SequelizeMigrationController.name, method: 'all' });
    try {
      return await this._SequelizeMigrationService.getAll(res);
    } catch (err) {
      throw new HttpException(err.message, HttpStatus.CONFLICT);
    }
  }

  @Post()
  @ApiOperation({
    summary: 'Create SequelizeMigration',
    description: 'Creates a SequelizeMigration',
  })
  async create(
    @Body() values: any,
    @Res() res: Response,
  ): Promise<any> {
    const log = Log({ module: SequelizeMigrationController.name, method: 'create' });
    try {
      const data = await this._SequelizeMigrationService.create(values);
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
    summary: 'Update SequelizeMigration',
    description: 'Update SequelizeMigration',
  })
  async update(
    @Body() values: any,
    @Param('id') id: number,
    @Res() res: Response,
  ): Promise<any> {
    const log = Log({ module: SequelizeMigrationController.name, method: 'update' });
    try {
      const data = await this._SequelizeMigrationService.update(id, values);
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
    summary: 'Delete SequelizeMigration',
    description: 'deletes a SequelizeMigration with the specified id ',
  })
  async destroy(@Param('id') id: number, @Res() res: Response): Promise<any> {
    const log = Log({ module: SequelizeMigrationController.name, method: 'delete' });
    try {
      return await this._SequelizeMigrationService.destroy(id, res);
    } catch (err) {
      throw new HttpException(err.message, HttpStatus.CONFLICT);
    }
  }
}



