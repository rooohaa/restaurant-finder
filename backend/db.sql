CREATE TABLE restaurants (
   id SERIAL PRIMARY KEY,
   name VARCHAR(50) NOT NULL,
   location VARCHAR(50) NOT NULL,
   price_range VARCHAR(50) NOT NULL,
);