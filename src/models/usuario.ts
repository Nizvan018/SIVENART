import { DataType, DataTypes } from "sequelize";
import { sequelize } from "../database/database.config";
import { administrador } from "./administrador"
import { artesano } from "./artesano"

export const User = sequelize.define('usuario', {
    idUser: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    telefono: {
        type: DataTypes.STRING,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    primer_apellido: {
        type:DataTypes.STRING,
        allowNull: false,
    },
    segundo_apellido: {
        type:DataTypes.STRING,
        allowNull: false,
    }
}, {
    timestamps: false,
});

User.hasOne(administrador, {
    foreignKey: 'idUser',
    sourceKey: 'idUser'
});

User.hasOne(artesano, {
    foreignKey: 'idUser',
    sourceKey: 'idUser'
})

administrador.belongsTo(User,{
    foreignKey: 'idUser',
    targetKey: 'idUser'
}
);

artesano.belongsTo(User, {
    foreignKey: 'idUser',
    targetKey: 'idUser'
})
