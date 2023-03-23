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
    import { CompanyBankEntity } from '';
    import { CompanyEntity } from '';
    import { CompanyTeamEntity } from '';
    import { ThirdBankEntity } from '';
    import { ThirdEntity } from '';

   import { TransactionDetailEntity } from '';



@Table({ modelName: 'transaction' })
export class TransactionEntity extends Model<TransactionEntity> {
         @Column({
            type: DataType.STRING(20),
            allowNull: false,
         })
          uuid: string;
          
         @Column({
            type: DataType.STRING(12),
            allowNull: true,
         })
          reference: string;
          
          @ForeignKey(() => CompanyEntity)
          @Column
          companyId: number;

          @ForeignKey(() => CompanyBankEntity)
          @Column
          companyBankId: number;

          @ForeignKey(() => ThirdEntity)
          @Column
          thirdId: number;

          @ForeignKey(() => ThirdBankEntity)
          @Column
          thirdBankId: number;

          @ForeignKey(() => CompanyTeamEntity)
          @Column
          companyTeamId: number;

         @Column({
            type: DataType.INTEGER,
            allowNull: true,
         })
          quantity: number;
          
          averageValue: string;
          
          value: string;
          
          expirationDate: Date;
          
         @Column({
            type: DataType.TEXT,
            allowNull: false,
         })
          observations: string;
          
          statusProcess: string;
          
          status: string;
          
          @CreatedAt
          @Column
          createdAt: Date;
          
          payedAt: Date;
          
          @UpdatedAt
          @Column
          updatedAt: Date;
          
          @DeletedAt
          @Column
          deletedAt: Date;
          
          groupPayingId: any;
          
         @BelongsTo(() => CompanyBankEntity)
         companyBank: CompanyBankEntity;
         
         @BelongsTo(() => CompanyEntity)
         company: CompanyEntity;
         
         @BelongsTo(() => CompanyTeamEntity)
         companyTeam: CompanyTeamEntity;
         
         @BelongsTo(() => ThirdBankEntity)
         thirdBank: ThirdBankEntity;
         
         @BelongsTo(() => ThirdEntity)
         third: ThirdEntity;
         
         @HasMany(() => TransactionDetailEntity)
         transactionDetail?: TransactionDetailEntity[];

}