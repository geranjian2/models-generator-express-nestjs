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
    import { RoleEntity } from '';




@Table({ modelName: 'role_permission' })
export class RolePermissionEntity extends Model<RolePermissionEntity> {
          @ForeignKey(() => RoleEntity)
          @Column
          roleId: number;

          @ForeignKey(() => PermissionEntity)
          @Column
          permissionId: number;

         @BelongsTo(() => PermissionEntity)
         permission: PermissionEntity;
         
         @BelongsTo(() => RoleEntity)
         role: RoleEntity;
         
}