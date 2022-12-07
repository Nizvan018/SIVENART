import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.config";
import { orden_detalle } from "./ventas/detalle_orden";

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
        type: DataTypes.STRING,
    },
    disponibilidad: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
    },
})

producto.hasMany(orden_detalle, {
    foreignKey: 'idProducto',
    sourceKey: 'codigo'
});

orden_detalle.belongsTo(producto, {
    foreignKey: 'idProducto',
    targetKey: 'codigo'
});