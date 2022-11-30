import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.config";
import { administrador } from "./administrador"
import { artesano } from "./artesano"
import { cliente } from "./cliente"

export const persona = sequelize.define('persona', {
    idClient: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    telefono: {
        type: DataTypes.STRING,
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

persona.hasOne(administrador, {
    foreignKey: 'idClientEsp',
    sourceKey: 'idClient'
});

persona.hasOne(artesano, {
    foreignKey: 'idClientEsp',
    sourceKey: 'idClient'
})

administrador.belongsTo(persona,{
    foreignKey: 'idClientEsp',
    targetKey: 'idClient'
}
);

artesano.belongsTo(persona, {
    foreignKey: 'idClientEsp',
    targetKey: 'idClient'
})

persona.hasOne(cliente, {
    foreignKey: 'idClientEsp',
    sourceKey: 'idClient'
})

cliente.belongsTo(persona,{
    foreignKey: 'idClientEsp',
    targetKey: 'idClient'
}
);