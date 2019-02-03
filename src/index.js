require('dotenv').config();
const express = require('express');

const route = require('./order/routes');

const app = express();

app.set('views', __dirname + '/views')
app.set('view engine', 'pug');
app.use(route);

app.listen(process.env.PORT, process.env.HOST, () => {
  console.log(`listening on port ${process.env.HOST}:${process.env.PORT}!`)
})
