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
    import { CityEntity } from '';
    import { CountryEntity } from '';
    import { DepartmentEntity } from '';
    import { TypeDocumentEntity } from '';

   import { BillingEntity } from '';
   import { CompanyBankEntity } from '';
   import { CompanyPlanEntity } from '';
   import { CompanyTeamEntity } from '';
   import { ThirdEntity } from '';
   import { TransactionEntity } from '';



@Table({ modelName: 'companies' })
export class CompanyEntity extends Model<CompanyEntity> {
         @Column({
            type: DataType.STRING(20),
            allowNull: true,
         })
          uuid: string;
          
          @ForeignKey(() => TypeDocumentEntity)
          @Column
          typeDocumentId: number;

         @Column({
            type: DataType.STRING(20),
            allowNull: false,
         })
          document: string;
          
         @Column({
            type: DataType.INTEGER,
            allowNull: false,
         })
          dv: number;
          
         @Column({
            type: DataType.STRING(100),
            allowNull: false,
         })
          businessName: string;
          
          @ForeignKey(() => CountryEntity)
          @Column
          countryId: number;

          @ForeignKey(() => DepartmentEntity)
          @Column
          departmentId: number;

          @ForeignKey(() => CityEntity)
          @Column
          cityId: number;

         @Column({
            type: DataType.STRING(100),
            allowNull: false,
         })
          address: string;
          
         @Column({
            type: DataType.STRING(70),
            allowNull: true,
         })
          emailNotification: string;
          
         @Column({
            type: DataType.STRING(70),
            allowNull: true,
         })
          emailInvoice: string;
          
         @Column({
            type: DataType.STRING(4),
            allowNull: true,
         })
          indicativeContact: string;
          
         @Column({
            type: DataType.STRING(10),
            allowNull: true,
         })
          phoneContact: string;
          
         @Column({
            type: DataType.STRING(75),
            allowNull: true,
         })
          firstNameRl: string;
          
         @Column({
            type: DataType.STRING(75),
            allowNull: true,
         })
          lastNameRl: string;
          
          typeDocumentRlId: number;
          
         @Column({
            type: DataType.STRING(20),
            allowNull: false,
         })
          documentRl: string;
          
         @Column({
            type: DataType.STRING(4),
            allowNull: true,
         })
          indicativeRl: string;
          
         @Column({
            type: DataType.STRING(10),
            allowNull: true,
         })
          phoneRl: string;
          
         @Column({
            type: DataType.TEXT,
            allowNull: true,
         })
          logo: string;
          
         @Column({
            type: DataType.BOOLEAN,
            allowNull: false,
         })
          acceptTerms: boolean;
          
         @Column({
            type: DataType.TEXT,
            allowNull: true,
         })
          chamberCommerceImage: string;
          
         @Column({
            type: DataType.TEXT,
            allowNull: true,
         })
          rut: string;
          
         @Column({
            type: DataType.TEXT,
            allowNull: true,
         })
          commercialContract: string;
          
          status: string;
          
         @Column({
            type: DataType.STRING(70),
            allowNull: true,
         })
          emailRegister: string;
          
          @CreatedAt
          @Column
          createdAt: Date;
          
          @UpdatedAt
          @Column
          updatedAt: Date;
          
          @DeletedAt
          @Column
          deletedAt: Date;
          
          uploadedAt: Date;
          
         @BelongsTo(() => CityEntity)
         city: CityEntity;
         
         @BelongsTo(() => CountryEntity)
         country: CountryEntity;
         
         @BelongsTo(() => DepartmentEntity)
         department: DepartmentEntity;
         
         @BelongsTo(() => TypeDocumentEntity)
         typeDocument: TypeDocumentEntity;
         
         @HasMany(() => BillingEntity)
         billing?: BillingEntity[];

         @HasMany(() => CompanyBankEntity)
         companyBank?: CompanyBankEntity[];

         @HasMany(() => CompanyPlanEntity)
         companyPlan?: CompanyPlanEntity[];

         @HasMany(() => CompanyTeamEntity)
         companyTeam?: CompanyTeamEntity[];

         @HasMany(() => ThirdEntity)
         third?: ThirdEntity[];

         @HasMany(() => TransactionEntity)
         transaction?: TransactionEntity[];

}