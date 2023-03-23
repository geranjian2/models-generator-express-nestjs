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
    import { PermissionEntity } from '';
    import { UserEntity } from '';




@Table({ modelName: 'user_permission' })
export class UserPermissionEntity extends Model<UserPermissionEntity> {
          @ForeignKey(() => UserEntity)
          @Column
          userId: number;

          @ForeignKey(() => PermissionEntity)
          @Column
          permissionId: number;

         @Column({
            type: DataType.BOOLEAN,
            allowNull: true,
         })
          permit: boolean;
          
         @BelongsTo(() => PermissionEntity)
         permission: PermissionEntity;
         
         @BelongsTo(() => UserEntity)
         user: UserEntity;
         
}