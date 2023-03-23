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
    import { ThirdCategoryEntity } from '';
    import { CompanyEntity } from '';
    import { TypeDocumentEntity } from '';

   import { ThirdBankEntity } from '';
   import { TransactionEntity } from '';



@Table({ modelName: 'third' })
export class ThirdEntity extends Model<ThirdEntity> {
         @Column({
            type: DataType.STRING(20),
            allowNull: false,
         })
          uuid: string;
          
          @ForeignKey(() => CompanyEntity)
          @Column
          companyId: number;

         @Column({
            type: DataType.STRING(100),
            allowNull: true,
         })
          businessName: string;
          
          @ForeignKey(() => TypeDocumentEntity)
          @Column
          typeDocumentId: number;

         @Column({
            type: DataType.STRING(20),
            allowNull: true,
         })
          document: string;
          
         @Column({
            type: DataType.INTEGER,
            allowNull: true,
         })
          dv: number;
          
         @Column({
            type: DataType.STRING(100),
            allowNull: false,
         })
          emailNotification: string;
          
         @Column({
            type: DataType.STRING(4),
            allowNull: false,
         })
          indicativeContact: string;
          
         @Column({
            type: DataType.STRING(10),
            allowNull: false,
         })
          phoneContact: string;
          
          @ForeignKey(() => ThirdCategoryEntity)
          @Column
          categoryId: number;

          thirdType: string;
          
          status: string;
          
          @CreatedAt
          @Column
          createdAt: Date;
          
          @UpdatedAt
          @Column
          updatedAt: Date;
          
          @DeletedAt
          @Column
          deletedAt: Date;
          
         @BelongsTo(() => ThirdCategoryEntity)
         thirdCategory: ThirdCategoryEntity;
         
         @BelongsTo(() => CompanyEntity)
         company: CompanyEntity;
         
         @BelongsTo(() => TypeDocumentEntity)
         typeDocument: TypeDocumentEntity;
         
         @HasMany(() => ThirdBankEntity)
         thirdBank?: ThirdBankEntity[];

         @HasMany(() => TransactionEntity)
         transaction?: TransactionEntity[];

}