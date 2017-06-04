var inquirer = require("inquirer");
var mysql = require("mysql");

var connection = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "root",
    database : "bamazon_db"
})

connection.connect();

connection.query("SELECT * FROM products", function (error, results, fields){
    console.log(fields[0].name,"  "+ fields[1].name,"  "+  fields[2].name,"  "+  fields[3].name,"  "+  fields[4].name);
    if (error) {
        throw error;
    }

    for (var i = 0; i < results.length; i++){
        console.log(results[i].item_id, results[i].product_name, results[i].department_name, results[i].price, results[i].stock_quantity);
    }
    
});

connection.end();

inquirer.prompt([
    {
        name: "id",
        message: "which ID are you looking to buy? "
    },
    {
        name: "quantity",
        message: "how many would you like to buy? "
    }
]).then(function(answers){
    console.log(answers.id);
    console.log(answers.quantity);
})