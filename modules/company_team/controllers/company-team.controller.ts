
  
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
import { CompanyTeamService } from ''

@Controller('company-team')
@ApiTags('company-team')
  export class CompanyTeamController {
   constructor(
      @Inject(WINSTON) private readonly logger: Logger,
    private readonly _CompanyTeamService: CompanyTeamService,
  ) {}
  @Get()
  @ApiOperation({ summary: 'CompanyTeam', description: 'Retrieve CompanyTeam' })
   async pagination(
    @Query() { search, page, pageSize }: GetParamPaginationDto,
    @Res() res: Response,
   ): Promise<any> {
    Log({
      module: CompanyTeamController.name,
      method: 'pagination',
    });
     try {
      return await this._CompanyTeamService.pagination({ page, pageSize, search }, res);
    } catch (err) {
      throw new HttpException(err.message, HttpStatus.CONFLICT);
    }
   }
  @Get('all')
  @ApiOperation({
    summary: 'Get All CompanyTeam',
    description: `Retrieves all CompanyTeam.`,
  })
  async all(@Res() res: Response): Promise<any> {
    Log({ module: CompanyTeamController.name, method: 'all' });
    try {
      return await this._CompanyTeamService.getAll(res);
    } catch (err) {
      throw new HttpException(err.message, HttpStatus.CONFLICT);
    }
  }

  @Post()
  @ApiOperation({
    summary: 'Create CompanyTeam',
    description: 'Creates a CompanyTeam',
  })
  async create(
    @Body() values: any,
    @Res() res: Response,
  ): Promise<any> {
    const log = Log({ module: CompanyTeamController.name, method: 'create' });
    try {
      const data = await this._CompanyTeamService.create(values);
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
    summary: 'Update CompanyTeam',
    description: 'Update CompanyTeam',
  })
  async update(
    @Body() values: any,
    @Param('id') id: number,
    @Res() res: Response,
  ): Promise<any> {
    const log = Log({ module: CompanyTeamController.name, method: 'update' });
    try {
      const data = await this._CompanyTeamService.update(id, values);
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
    summary: 'Delete CompanyTeam',
    description: 'deletes a CompanyTeam with the specified id ',
  })
  async destroy(@Param('id') id: number, @Res() res: Response): Promise<any> {
    const log = Log({ module: CompanyTeamController.name, method: 'delete' });
    try {
      return await this._CompanyTeamService.destroy(id, res);
    } catch (err) {
      throw new HttpException(err.message, HttpStatus.CONFLICT);
    }
  }
}



