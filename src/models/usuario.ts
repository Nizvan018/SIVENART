import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.config";
import { persona } from "./persona"

export const usuario = sequelize.define('usuario', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    rol: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    timestamps: false,
});

usuario.hasOne(persona, {
    foreignKey: 'idUser',
    sourceKey: 'id'
});

persona.belongsTo(usuario, {
    foreignKey: 'idUser',
    targetKey: 'id',
});