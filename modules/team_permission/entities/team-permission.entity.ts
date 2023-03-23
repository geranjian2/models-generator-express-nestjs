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
    import { TeamEntity } from '';




@Table({ modelName: 'team_permission' })
export class TeamPermissionEntity extends Model<TeamPermissionEntity> {
          @ForeignKey(() => TeamEntity)
          @Column
          teamId: number;

          @ForeignKey(() => PermissionEntity)
          @Column
          permissionId: number;

         @Column({
            type: DataType.BOOLEAN,
            allowNull: false,
         })
          permit: boolean;
          
         @BelongsTo(() => PermissionEntity)
         permission: PermissionEntity;
         
         @BelongsTo(() => TeamEntity)
         team: TeamEntity;
         
}