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
            allowNull: false,
         })
          uuid: string;
          
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
            allowNull: true,
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
            allowNull: true,
         })
          address: string;
          
         @Column({
            type: DataType.STRING(70),
            allowNull: false,
         })
          emailNotification: string;
          
         @Column({
            type: DataType.STRING(70),
            allowNull: false,
         })
          emailInvoice: string;
          
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
          
         @Column({
            type: DataType.STRING(75),
            allowNull: false,
         })
          firstNameRl: string;
          
         @Column({
            type: DataType.STRING(75),
            allowNull: false,
         })
          lastNameRl: string;
          
          typeDocumentRlId: number;
          
         @Column({
            type: DataType.STRING(20),
            allowNull: true,
         })
          documentRl: string;
          
         @Column({
            type: DataType.STRING(4),
            allowNull: false,
         })
          indicativeRl: string;
          
         @Column({
            type: DataType.STRING(10),
            allowNull: false,
         })
          phoneRl: string;
          
         @Column({
            type: DataType.TEXT,
            allowNull: false,
         })
          logo: string;
          
         @Column({
            type: DataType.BOOLEAN,
            allowNull: true,
         })
          acceptTerms: boolean;
          
         @Column({
            type: DataType.TEXT,
            allowNull: false,
         })
          chamberCommerceImage: string;
          
         @Column({
            type: DataType.TEXT,
            allowNull: false,
         })
          rut: string;
          
         @Column({
            type: DataType.TEXT,
            allowNull: false,
         })
          commercialContract: string;
          
          status: string;
          
         @Column({
            type: DataType.STRING(70),
            allowNull: false,
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