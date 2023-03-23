import {
  BelongsTo,
  Column,
  CreatedAt,
  DataType,
  DeletedAt,
  ForeignKey,
  Model,
  Table,
  UpdatedAt,
  HasMany,
} from 'sequelize-typescript';
    import { CompanyEntity } from '';
    import { TeamEntity } from '';

   import { TransactionEntity } from '';



@Table({ modelName: 'company_team' })
export class CompanyTeamEntity extends Model<CompanyTeamEntity> {
          @ForeignKey(() => CompanyEntity)
          @Column
          companyId: number;

          @ForeignKey(() => TeamEntity)
          @Column
          teamId: number;

         @BelongsTo(() => CompanyEntity)
         company: CompanyEntity;
         
         @BelongsTo(() => TeamEntity)
         team: TeamEntity;
         
         @HasMany(() => TransactionEntity)
         transaction?: TransactionEntity[];

}