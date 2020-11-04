import { v4 } from 'uuid'
import {
  Model,
  DataTypes,
  Optional,
  Sequelize,
} from "sequelize";

export interface WorkerAttributes {
  id: string;
  register: string;
  name: string;
}
export interface WorkerCreationAttributes extends Optional<WorkerAttributes, "id"> {}

class Worker extends Model<WorkerAttributes, WorkerCreationAttributes>
  implements WorkerAttributes {
  public id!: string;
  public register!: string;
  public name!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  
  static workerInit(sequelize:Sequelize){
    Worker.init({
        id: {
          type: DataTypes.STRING(36),
          primaryKey: true,
          unique: true,
          allowNull: false,
          defaultValue: () => v4()
        },
        register: {
          type: new DataTypes.STRING(128),
          allowNull: false,
        },
        name: {
          type: new DataTypes.STRING(128),
          allowNull: true,
        },
      },{
        sequelize,
        tableName: "workers",
      }
    );
  }
}

export default Worker
