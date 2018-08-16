/**
 * Created by Makeev Evgeny on 17.08.18.
 */
import Express from 'express';
const app = new Express();

app.set('port', 3000);

app.use((req, res) => {
  res.type('text/plain');
  res.status(404);
  res.send('404 - page not found');
});

app.use((err, req, res) => {
  console.error(err.stack);
  res.type('text/plain');
  res.status(500);
  res.send('500 server mistake');
});

export default app;