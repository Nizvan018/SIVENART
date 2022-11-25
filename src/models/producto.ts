import { DataType, DataTypes } from "sequelize";
import { sequelize } from "../database/database.config";
import { taller } from "./taller";

export const producto = sequelize.define('producto', {
    codigo: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    stock: {
        type: DataTypes.INTEGER,
    },
    foto: {
        type: DataTypes.STRING
    },
    descripcion: {
        type: DataTypes.STRING
    },
    precio: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    categoria: {
        type: DataTypes.STRING
    }
})