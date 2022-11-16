import app from './app';
import { sequelize } from './database/database.config';

import './models/usuario.ts'
import './models/administrador.ts'
import './models/artesano.ts'
import './models/taller.ts'


async function main() {
    sequelize
        .sync({ alter: true })
        .then(() => {})
        .catch((err) => console.log(err));

    await app.listen(app.get('port'));
    console.log('Server running in http://localhost:' + app.get('port'));
}

main();