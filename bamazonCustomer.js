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
    console.log('---------------------------------------------------------------')


    // loop through database for sale's items
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

  });

}
  // // The App prompt user this massages
  // prompt.start();

  // // Customer placed order
  // prompt.get("buy_itemID", function (err, res) {

  //   // Display ID and Quantity selected
  //   var buy_itemID = res.buy_itemID;
  //   message('select product ID')
  //   console.log('Order selected is ' + buy_itemID + '.');

  //   var itemIDQuantity = res.itemID_Quantity;
  //   message('How many units of the product that you would like to buy ')
  //   console.log('Order amount selected is ' + '.');


    // the application has to check if store has enough product to meet customer request
  //   connection.query('SELECT stockQuantity FROM products where ?' {
  //     itemID: buy_itemID
  //    function (err, res) {
  //     // Error handler
  //     if (err) throw (err);

  //     var bamazonQuantity = res.StockQuantity;
  //     //insufficient quantity
  //     if (bamazonQuantity < StockQuantity) {
  //       console.log('Sorry products out of stock' + bamazonQuantity + 'for these items order Cancelled.')
  //     } else(bamazonQuantity >= StockQunantity)
  //     // update mysql database with new inventory

  //     var newInventory = parseInt(bamazonQuantity) + parseInt(buyid_item);
  //     connection.query('UPDATE Products SET? WHERE?', [{
  //       StockQuantity: newInventory
  //     }, {
  //       item_ID: buy_itemID
  //     }], function (err, res) {
  //       if (err) throw err;
  //     });

  //   });
   });


  function updateProducts() {
    console.log('Updating  products quantities...\n');
    var query = connection.query(
      'UPDATE products SET ?', [{
          quantity: 175
        },
        {
          Product_Name: "dress"
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

  // var cusTotal;
  // connection.query('SELECT Price FROM Products WHERE ?', [{
  //   itemID: buy_itemID
  // }], function (err, res) {
  //   var purchasePrice = result[0].price;
  //   cusTotal = buyItemQuantity * purchasePrice.tofixed(2);
  //   console.log('\n Customer total is $' + cusTotal + '.');
  // });