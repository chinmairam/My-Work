var express = require('epress');
  var app = express();
app.set('/view engine', 'ejs');
app.use('/assts',epress.static('stuff'));
app.get('/function(req, res) {
res.render('index');
});
app.get('/contact', function(req, res) {
conspole.log(req.query);
res.render('contact');
});
