var path = require("path");

var tableData = require(path.join(__dirname, 'data/tableData'));

module.exports = function(app){

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "public/home.html"));
    
});

app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "public/reserve.html"));
});
 
app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "public/tables.html"));
    
});

app.post("/reserve", function(req, res){ 
    var newCustomer = req.body;

    tableData.push(newCustomer)
    console.log(newCustomer);
    
    res.json(newCustomer)

})
}


