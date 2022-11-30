import { DataType, DataTypes } from "sequelize";
import { sequelize } from "../database/database.config";
import { taller } from "./taller";

export const artesano = sequelize.define('artesano', {
    idClientEsp: {
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
    timestamps: true,
})

artesano.hasOne(taller, {
    foreignKey: 'idArtesano',
    sourceKey: 'idClientEsp'
});

taller.belongsTo(artesano, {
    foreignKey: 'idArtesano',
    targetKey: 'idClientEsp'
})