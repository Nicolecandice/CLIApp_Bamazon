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
VALUES("dress", 12.50, 150), 
      ("pant", 25.00, 200),
      ("shirt", 12.10, 125),
      ("shoe", 11.50, 175),
      ("hat", 9.50, 75),
      ("skirt", 16.99, 135),
      ("belt", 4.50, 100),
      ("tie", 14.65, 200),
      ("T-shirt", 12.50, 150),
      ("stocking", 12.50, 150)

      



