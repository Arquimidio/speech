const express = require('express');
const app = express();
const path = require('path');
const mainRounter = require('./routes/mainRouter');

app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.use(mainRounter);

app.listen(3000, () => console.log('Listening at 3000'));