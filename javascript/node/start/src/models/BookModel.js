import { DataTypes } from 'sequelize'
import { sequelize } from '../config/postgres.js'

export const BookModel = sequelize.define(
  'books', 

  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },

    name: {
      type: DataTypes.STRING(100),
      unique: true,
      allowNull: false,
    },

    description: {
      type: DataTypes.TEXT
    }
  },
  {
    timestamps: true
  }
)
