const express = require('express');
const dbConnect = require('./config/db');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

const port = process.env.PORT || 8000;

//dbConnect();



app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res) => {
    res.json ({info: 'birthmark'})
})


app.listen(port, ()=>{
    console.log(`App running successfully on port ${port} `)
})