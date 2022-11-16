import { DataType, DataTypes } from "sequelize";
import { sequelize } from "../database/database.config";

export const artesano = sequelize.define('artesano', {
    idUser: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
    },
    avatar: {
        type: DataTypes.STRING,
        allowNull: true,    
    },
    puesto: {
        type: DataTypes.STRING,
        allowNull: true,
    },
}, {
    timestamps: false,
})