var prompt = require("prompt");

var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "password",
  database: "bamazonDB"
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);

  //------------------------------------------------------------
//   // Prompt user to select meun option.
//   prompt.start();

//   console.log("Meun");
//   console.log("--------------------")
//   console.log("menu option")
//   console.log("1. view  Product for sale");
//   console.log("2. View Low Inventory");
//   console.log("3. Add to Inventory");
//   console.log("4. Add New Product");

//   prompt.get("selectedMeun", function (err, res) {

//     // Switch case options
//     var selectedMenu = parseInt(res.selectedMenu);

//     switch (selectedMenu) {
//       case 1:
//         console.log('\nView Products for sale...')
//         // note thta this function uses a callback
//         viewProductsSale(function () {});
//         //end scrpition/connection
//         connection.end();
//         break;

//       case 2:
//         console.log('\nView low inventiory...');
//         wiewLowInventiory();
//         connection.end();
//         break;

//       case 3:
//         console.log("Add to inventory...");
//         addInventory();
//         break;

//       case 4:
//         console.log("Add New Product");
//         addNewProduct();
//         break;
//     }

//   });

// });

// //===================Function for the switch case=========================================

// // Call back function for the View Products for Sale
// function viewProductsSale(callback) {

//   connection.query("SELECT * FROM Products", function (err, res) {
    


//   if (err) throw err;

//   console.log("Total Inventory...\n");

//   // Table Header
//   console.log("ID    |    Product Name    |    Department Name   | Price   | In Stock");
//   console.log("----------------------------------------------------------------------")

//   // loop through database and display all items.
//   for (var i = 0; i < res.length; i++) {

//     // convert to string
//     var item_ID = res[i].itemID + '';
//     itemID = (" ID ", itemID);

//     var name = res[i].productName + '';
//     name = (" ProductName ", name);

//     var name = res[i].departmentName + '';
//     name = (" departmentName ", name);

//     var price = '$' + res[i].price.toFixed(2) + '';
//     price = (" Price (products on sale)", price + '');

//     var quqntity = res[i].stockQuantity + " ";

//     // Log table entry
//     console.log(itemID + '|' + productname + '|' + departmentName + '|' + price + '|' + quantity);
//   }

// })
//   callback();
//   //===============================================================================================

//   // Display all item in the database with inventory lower than 5.
//   function viewLowInventory() {

//     connection.query("SELECT * FROM Products WHERE stockQuantity < 5", function (err, res) {})

//     if (err) throw err;

//     console.log("Inventory for Items < 5 In Stock...\n");

//     // Table Header
//     console.log("ID    |    Product Name    |    Department Name   | Price   | In Stock");
//     console.log("----------------------------------------------------------------------")

//     // loop through database and display all items.
//     for (var i = 0; i < res.length; i++) {

//       // convert to string
//       var item_ID = res[i].itemID + '';
//       itemID = (" ID ", item_ID);

//       var name = res[i].productName + '';
//       name = (" ProductName ", name);

//       var name = res[i].departmentName + '';
//       name = (" departmentName ", name);

//       var price = '$' + res[i].price.toFixed(2) + '';
//       price = (" Price (products on sale)", price + '');

//       var quqntity = res[i].stockQuantity + " ";

//       // Log table entry
//       console.log(itemID + '|' + productname + '|' + departmentName + '|' + price + '|' + quantity);
//     }
//     //=========================================================================================================
//     // Add Inventory
//     function addInventory() {

//       // view function & call back 
//       viewProduct(function () {

//             // Restock item(s)
//             prompt.start();
//             console.log("\nList item(s) that need to be restock");
//             prompt.get("restockitemID"),
//               function (err, result) {

//                 // Display selected item(s)
//                 var restockitemID = res.restockitemID;
//                 console.log("Items(s) selected to be restock" + restockitemID + ".");
//               }
//             //Prompt for stock count
//             console.log("\nNumber of item(s) to be restock");
//             prompt.get("countRestock"),
//               function (err, res) {

//                 //Stock count reflected.
//                 var countRestock = result.countRestock;
//                 console.log("Item(s) selected to be restock" + restockitemID + "items.");
//                 // integer
//                 countRestock = parseInt(countRestock); {

//                   if(number.isInteger(countRestock)) {

//                     // Query item(s)

//                     connection.query("SELECT stockQuantity FROM Products WHERE ?", [{itemID:restockitemID}]), function(err, res){
                     
//                       // valid item(s) from the database
//                       if(res[0] == undefined){
//                         console.log("Invalid itemID" + restockitemID + '"')
//                         connection.end();        }
                        
//                       {
//                         var bamazonQuantity = res[0].stockQuantity;
//                         var newInventory = parseInt(bamazonQuantity) + parseInt(countRestock);

//                         //updated item(s)
//                         connectio.query("UPDATE Products SET ? WHERE ?", [{stockQuantity: newInventory}], [{itemID: restockitemID}], function(err, res) {
//                           if(err) throw err;

//                           console.log("\nInventory successfully updated")
//                           connection.end();
//                         });
//                       }
//       }
//       }
//       }
//       }
//       }
    