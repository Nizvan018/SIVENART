import express, {Application} from 'express';
import path from 'path';

// Importing routes:
import indexRoutes from './routes/index.router';
import loginRoutes from './routes/login.router';

const app:Application = express();

// Settings:
app.set('port', process.env.PORT || 4000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middlewares:
app.use(express.json());
app.use(express.urlencoded( { extended: false } ));

// Routes:
app.use('/', indexRoutes);
app.use('/login', loginRoutes);

// Static files:
app.use(express.static(path.join(__dirname, 'public')));

// Starting the server:
export default app;