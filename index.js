const express = require('express');
const body_parser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(body_parser.urlencoded({extended: false}));
app.use(body_parser.json());
app.use(cors());

app.get('/conver', convert_reaction)

app.listen(process.env.PORT | 3000, ()=>{
    console.log(`Listenin on port ${process.env.PORT | 3000}`);
})