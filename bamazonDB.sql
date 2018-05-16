-- Drops the bamazonDB if it exists currently --
DROP DATABASE IF EXISTS bamazonDB;

-- This will creates the "bamazonDB" database --
CREATE DATABASE bamazonDB;

-- Use will makes it so that all of the following code will affect bamazonDB --
USE bamazonDB;

-- the table "products" within bamazonDB --
CREATE TABLE products(
    --  numeric column called "id" which will automatically increment its default value as we create new rows. --
itemID INTEGER  AUTO_INCREMENT PRIMARY KEY ,  
    --  string column called "product_name"  --
    productName VARCHAR(30),
     -- string column called "department_name" --
    departmentName VARCHAR(30),
    price DECIMAL(10, 2),
    stockQuantity INTEGER);

    -- /* Insert 10 Rows into your new table */ --
INSERT INTO products(productName, price, stockQuantity)
VALUES("kids & Baby", 12.50, 150), 
      ("sports", 25.00, 200),
      ("Books", 12.10, 125),
      ("Music", 11.50, 175),
      ("Gift Cards", 9.50, 75),
      ("Computers", 16.99, 135),
      ("Outdoors", 4.50, 100),
      ("Beauty", 14.65, 200),
      ("AppStore", 12.50, 150),
      ("Kindle", 12.50, 150)

      --===================================================================--

      CREATE TABLE departments(

    departmentID INTEGER AUTO_INCREMENT PRIMARY KEY,
    departmentName VARCHAR (30),
    overHeadCost DECIMAL(10,2), 
    productSales DECIMAL(10,2),
    totalProfit DECIMAL(10,2)
    );

      



