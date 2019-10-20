require('./config/config');

const express = require('express');
const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get('/user', (req, res) => {
    res.json('get');
});

app.post('/user', (req, res) => {

    let body = req.body;

    if( req.body === undefined){

    }else{
        res.json({
            body
        });
    }

});

app.put('/user/:id', (req, res) => {
    
    let id = req.params.id;
    
    res.json({
        id
    });
});


app.listen(process.env.PORT);