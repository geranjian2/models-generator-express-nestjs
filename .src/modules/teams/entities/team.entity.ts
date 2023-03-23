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
            allowNull: true,
         })
          uuid: string;
          
         @Column({
            type: DataType.STRING(100),
            allowNull: true,
         })
          email: string;
          
         @Column({
            type: DataType.STRING(10),
            allowNull: true,
         })
          emailValidationCode: string;
          
         @Column({
            type: DataType.BOOLEAN,
            allowNull: true,
         })
          emailValidation: boolean;
          
         @Column({
            type: DataType.STRING(4),
            allowNull: true,
         })
          indicative: string;
          
         @Column({
            type: DataType.STRING(10),
            allowNull: true,
         })
          phone: string;
          
         @Column({
            type: DataType.STRING(10),
            allowNull: true,
         })
          phoneValidationCode: string;
          
         @Column({
            type: DataType.BOOLEAN,
            allowNull: true,
         })
          phoneValidation: boolean;
          
         @Column({
            type: DataType.TEXT,
            allowNull: true,
         })
          password: string;
          
         @Column({
            type: DataType.TEXT,
            allowNull: true,
         })
          photo: string;
          
         @Column({
            type: DataType.STRING(75),
            allowNull: true,
         })
          firstName: string;
          
         @Column({
            type: DataType.STRING(75),
            allowNull: true,
         })
          lastName: string;
          
         @Column({
            type: DataType.INTEGER,
            allowNull: true,
         })
          step: number;
          
          status: string;
          
         @Column({
            type: DataType.STRING(10),
            allowNull: false,
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