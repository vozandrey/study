const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const path = require('path');
const routes = require('./routes/main');

const config = require('./config/config');

const app = express();

app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

app.use(cors());

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

async function start(){
    try {   
        await mongoose.connect(config.db, config.dbOptions).then(
            () => { console.log('Успешное подключение к БД'); }
        );

        app.listen(config.PORT, () => {
            console.log('Сервер запущен на порту: ' + config.PORT);
        });
    } catch (error) {
        console.log(error);
    }
}


start();