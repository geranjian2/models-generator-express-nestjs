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
    import { PlanEntity } from '';




@Table({ modelName: 'company_plan' })
export class CompanyPlanEntity extends Model<CompanyPlanEntity> {
          @ForeignKey(() => CompanyEntity)
          @Column
          companyId: number;

          @ForeignKey(() => PlanEntity)
          @Column
          planId: number;

          @CreatedAt
          @Column
          createdAt: Date;
          
          @UpdatedAt
          @Column
          updatedAt: Date;
          
          @DeletedAt
          @Column
          deletedAt: Date;
          
         @BelongsTo(() => CompanyEntity)
         company: CompanyEntity;
         
         @BelongsTo(() => PlanEntity)
         plan: PlanEntity;
         
}