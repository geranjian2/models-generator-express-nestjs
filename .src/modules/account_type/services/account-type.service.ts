import {
  HttpException,
  HttpStatus,
  Inject,
  Injectable,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import { literal, Op } from 'sequelize';
import { DATES } from '../../utils/constants/exclusions';
import { DELETE, SUCCESSFUL_LISTING } from '../../utils/constants/messages';
import { REPOSITORIES } from '../../utils/constants/repositories';
import { SEQUELIZE_PROVIDER } from '../../utils/constants/sequelize-constants';
import { count, paginate } from '../../utils/functions';
import { Log } from '../../utils/logger/log';
import sequelize from 'sequelize';
import { AccountTypeEntity } from '../entity/account-type.entity';

  @Injectable()
  export class AccountTypeService {
    constructor(
    @Inject(REPOSITORIES.AccountType)
    private readonly _AccountTypeRepository: typeof AccountTypeEntity,
    @Inject(SEQUELIZE_PROVIDER) private readonly sequelizeInstance,
  ) {}
  async pagination(
    { search, page, pageSize }: GetParamPaginationDto,
    @Res() res: Response,
  ): Promise<any> {
    const log = Log({ module: AccountTypeService.name, method: 'pagination' });
    try {
     const offset = (page - 1) * pageSize;
     const count_ = (
        (await this._AccountTypeRepository.sequelize.query(
          AccountTypeTotalQuery(fieldSearch),
          {
            replacements: {
              search: `%${search.toLowerCase()}%`,
            },
            type: sequelize.QueryTypes.SELECT,
          },
        )) as any
      )[0];


      const data = (await this._AccountTypeRepository.sequelize.query(
        AccountTypeQuery (fieldSearch),
        {
          replacements: {
            limit: Number(pageSize),
            offset,
            search: `%${search.toLowerCase()}%`,
          },
          type: sequelize.QueryTypes.SELECT,
        },
      )) as any;
      const meta = count(page, pageSize, Number(count_.count), data);

       return {
        error: 0,
        message: SUCCESSFUL_LISTING,
        data: data,
        meta,
        export: '',
        select: [
          { label: 'Todos', value: 'all' },
          { label: 'Estado', value: 'status' },
        ],
      };

    } catch (err) {
      throw new HttpException(err.message, HttpStatus.CONFLICT);
    }
  }
  };



