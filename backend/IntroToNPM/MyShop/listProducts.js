var faker = require('faker');

for(var i = 1; i <= 10; i++){
	var randomProductName = faker.commerce.productName();
	var randomProductPrice = faker.commerce.price();
	console.log("Product Name " + i + ": " + randomProductName + " - Product Price " + i + ": " + randomProductPrice);
}