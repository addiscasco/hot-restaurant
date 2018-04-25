var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var tableData = require(path.join(__dirname, 'data/tableData'));

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require(path.join(__dirname, 'apiRoutes.js'))(app);
require(path.join(__dirname, 'htmlRoutes.js'))(app);

app.listen(process.env.PORT || 3000, function(){
    console.log(`Server listening on ${(process.env.PORT||3000)}`)
});
