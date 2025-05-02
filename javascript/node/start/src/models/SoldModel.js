import { DataTypes } from 'sequelize'
import { sequelize } from '../config/postgres.js'
import { ClientModel } from './ClientModel.js'
import { BookModel } from './BookModel.js'

export const SoldModel = sequelize.define(
  'solds', 

  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },

    dateSold: {
      field: 'date_sold',
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW()
    },

    bookId: {
      field: 'client_id',
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        key: 'id',
        model: ClientModel
      }
    },

    clientId: {
      field: 'book_id',
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        key: 'id',
        model: BookModel
      }
    }
  },
  {
    timestamps: true
  }
)
