import { DataTypes, or } from "sequelize";
import { sequelize } from "../../database/database.config";

export const orden_detalle = sequelize.define('orden_detalle', {
    cantidad: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
}, {
    timestamps: true,
})

