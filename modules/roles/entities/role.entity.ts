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
   import { TeamEntity } from '';
   import { UserEntity } from '';



@Table({ modelName: 'roles' })
export class RoleEntity extends Model<RoleEntity> {
         @Column({
            type: DataType.STRING(100),
            allowNull: false,
         })
          name: string;
          
         @Column({
            type: DataType.STRING(70),
            allowNull: false,
         })
          description: string;
          
          @CreatedAt
          @Column
          createdAt: Date;
          
          @UpdatedAt
          @Column
          updatedAt: Date;
          
          @DeletedAt
          @Column
          deletedAt: Date;
          
         @HasMany(() => RolePermissionEntity)
         rolePermission?: RolePermissionEntity[];

         @HasMany(() => TeamEntity)
         team?: TeamEntity[];

         @HasMany(() => UserEntity)
         user?: UserEntity[];

}