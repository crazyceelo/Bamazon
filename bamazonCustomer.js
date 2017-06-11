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

function loadTable(){
    connection.query("SELECT * FROM products", function (error, results, fields){
        var table = new Table({
            head: [fields[0].name, fields[1].name, fields[2].name, fields[3].name, fields[4].name],
            colWidths: [9, 22, 22, 9, 15]
        });

        for (var i = 0; i < results.length; i++){
            table.push([results[i].item_id, results[i].product_name, results[i].department_name, results[i].price, results[i].stock_quantity]);
        }
        console.log(table.toString());
    });
}

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
    ]).then(function(answer){
        connection.query("SELECT stock_quantity FROM products WHERE ?", [{
            item_id: answer.id
        }], function(err, res){
            var stockUpdate = res[0].stock_quantity - answer.quantity;

            if (answer.quantity >= res[0].stock_quantity || answer.quantity <= 0){
                console.log("\ninvalid input");
                setTimeout(loadTable, 2000);
                setTimeout(run, 2500);
            }

            else {
                connection.query("UPDATE products SET ? WHERE ?", [{
                stock_quantity: stockUpdate
                },
                {
                    item_id: answer.id
                }])
                console.log("purchase Successfull!")
                setTimeout(loadTable, 2000);
                setTimeout(run, 2500);
            }
        });
    })
}
loadTable();
setTimeout(run, 500);