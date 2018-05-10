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
  queryAllSaleProducts();
});

//Display all items available for sale

function queryAllSaleProducts() {
    var query = connection.query("SELECT * FROM products WHERE id_item=?", ["sale"], function(err, res) {
        
        // display errors
        if(err) throw err;

        // message to user
        console.log( 'Items on sale...\n' );

        console.log('ID | Product_Name | Price (products on sale)');
        console.log('---------------------------------------------------------------')
    
    // loop through database for sale's items
    for (var i = 0; i < res.length; i++) {
        // convert to string
        var id_item = res[i].id_item +'';
        id_item = padtext(" ID ", id_item);

        var name = res[i].name +'';
        name = padtext(" Product_Name ", ProductName);

        var price = '$' +res[i].prices.toFixed(2) +'';
        price = padtext(" Price (products on sale)", PriceProductOnSale +'');

         // Log table entry
    console.log  (id_item + '|' + ProductName + '|' + PricesProductOnSale) ;  
    
  }
   // App prompt user massages
  prompt.start();
  message('What is the ID of product that you would like to buy ')
  message('How many units of the product that you would like to buy ')

  // Customer placed order
  prompt.get([buyid_item], function(err, res) {

    // Display ID and Quantity selected
    var buyid_item = result.buyid_item;
    console.log('Order selected is '   + buyid_item +'.');
  
    var id_itemQuantity = result.id_itemQuantity;
    console.log('Order amount selected is ' +'.');
  

  // the application has to check if store has enough product to meet customer request
  connection.query('SELECT stockQuantity FROM products where ?' [{id_item: buyid_item}], function(err, res) {
    // Error handler
    if (err) throw(err);

    var bamazonQuantity = res.StockQunantity;
    //insufficient quantity
    if( bamazonQuantity < StockQunantity) {
      console.log('Sorry products out of stock' + bamazonQuantiy + 'for these items order Cancelled.')
    }


    else(bamazonQuantity >= StockQunantity) {
      // update mysql database with new inventory

    var newInventory = parseInt(bamazonQuantity) + parseInt(buyid_item);
    connection.query('UPDATE Products SET? WHERE?', [{StockQuantity: newInventory}, {id_item: buyid_item}], function(err,res){
      if(err) throw err;
    });


function updateProducts(){
  console.log('Updating  products quantities...\n');
  var query = connection.query(
    'UPDATE products SET ?',
    [
{
      quantity: 175
    },
    {
      Product_Name: "dress"
    }
    ],
    function(err, res) {
      console.log(res.affectedRows + "products updated!\n");
      // Call updatedProduct AFTER the UPDATE completes
      updateProducts();
    }
  );
  // log the query being run
  console.log(query.sql);
}
var cusTotal;
connection.query('SELECT Price FROM Products WHERE ?', [{id_item: buyid_item}], function(err,res){
  var purchasePrice = result[0].price;
  cusTotal = buyItemQuantity*purchasePrice.tofixed(2);
  console.log('\n Customer total is $' + cusTotal + '.');
});
  }

  

