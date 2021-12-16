import { sequelize, DataTypes, Model } from "@/bootstrap/init-connection";

export class Entity extends Model {
  id: number;
  title: string;
  name: string;
  synced: boolean; 
}

Entity.init(
  {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    synced: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false, 
    },
  },
  {
    tableName: "entity",
    sequelize,
  }
);
