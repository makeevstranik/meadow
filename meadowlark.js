/**
 * Created by Makeev Evgeny on 17.08.18.
 */
const app = require('./server');
// import app from './server';
console.log('IN MEADOWLARK', module.parent);
app.listen(app.get('port'), () => console.log(`running express in http://localhost:${app.get('port')} press CTRL+C to quit`));
