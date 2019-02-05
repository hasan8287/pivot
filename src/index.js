require('dotenv').config();
const express = require('express');

const route = require('./order/routes');

const app = express();

// eslint-disable-next-line no-path-concat
app.set('views', `${__dirname}/views`);
app.use(express.static(`${__dirname}/../public`));
app.set('view engine', 'pug');
app.use(route);

app.listen(process.env.PORT, process.env.HOST, () => {
  // eslint-disable-next-line no-console
  console.log(`listening on port ${process.env.HOST}:${process.env.PORT}!`);
});
