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
    import { RoleEntity } from '';

   import { CompanyTeamEntity } from '';
   import { TeamPermissionEntity } from '';



@Table({ modelName: 'teams' })
export class TeamEntity extends Model<TeamEntity> {
          @ForeignKey(() => RoleEntity)
          @Column
          roleId: number;

         @Column({
            type: DataType.STRING(20),
            allowNull: false,
         })
          uuid: string;
          
         @Column({
            type: DataType.STRING(100),
            allowNull: false,
         })
          email: string;
          
         @Column({
            type: DataType.STRING(10),
            allowNull: false,
         })
          emailValidationCode: string;
          
         @Column({
            type: DataType.BOOLEAN,
            allowNull: false,
         })
          emailValidation: boolean;
          
         @Column({
            type: DataType.STRING(4),
            allowNull: false,
         })
          indicative: string;
          
         @Column({
            type: DataType.STRING(10),
            allowNull: false,
         })
          phone: string;
          
         @Column({
            type: DataType.STRING(10),
            allowNull: false,
         })
          phoneValidationCode: string;
          
         @Column({
            type: DataType.BOOLEAN,
            allowNull: false,
         })
          phoneValidation: boolean;
          
         @Column({
            type: DataType.TEXT,
            allowNull: false,
         })
          password: string;
          
         @Column({
            type: DataType.TEXT,
            allowNull: false,
         })
          photo: string;
          
         @Column({
            type: DataType.STRING(75),
            allowNull: false,
         })
          firstName: string;
          
         @Column({
            type: DataType.STRING(75),
            allowNull: false,
         })
          lastName: string;
          
         @Column({
            type: DataType.INTEGER,
            allowNull: false,
         })
          step: number;
          
          status: string;
          
         @Column({
            type: DataType.STRING(10),
            allowNull: true,
         })
          phoneOtp: string;
          
          @CreatedAt
          @Column
          createdAt: Date;
          
          @UpdatedAt
          @Column
          updatedAt: Date;
          
          @DeletedAt
          @Column
          deletedAt: Date;
          
         @BelongsTo(() => RoleEntity)
         role: RoleEntity;
         
         @HasMany(() => CompanyTeamEntity)
         companyTeam?: CompanyTeamEntity[];

         @HasMany(() => TeamPermissionEntity)
         teamPermission?: TeamPermissionEntity[];

}