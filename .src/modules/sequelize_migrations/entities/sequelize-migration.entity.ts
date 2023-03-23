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




@Table({ modelName: 'sequelize_migrations' })
export class SequelizeMigrationEntity extends Model<SequelizeMigrationEntity> {
         @Column({
            type: DataType.STRING(255),
            allowNull: true,
         })
          name: string;
          
}