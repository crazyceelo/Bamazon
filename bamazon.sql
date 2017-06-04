CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products(
	item_id INTEGER(11) AUTO_INCREMENT NOT NULL,
    product_name VARCHAR(30) NOT NULL,
    department_name VARCHAR(30),
    price INTEGER(10),
    stock_quantity INTEGER(10),
    PRIMARY KEY(item_id)
);

INSERT INTO products(item_id, product_name, department_name, price, stock_quantity)
VALUES(1, "iPad", "Mobile -electronics", 300, 100);

INSERT INTO products(item_id, product_name, department_name, price, stock_quantity)
VALUES(2, "iPad-mini", "Mobile-electronics", 100, 10);

INSERT INTO products(item_id, product_name, department_name, price, stock_quantity)
VALUES(3, "iPad-case-clear", "Accessories", 10, 400);

INSERT INTO products(item_id, product_name, department_name, price, stock_quantity)
VALUES(4, "Norton-Anti-Virus", "Software", 50, 40);

INSERT INTO products(item_id, product_name, department_name, price, stock_quantity)
VALUES(5, "Apple-TV", "Hardware", 349.99, 600);

INSERT INTO products(item_id, product_name, department_name, price, stock_quantity)
VALUES(6, "Apple-TV-remote", "Accessories", 40, 3);

INSERT INTO products(item_id, product_name, department_name, price, stock_quantity)
VALUES(7, "Logitech-headphones", "third-party-accessories", 60, 900);

INSERT INTO products(item_id, product_name, department_name, price, stock_quantity)
VALUES(8, "iTunes-card-20", "Digital cards", 20, 300);

INSERT INTO products(item_id, product_name, department_name, price, stock_quantity)
VALUES(9, "Apple-shirt-current", "Apparel", 5, 150);

INSERT INTO products(item_id, product_name, department_name, price, stock_quantity)
VALUES(10, "Apple-shirt-classic", "Apparel", 200, 1000);

SELECT * FROM products;