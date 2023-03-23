
  
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
import { AccountTypeService } from ''

@Controller('account-type')
@ApiTags('account-type')
  export class AccountTypeController {
   constructor(
      @Inject(WINSTON) private readonly logger: Logger,
    private readonly _AccountTypeService: AccountTypeService,
  ) {}
  @Get()
  @ApiOperation({ summary: 'AccountType', description: 'Retrieve AccountType' })
   async pagination(
    @Query() { search, page, pageSize }: GetParamPaginationDto,
    @Res() res: Response,
   ): Promise<any> {
    Log({
      module: AccountTypeController.name,
      method: 'pagination',
    });
     try {
      return await this._AccountTypeService.pagination({ page, pageSize, search }, res);
    } catch (err) {
      throw new HttpException(err.message, HttpStatus.CONFLICT);
    }
   }
  @Get('all')
  @ApiOperation({
    summary: 'Get All AccountType',
    description: `Retrieves all AccountType.`,
  })
  async all(@Res() res: Response): Promise<any> {
    Log({ module: AccountTypeController.name, method: 'all' });
    try {
      return await this._AccountTypeService.getAll(res);
    } catch (err) {
      throw new HttpException(err.message, HttpStatus.CONFLICT);
    }
  }

  @Post()
  @ApiOperation({
    summary: 'Create AccountType',
    description: 'Creates a AccountType',
  })
  async create(
    @Body() values: any,
    @Res() res: Response,
  ): Promise<any> {
    const log = Log({ module: AccountTypeController.name, method: 'create' });
    try {
      const data = await this._AccountTypeService.create(values);
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
    summary: 'Update AccountType',
    description: 'Update AccountType',
  })
  async update(
    @Body() values: any,
    @Param('id') id: number,
    @Res() res: Response,
  ): Promise<any> {
    const log = Log({ module: AccountTypeController.name, method: 'update' });
    try {
      const data = await this._AccountTypeService.update(id, values);
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
    summary: 'Delete AccountType',
    description: 'deletes a AccountType with the specified id ',
  })
  async destroy(@Param('id') id: number, @Res() res: Response): Promise<any> {
    const log = Log({ module: AccountTypeController.name, method: 'delete' });
    try {
      return await this._AccountTypeService.destroy(id, res);
    } catch (err) {
      throw new HttpException(err.message, HttpStatus.CONFLICT);
    }
  }
}



