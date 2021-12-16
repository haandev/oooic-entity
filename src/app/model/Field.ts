import { sequelize, DataTypes, Model } from "@/bootstrap/init-connection";
import { InputType, NativeType } from "../controller/Field/types";
import { Entity } from "./Entity";

export class Field extends Model {
  id: number;
  name: string;
  title: string;
  description: string;
  inputSettings: InputType.Settings;
  nativeSettings: NativeType.Settings;
  localization: boolean;
  multiple: boolean;
  synced: boolean;
}

Field.init(
  {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    inputSettings: {
      type: DataTypes.JSON,
      allowNull: false,
    },
    nativeSettings: {
      type: DataTypes.JSON,
      allowNull: false,
    },
    localization: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    multiple: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    synced: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  },
  {
    tableName: "field",
    sequelize,
  }
);

Field.belongsTo(Entity, { as: "entity" });
