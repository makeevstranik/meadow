/*
 * Created by Makeev Evgeny on 17.08.18.
 */

//import Express from 'express';
//import Handlebars from 'express-handlebars';

const Express = require('express');
const Handlebars = require('express-handlebars');

// import morgan from 'morgan'; // logging lib from hexlet

const app = new Express();
const handlebars = Handlebars.create({ defaultLayout: 'main' });
// const logger = morgan('combined'); // logging lib from hexlet

console.log('handlebars: ------', handlebars.template);
app.engine('handlebars', handlebars.engine);
app.set('view engine', handlebars);

app.set('port', 3000);

// app.use(logger); // logging lib from hexlet

app.get('/', (req, res) => {
/*
  res.type('text/plain');
  res.status(200);
  res.send('Meadowlark Travel');
   // before using handlebars
   */
  res.render('layouts/home.handlebars');
});

app.get('/about', (req, res) => { // handle all in dir about : /about*
  res.render('layouts/about.handlebars');
});

app.use((req, res) => { // app.use - if there is not other handler
  res.status(404);
  res.render('layouts/404.handlebars');
});

app.use((err, req, res) => {
  console.error(err.stack);
  res.status(500);
  res.render('layouts/500.handlebar');
});

//export default app;
module.exports = app;
