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
  queryAllSaleProducts();
});

//Display all items available for sale

function queryAllSaleProducts() {
  connection.query("SELECT * FROM products", function (err, res) {

    // display errors
    if (err) throw err;
    
    // message to user
    console.log('Items on sale...\n');

    console.log('ID | Product Name | Department Name | Price  |In Stock');
    console.log('------------------------------------------------------')

    // loop through database and display all items.
    for (var i = 0; i < res.length; i++) {

      // convert to string
      var itemID = res[i].itemID + '';
      itemID = (" ID ", itemID);

      var productName = res[i].productName + '';
      productName = (" ProductName ", productName);

      var departmentName = res[i].departmentName + '';
      departmentName = (" DepartmentName ", departmentName);

      var price = '$' + res[i].price.toFixed(2) + '';
      price = (" Price ", price + '');

      var stockQuantity = res[i].stockQuantity + '';

      // Log table entry
      console.log(itemID + '|' + productName + '|' +  departmentName + '|' + price + '|' + stockQuantity);
    }
 
    //----------------------------------------------------------------------------------
  prompt.start();
         console.log("\nWhich item(ID) will you like to purchase?");
         prompt.get(["itemID"]), function (err, res) {

          // Display item(ID) selected
          var itemID = res.itemID;
          console.log("ItemID selected "  +  itemID  + '.');
          //-------------------------------------------------------------------
       
         console.log("\nHow many items will you like to purchase?");
         prompt.get(["itemIDQuantity"]), function (err, res) {

          // Display number of item(s) selected
          var itemIDQuantity = res.itemIDQuantity;
          console.log("You have selected " + itemIDQuantity);
      
     //the application has to check if store has enough product to meet customer request
     connection.query("SELECT stockQuantity FROM products WHERE ?" ,[{itemID: itemIDQuantity}], function (err, res) {
      // Error handler
     if (err) throw err;

         if(res[0] == undefined) {
          console.log( "Sorry... item ID not found" +  itemIDQuantity + '');
          connection.end(); // end of scrpit connection
         }
        

         //User ID validation and comparison of bamazon Inventory with user Quantity
         else{ var bamazonQuantity = res[0].stockQuantity;
          
          //Sufficient Inventory
          if(bamazonQuantity >= itemIDQuantity) {

    
       // update mysql database with reduce inventory
         var newInventory = parseInt(bamazonQuantity) - parseInt(itemIDQuantity);
         connection.query('UPDATE Products SET? WHERE?', [{
         stockQuantity: newInventory
       }, {
         itemID: itemIDQuantity
        }], function (err, res) {
        if (err) throw err;
       });

     // Display customer purchase total
   var cusTotal;
    connection.query('SELECT Price FROM Products WHERE ?', [{
    itemID: itemIDQuantity
    }], function (err, res) {
      var purchasePrice = result[0].price;
     cusTotal = itemIDQuantity * purchasePrice.tofixed(2);
     console.log('\n Customer total is $' + cusTotal + '.');
    });
  
  }

     else{ // Insufficient Inventory
       console.log("Sorry... item(s) in stock is: " + bamazonQuantity + "Order cancelled.");
       connection.end();

     }

     // Result displays 
    

    
