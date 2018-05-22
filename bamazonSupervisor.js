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
  

  prompt.start();
  console.log("Menu");
  console.log("Menu options");
  console.log("View product Sales by Department");
  console.log("Create New Department")

  prompt.get("selectedMeun", function (err, res) {

    // Switch case options
    var selectedMenu = parseInt(res.selectedMenu);

    switch (selectedMenu) {
      case 1:
        console.log("\nView Products Sales by Department")
        // note thta this function uses a callback
        viewSalesbyDept(function () {});
        //end scrpition/connection
        connection.end();
        break;

        case 2:
        console("Create New Department")
        connectio.end();
        break;
    }
  });

});

// function viewSalesbyDept() {
//   if (err) throw err;

//   connection.query("SELECT * FROM Departments", function (err, res) {})

//   console.log("View Products Sales by Department...\n");

//   // Table Header
//   console.log("Department ID   | Department Name | Over Head costs  | Product Sales   | Total Profit");
//   console.log("----------------------------------------------------------------------")

//   // loop through database and display all items.
//   for (var i = 0; i < res.length; i++) {

//     // convert to string
//     var DepartmentID = res[i].departmentID + '';
//     DepartmentID = ("department_id", departmentID);
 
//     var DepartmentName  = res[i].DepartmentName + '';
//         DepartmentName =  ("department_Name" ,departmentName);
// }

// // calculate on the fly using the difference between over head cost and product sales.

// var OverHeadCost = res[i].overHeadCost.toFixed(2);
// var ProductSales = res[i].productSales.toFixed(2);
// var TotalProfit = (parseFloat(overHeadCost) - (parseFloat(productSales)).tofixed);

//  // Log table entry
//  console.log(DepartmentID + '|' + DepartmentName + '|' + OverHeadcosts + '|' +  ProductSales + '|' + TotalProfit);
//  connection.end();
// }

// //======================================================

// //Prompt create New Departments
// function AddNewDept(){

//   prompt.start();
// console.log("\nNew Departments created");
// prompt.get("DepartmentName, OverHeadCost, TotalProfit"),
//   function (err, res) {

//     //add new departments
//     var DepartmentName = res.departmentName;
//     var OverHeadCost = res.OverHeadCost;
//     var TotalProfit = res.TotalProfit;
    
//             //updated item(s)
//             connectio.query("UPDATE Departments SET ?", {DepartmentName: departmentName,
//             OverHeadCost: OverHeadCost,
//             TotalProfit: TotalProfit } ,function(err, res) {
//               if(err) 

//               {
//                 console.log("\nSorry couldn't be updated, Please re-check update entered")
//               connection.end(); }

//           else {
//             console.log("\nInventory successfully updated")
//             connection.end();
//               }
//             }
//             )};
//           }
        
        

              
