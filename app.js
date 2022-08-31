const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.set('view engine', 'ejs');


app.use(express.urlencoded({extended: false}))
app.use(express.json())




//routes 
app.use(require('./routes/index.js'))
app.use(require('./routes/login.js'))
app.use(require('./routes/userInformation.js'))
app.use(require('./routes/nationalParks.js'))


app.listen(port, () => {
    console.log(`listening on Port ${port}`);
})