require('./config/config');

const express = require('express');
const mongoose = require('mongoose');



const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use( require( './routes/users'));


//Conexión a BaseDatos
mongoose.connect(process.env.URLDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true, 
    useCreateIndex: true
}, (err) => {
    if (err) throw err;
    console.log('DDBB ONLINE');
}).catch (error => console.log(error));




app.listen(process.env.PORT);