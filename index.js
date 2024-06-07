const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  fs.readdir(`./files`, (err, files) => {
    res.render('index', {files: files})
  });
  
});
app.get('/file/:filename', (req, res) => {
  fs.readFile(`./files/${req.params.filename}`, "utf-8", (err, filedata) => {
    res.render("show", {filename: req.params.filename, filedata: filedata})
  })
  
});

app.post('/create', (req, res) => {
  fs.writeFile(`./files/${req.body.title.split(' ').join('-')}.txt`, req.body.details, (err) => {
    if (err) {
      console.log(err);
    } else {
      res.redirect('/');
    }
  })
  });
  


// app.get('/profile/:id', (req, res) => {
//   req.params.id
//   res.send(req.params.id)
  
// });




app.listen(3000);