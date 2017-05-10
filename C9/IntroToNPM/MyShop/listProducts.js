var faker = require('faker');

for(var i = 0; i < 10; i++) {
    console.log("Product Name: " + faker.commerce.productName());
    console.log("Price: $" + faker.commerce.price());
}