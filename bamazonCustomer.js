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

    console.log('ID | Product_Name | Price (products on sale)');

    console.log('--------------------------------------------')

    // loop through database and display all items.
    for (var i = 0; i < res.length; i++) {

      // convert to string
      var item_ID = res[i].itemID + '';
      itemID = (" ID ", item_ID);

      var name = res[i].productName + '';
      name = (" Product_Name ", name);

      var price = '$' + res[i].price.toFixed(2) + '';
      price = (" Price (products on sale)", price + '');

      // Log table entry
      console.log(item_ID + '|' + name + '|' +  price);
    }
    //----------------------------------------------------------------------------------
  prompt.start();
         console.log("\nWhich item(ID) will you like to purchase?");
         prompt.get(["itemID"]), function (err, res) {

          // Display item(ID) selected
          var itemID = res.itemID;
          console.log("ItemID" + '.');
          //-------------------------------------------------------------------

         console.log("\nHow many items will you like to purchase?");
         prompt.get(["itemIDQuantity"]), function (err, res) {

          // Display number of item(s) selected
          var itemIDQuantity = res.itemIDQuantity;
          console.log(" itemIDQuantity  selected is"+ '.');
         }
        }

     //the application has to check if store has enough product to meet customer request
     connection.query('SELECT stockQuantity FROM products WHERE ?' ,[{itemID: itemIDQuantity}], function (err, res) {
      // Error handler
     if (err) throw err;

         var bamazonQuantity = res[0].StockQuantity;
         if(bamazonQuantity <= itemIDQuantity){
          console.log('Sorry products out of stock' + bamazonQuantity + 'for these items order Cancelled.');
          connection.end(); // end of scrpit connection
         }
    
      // update mysql database with new inventory
      else {

        var newInventory = parseInt(bamazonQuantity) + parseInt(itemIDQuantity);
         connection.query('UPDATE Products SET? WHERE?', [{
         stockQuantity: newInventory
       }, {
         itemID: itemIDQuantity
        }], function (err, res) {
        if (err) throw err;
       });
      }

     function updateProducts() {
     console.log('Updating  products quantities...\n');
     var query = connection.query(
       'UPDATE products SET ?', [{
           quantity: 175
         },
         {
           Product_Name: ""
         }
       ],
      function (err, res) {
         console.log(res.affectedRows + "products updated!\n");
        // Call updatedProduct AFTER the UPDATE completes
         updateProducts();

        // log the query being run
         console.log(query.sql);
       });
   }

   var cusTotal;
   connection.query('SELECT Price FROM Products WHERE ?', [{
    itemID: itemIDQuantity
   }], function (err, res) {
     var purchasePrice = result[0].price;
    cusTotal = itemIDQuantity * purchasePrice.tofixed(2);
     console.log('\n Customer total is $' + cusTotal + '.');
     });
    