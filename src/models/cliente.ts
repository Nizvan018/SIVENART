import { DataTypes, or } from "sequelize";
import { sequelize } from "../database/database.config";
import { orden } from "./ventas/orden";

export const cliente = sequelize.define('cliente', {
    idClientEsp: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
    },
    calle: {
        type: DataTypes.STRING,
        allowNull: false,    
    },
    numero: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    colonia: {
        type: DataTypes.STRING,
    },
    codigo_postal:{
        type: DataTypes.STRING,
    },
    localidad: {
        type: DataTypes.STRING,
    },
    entidad: {
        type: DataTypes.STRING
    },
}, {
    timestamps: true,
})

cliente.hasMany(orden, {
    foreignKey: 'idClientEsp',
    sourceKey: 'idClientEsp'
});

orden.belongsTo(cliente, {
    foreignKey: 'idClientEsp',
    targetKey: 'idClientEsp'
});

