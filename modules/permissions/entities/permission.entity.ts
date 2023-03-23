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

   import { RolePermissionEntity } from '';
   import { TeamPermissionEntity } from '';
   import { UserPermissionEntity } from '';



@Table({ modelName: 'permissions' })
export class PermissionEntity extends Model<PermissionEntity> {
         @Column({
            type: DataType.STRING(100),
            allowNull: false,
         })
          name: string;
          
         @Column({
            type: DataType.STRING(150),
            allowNull: false,
         })
          description: string;
          
          @CreatedAt
          @Column
          createdAt: Date;
          
          @UpdatedAt
          @Column
          updatedAt: Date;
          
         @HasMany(() => RolePermissionEntity)
         rolePermission?: RolePermissionEntity[];

         @HasMany(() => TeamPermissionEntity)
         teamPermission?: TeamPermissionEntity[];

         @HasMany(() => UserPermissionEntity)
         userPermission?: UserPermissionEntity[];

}