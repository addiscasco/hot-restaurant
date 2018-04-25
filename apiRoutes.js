var path = require('path');

var tableData = require(path.join(__dirname, 'data/tableData.js'));
var waitingList = require(path.join(__dirname, 'data/waitinglistData.js'));

module.exports = function(app){
    app.get('/api/tables', function(req, res){
        return res.json(tableData);
    })

    app.get('/api/waitinglist', function(req, res){
        return res.json(waitingList);
    })
};