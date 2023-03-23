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




@Table({ modelName: 'sequelize_data' })
export class SequelizeDatumEntity extends Model<SequelizeDatumEntity> {
         @Column({
            type: DataType.STRING(255),
            allowNull: false,
         })
          name: string;
          
}