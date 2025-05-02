import { DataTypes } from 'sequelize'
import { sequelize } from '../config/postgres.js'

export const ClientModel = sequelize.define(
  'clients', 

  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },

    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },

    cpf: {
      type: DataTypes.STRING(15),
      allowNull: false,
      unique: true
    },
  },
  {
    timestamps: true
  }
)
