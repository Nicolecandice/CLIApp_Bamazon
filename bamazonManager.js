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

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  
//------------------------------------------------------------
// Prompt user to select meun option.
prompt.start();

  console.log("Meun");
  console.log("--------------------")
  console.log("menu option")
  console.log ("1. view  Product for sale");
  console.log("2. View Low Inventory");
  console.log("3. Add to Inventory");
  console.log("4. Add New Product");
  
  prompt.get("slectedMeun",function (err,res) {

    // Switch case options
    var selectedMenu = parseInt(res.selectedMenu);

    switch(selectedMenu) {
      case 1:
      console.log('\nView Products for sale...')
      // note thta this function uses a callback
      viewProductsSale(function() {});
      //end scrpition/connection
      connection.end();
      break;

      case 2:
      console.log('\nView low inventiory...');
      wiewLowInventiory();
      connection.end();
      break;

      case 3:
      console.log("Add to inventory...");
      addInventory();
      break;

      case 4:
      console.log("Add New Product");
      addNewProduct();
      break;
    }

  });

  });
  
  //===================Function for the switch case=========================================

  // Call back function for the View Products for Sale
  function viewProductsSale(callback) {

    connection.query("SELECT * FROM Products", function(err,res) {})
    
    if(err) throw err;

    console.log("Total Inventory...\n");
    
    // Table Header
    console.log("ID    |    Product Name    |    Department Name   | Price   | In Stock");
    console.log("----------------------------------------------------------------------")

     // loop through database and display all items.
     for (var i = 0; i < res.length; i++) {

      // convert to string
      var item_ID = res[i].itemID + '';
      itemID = (" ID ", item_ID);

      var name = res[i].productName + '';
      name = (" ProductName ", name);

      var name = res[i].departmentName + '';
      name = (" departmentName ", name);

      var price = '$' + res[i].price.toFixed(2) + '';
      price = (" Price (products on sale)", price + '');

      var quqntity = res[i].stockQuantity  + " ";

      // Log table entry
      console.log(item_ID + '|' + productname + '|' + departmentName + '|' + price  + '|'  + quqntity);
     }
      callback();
  
    



  


