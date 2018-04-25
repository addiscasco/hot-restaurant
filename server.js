var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

require(path.join(__dirname, 'apiRoutes.js'))(app);
require(path.join(__dirname, 'htmlRoutes.js'))(app);

app.listen(process.env.PORT || 3000, function(){
    console.log(`Server listening on ${(process.env.PORT||3000)}`)
});