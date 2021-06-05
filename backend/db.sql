CREATE TABLE restaurants (
   id SERIAL PRIMARY KEY,
   name VARCHAR(50) NOT NULL,
   location VARCHAR(50) NOT NULL,
   price_range VARCHAR(50) NOT NULL,
);

CREATE TABLE reviews (
   id SERIAL PRIMARY KEY,
   name VARCHAR(50) NOT NULL,
   review TEXT NOT NULL,
   rating INT CHECK(rating > 0 AND rating <= 5),
   restaurant_id INT NOT NULL REFERENCES restaurants(id) 
);