import { DataTypes } from "sequelize";
import { sequelize } from "../../database/database.config";
import { orden_detalle } from "./detalle_orden";

export const orden = sequelize.define('orden', {
    idOrden: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
    },
    status: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
    },
    total: {
        type: DataTypes.FLOAT
    },
}, {
    timestamps: true,
})

orden.hasOne(orden_detalle, {
    foreignKey: 'idOrden',
    sourceKey: 'idOrden'
});

orden_detalle.belongsTo(orden, {
    foreignKey: 'idOrden',
    targetKey: 'idOrden'
});