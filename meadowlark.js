/**
 * Created by Makeev Evgeny on 17.08.18.
 */
//import app from './server';

const app = require('./server');

console.log('IN MEADOWLARK', module.parent);
app.listen(app.get('port'), () => console.log(`running express in http://localhost:${app.get('port')} press CTRL+C to quit`));
