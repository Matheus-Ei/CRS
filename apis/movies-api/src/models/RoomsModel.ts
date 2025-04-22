import { DataTypes } from "sequelize";
import { sequelize } from "../core/database";

export default sequelize.define(
  "rooms",

  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },

  {
    timestamps: true,
  },
);
