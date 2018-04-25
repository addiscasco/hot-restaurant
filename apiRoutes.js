var tableData = require('/data/tableData')

module.exports = function(app){
    app.get('/api/tables', function(req, res){
        return res.json(tableData);
    })
}