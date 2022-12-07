import app from './app';
import { sequelize } from './database/database.config';

import './models/usuario'
import './models/administrador.ts'
import './models/artesano.ts'
import './models/taller.ts'
import './models/persona'
import './models/producto'
import './models/ventas/orden'
import './models/ventas/detalle_orden'
import './models/cliente'


async function main() {
    sequelize
        .sync({ alter:true })
        .then(() => {})
        .catch((err) => console.log(err));

    await app.listen(app.get('port'));
    console.log('Server running in http ://localhost:' + app.get('port'));
}

main();