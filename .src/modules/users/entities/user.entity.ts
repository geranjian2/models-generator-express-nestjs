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

   import { UserPermissionEntity } from '';



@Table({ modelName: 'users' })
export class UserEntity extends Model<UserEntity> {
         @Column({
            type: DataType.STRING(30),
            allowNull: true,
         })
          username: string;
          
          @ForeignKey(() => RoleEntity)
          @Column
          roleId: number;

         @Column({
            type: DataType.STRING(300),
            allowNull: true,
         })
          email: string;
          
         @Column({
            type: DataType.TEXT,
            allowNull: true,
         })
          password: string;
          
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
          
         @BelongsTo(() => RoleEntity)
         role: RoleEntity;
         
         @HasMany(() => UserPermissionEntity)
         userPermission?: UserPermissionEntity[];

}