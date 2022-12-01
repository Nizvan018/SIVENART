import express, {Application} from 'express';
// import morgan from 'morgan';
import path from 'path';
import dotenv from 'dotenv';

import expressSession from "./middlewares/express-session.middleware";

dotenv.config();

// Importing routes:
import indexRoutes from './routes/index.router';
import loginRoutes from './routes/login.router';
import singinRoutes from './routes/singin.routes';
import registerRoutes from './routes/register.router';
import productsRoutes from './routes/products.router';

const app:Application = express();

// Settings:
app.set('port', process.env.PORT || 4000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middlewares:


// app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded( { extended: true } ));
app.use(expressSession);

// Routes:
app.use('/', indexRoutes);
app.use('/login', loginRoutes);
app.use('/singin', singinRoutes);
app.use('/register', registerRoutes);
app.use('/products', productsRoutes);

// Static files:
app.use(express.static(path.join(__dirname, 'public')));

// Starting the server:
export default app;