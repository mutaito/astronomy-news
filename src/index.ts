import express from 'express';
import exphbs from 'express-handlebars';
import methodOverride from 'method-override';

import path from 'path';
// imports Routes
import {about, telescopes, space} from './routes/index';

const app = express();
require('./database');

// SETTINGS
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));
//SETTING HANDLEBARS
app.engine('.hbs', exphbs({
    extname: '.hbs',
    defaultLayout:'main',//layout/main,
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    helpers: require('./lib/helpers')
}));
app.set('view engine', '.hbs');

// MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride());
// ROUTES
app.use('/', about);
app.use('/telescopes', telescopes);
app.use('/space', space);
// STATIC FILES
app.use(express.static(path.join(__dirname, 'public')));
//SERVER
app.listen(app.get('port'), () => {
    console.log(`Server running on port ${app.get('port')}`);
})