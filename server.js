const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const url= 'mongodb+srv://newuser:parolala@cluster0.axtak.mongodb.net/cluster0?retryWrites=true&w=majority'

require('dotenv').config(); 

const app = express()
const port = 8080 

app.get('/myapp/', function(req, res){
    res.send("Hello from the root application URL");
});
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use('/login', require('./routes/login.js'))
app.use('/signup', require('./routes/signup.js'))
app.use(cors())
app.use(express.json())



const connectionParams={
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true 
}
mongoose.connect(url,connectionParams)
    .then( () => {
        console.log('Connected to database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. \n${err}`);
    })

app.listen(port, () => {
    console.log('Server is running on port ' + port)
})