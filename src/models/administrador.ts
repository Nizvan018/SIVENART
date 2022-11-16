import { DataType, DataTypes } from "sequelize";
import { sequelize } from "../database/database.config";

export const administrador = sequelize.define('administrador', {
    idUser: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
    },
    avatar: {
        type: DataTypes.STRING,
        allowNull: true,    
    },
}, {
    timestamps: false,
})