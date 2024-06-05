const express = require('express');
const app = express();



app.use((req, res, next) => {
    console.log('Time:', Date.now())
    next();
});

app.get('/', (req, res) => {
  res.send('Hello World')
});
app.get('/profile', (req, res, next) => {
  return next(new Error('Something went wrong!'));
});

 app.use ((err, req, res, next) => {
    console.log(err.stack);
    res.status(500).send('Something broke!')
 });



app.listen(3000);