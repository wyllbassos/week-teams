import { v4 } from 'uuid'
import {
  Model,
  // ModelDefined,
   DataTypes,
  // HasManyGetAssociationsMixin,
  // HasManyAddAssociationMixin,
  // HasManyHasAssociationMixin,
  // Association,
  // HasManyCountAssociationsMixin,
  // HasManyCreateAssociationMixin,
  Optional,
  Sequelize,
} from "sequelize";

//const sequelize = new Sequelize("mysql://root:asd123@localhost:3306/mydb");

// These are all the attributes in the User model
export interface UserAttributes {
  id: string;
  firstName: string;
  lastName: string;
  email: string; // for nullable fields
  
}

// Some attributes are optional in `User.build` and `User.create` calls
export interface UserCreationAttributes extends Optional<UserAttributes, "id"> {}

class User extends Model<UserAttributes, UserCreationAttributes>
  implements UserAttributes {
  public id!: string; // Note that the `null assertion` `!` is required in strict mode.
  public firstName!: string;
  public lastName!: string; // for nullable fields
  public email!: string; // for nullable fields

  // timestamps!
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  
  static userInit(sequelize:Sequelize){
    User.init({
        id: {
          type: DataTypes.STRING(36),
          primaryKey: true,
          unique: true,
          allowNull: false,
          defaultValue: () => v4()
        },
        email: {
          type: new DataTypes.STRING(128),
          allowNull: false,
        },
        firstName: {
          type: new DataTypes.STRING(128),
          allowNull: true,
        },
        lastName: {
          type: new DataTypes.STRING(128),
          allowNull: true,
        },
      },{
        sequelize,
        tableName: "users",
      }
    );
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
