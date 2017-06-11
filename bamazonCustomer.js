var inquirer = require("inquirer");
var mysql = require("mysql");
var Table = require("cli-table");

var connection = mysql.createConnection({
    host : "127.0.0.1",
    port: 3306,
    user : "root",
    password : "root",
    database : "bamazon_db"
})

connection.connect();

connection.query("SELECT * FROM products", function (error, results, fields){
    var table = new Table({
        head: [fields[0].name, fields[1].name, fields[2].name, fields[3].name, fields[4].name],
        colWidths: [9, 22, 22, 9, 15]
    });

    // table.push([results[0].item_id, results[0].product_name, results[0].department_name, results[0].price, results[0].stock_quantity]);
    for (var i = 0; i < results.length; i++){
        table.push([results[i].item_id, results[i].product_name, results[i].department_name, results[i].price, results[i].stock_quantity]);
    }
    console.log(table.toString());
});

connection.end();

function run(){
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
        results.stock_quantity -= answers.stock_quantity;
        // console.log(answers.id);
        // console.log(answers.quantity);
        
        connection.query("UPDATE products SET stock_quantity="+results.stock_quantity + "WHERE id=" + answers.id);

        // connection.query("SELECT * FROM products", function (error, results, fields){
        //     console.log(fields[0].name,"  "+ fields[1].name,"  "+  fields[2].name,"  "+  fields[3].name,"  "+  fields[4].name);
        //     if (error) {
        //         throw error;
        //     }

        //     for (var i = 0; i < results.length; i++){
        //         console.log(results[i].item_id, results[i].product_name, results[i].department_name, results[i].price, results[i].stock_quantity);
        //     }
            
        // });
    })
}

setTimeout(run, 500);