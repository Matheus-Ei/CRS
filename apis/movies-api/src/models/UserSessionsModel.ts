import { DataTypes } from "sequelize";
import { sequelize } from "../core/database";

export default sequelize.define(
  "user_sessions",

  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    sessionId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'session_id',
      references: {
        model: 'sessions',
        key: 'id'
      }
    },

    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'user_id',
      references: {
        model: 'users',
        key: 'id'
      }
    },
  },

  {
    timestamps: true,
  },
);
