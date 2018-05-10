-- Drops the bamazonDB if it exists currently --
DROP DATABASE IF EXISTS bamazonDB;

-- Creates the "bamazonDB" database --
CREATE DATABASE bamazonDB;

-- Makes it so all of the following code will affect bamazonDB --
USE bamazonDB;

-- Creates the table "products" within bamazonDB --
CREATE TABLE products(
    -- Creates a numeric column called "id" which will automatically increment its default value as we create new rows. --
    item_id INTEGER (11) AUTO_INCREMENT NOT NULL,
    -- Makes a string column called "product_name" which cannot contain null --
    product_name VARCHAR(45)NULL,
     -- Makes a string column called "department_name" which cannot contain null --
    department_name VARCHAR(45)NULL,
    --Make a number coloumn called "price" which contain null.
    price DECIMAL(10,2) NULL,
    -- Makes an numeric column called "stock_Quantity" --
    stock_Quantity INTEGER NULL,
    PRIMARY KEY(id)
);

