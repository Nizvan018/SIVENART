import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.config";
import { artesano } from "./artesano";

export const taller = sequelize.define('taller', {
    idTaller: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    avatar: {
        type: DataTypes.STRING,
        allowNull: true
    },
    descripcion: {
        type: DataTypes.STRING,
        allowNull: true
    },
    calle: {
        type: DataTypes.STRING,
        allowNull: false
    },
    numero: {
        type: DataTypes.STRING,
        allowNull: false
    },
    colonia: {
        type: DataTypes.STRING,
        allowNull: false
    },
    codigo_postal: {
        type: DataTypes.STRING,
        allowNull: false
    },
    localidad: {
        type: DataTypes.STRING,
        allowNull: false
    },
    entidad: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    timestamps: false,
})