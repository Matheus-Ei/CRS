import { DataTypes } from "sequelize";
import { sequelize } from "../core/database";

export default sequelize.define(
  "users",

  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    cpf: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    isStudent: {
      type: DataTypes.BOOLEAN,
      field: 'is_student'
    },
  },

  {
    timestamps: true,
  },
);
