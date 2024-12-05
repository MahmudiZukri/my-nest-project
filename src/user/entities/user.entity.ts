
import { Column, Model, CreatedAt, UpdatedAt, DeletedAt, DataType } from 'sequelize-typescript';

export class User extends Model<User> {
  @Column({
    type: DataType.BIGINT,
    allowNull: false, autoIncrement: true, unique: true, primaryKey: true,
  })
  public id: number;

  @Column({ allowNull: false })
  name: string;

  @Column({ type: DataType.SMALLINT, allowNull: true, defaultValue: null })
  age: number | null;

  @Column({ allowNull: false, validate: { isEmail: true } })
  email: string;

  @CreatedAt
  public createdAt: Date;

  @UpdatedAt
  public updatedAt: Date;

  @DeletedAt
  public deletedAt: Date;

}



