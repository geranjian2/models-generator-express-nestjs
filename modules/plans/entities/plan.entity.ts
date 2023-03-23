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

   import { CompanyPlanEntity } from '';



@Table({ modelName: 'plans' })
export class PlanEntity extends Model<PlanEntity> {
         @Column({
            type: DataType.STRING(40),
            allowNull: true,
         })
          name: string;
          
         @Column({
            type: DataType.STRING(100),
            allowNull: true,
         })
          description: string;
          
         @Column({
            type: DataType.INTEGER,
            allowNull: true,
         })
          dispersionsNumber: number;
          
          value: string;
          
          implementationFee: string;
          
         @Column({
            type: DataType.BOOLEAN,
            allowNull: false,
         })
          status: boolean;
          
          @CreatedAt
          @Column
          createdAt: Date;
          
          @UpdatedAt
          @Column
          updatedAt: Date;
          
          @DeletedAt
          @Column
          deletedAt: Date;
          
         @HasMany(() => CompanyPlanEntity)
         companyPlan?: CompanyPlanEntity[];

}