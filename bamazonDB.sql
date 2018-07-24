-- Drops the bamazonDB if it exists currently --
DROP DATABASE IF EXISTS bamazonDB;

-- This will creates the "bamazonDB" database --
CREATE DATABASE bamazonDB;

-- Use will makes it so that all of the following code will affect bamazonDB --
USE bamazonDB;

-- the table "products" within bamazonDB --
CREATE TABLE products(
  item_id INT AUTO_INCREMENT NOT NULL,
  product_name VARCHAR(45) NOT NULL,
  product_sales DECIMAL(10,2) DEFAULT 0,
  department_name VARCHAR(45) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  stock_quantity INT(10) NOT NULL,
  primary key(item_id)
);

SELECT * FROM products;

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES  ("FORTNITE", "Video Games", 59.99, 200),
  ("PokeMon", "Video Games", 59.99, 200),
  ("Ice tea", "Food and Drink", 24.50, 50),
  ("Hat", "Apparel", 75.00, 5),
  ("French Terry Straight Leg Pant", "Apparel", 54.25, 35),
  ("Sunscreen", "Necessities", 42.42, 42),
  ("Mamma Mia! Here We Go Again", "Films", 15.00, 25),
  ("High School Musical1 4", "Films", 25.50, 57),
  ("Monopoly", "Board Games", 30.50, 35),
  ("Yahtzee", "Board Games", 19.95, 23);

  CREATE TABLE departments(
  department_id INT AUTO_INCREMENT NOT NULL,
  department_name VARCHAR(45) NOT NULL,
  over_head_costs DECIMAL(10,2) NOT NULL,
  primary key(department_id)
);

SELECT * FROM departments;

INSERT INTO departments (department_name, over_head_costs)
VALUES ("Video Games", 200),
  ("Food and Drink", 100),
  ("Apparel", 50),
  ("Necessities", 300),
  ("Films", 35),
  ("Board Games", 0);

    