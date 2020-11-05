import { v4 } from 'uuid'
import {
  Model,
  // ModelDefined,
   DataTypes,
   HasManyGetAssociationsMixin,
  // HasManyAddAssociationMixin,
  // HasManyHasAssociationMixin,
  Association,
  // HasManyCountAssociationsMixin,
  // HasManyCreateAssociationMixin,
  Optional,
  Sequelize,
} from "sequelize";
import Worker from './Worker';
 
//const sequelize = new Sequelize("mysql://root:asd123@localhost:3306/mydb");

// These are all the attributes in the User model
export interface UserAttributes {
  id: string;
  userLogin: string;
  email: string; // for nullable fields
  name: string;
  workerId: string | null;
}

// Some attributes are optional in `User.build` and `User.create` calls
export interface UserCreationAttributes extends Optional<UserAttributes, "id"> {}

class User extends Model<UserAttributes, UserCreationAttributes>
  implements UserAttributes {
  public id!: string; // Note that the `null assertion` `!` is required in strict mode.
  public userLogin!: string; // for nullable fields
  public email!: string;
  public name!: string;
  public workerId!: string;
  
  // timestamps!
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  

  public readonly workers ? : Worker[]; // Note this is optional since it's only populated when explicitly requested in code
  public getWorker!: HasManyGetAssociationsMixin < Worker > ; // Note the null assertions!

  public static associations: {
    workers: Association < User, Worker > ;
  };



  static userInit(sequelize:Sequelize){
    User.init({
        id: {
          type: DataTypes.UUID,
          primaryKey: true,
          unique: true,
          allowNull: false,
          defaultValue: DataTypes.UUIDV4,
        },
        userLogin: {
          unique: true,
          allowNull: false,
          type: new DataTypes.STRING(128),
        },
        email: {
          unique: true,
          allowNull: false,
          type: new DataTypes.STRING(128),
        },
        name: {
          allowNull: false,
          type: new DataTypes.STRING(128),
        },
        workerId: {
          unique: true,
          type: new DataTypes.STRING(128),
          allowNull: true,
        },
      },{
        sequelize,
        tableName: "users",
      }
    );
    //User.hasOne(Worker, { sourceKey: "workerID" });
  }
  static userAssossiation(){
    User.belongsTo(Worker)
  }
  // Since TS cannot determine model association at compile time
  // we have to declare them here purely virtually
  // these will not exist until `Model.init` was called.
  // public getProjects!: HasManyGetAssociationsMixin<Project>; // Note the null assertions!
  // public addProject!: HasManyAddAssociationMixin<Project, number>;
  // public hasProject!: HasManyHasAssociationMixin<Project, number>;
  // public countProjects!: HasManyCountAssociationsMixin;
  // public createProject!: HasManyCreateAssociationMixin<Project>;

  // You can also pre-declare possible inclusions, these will only be populated if you
  // actively include a relation.
  // public readonly projects?: Project[]; // Note this is optional since it's only populated when explicitly requested in code

  // public static associations: {
  //   projects: Association<User, Project>;
  // };
}

export default User
