// Dependencies
// Input validation package
// https://www.npmjs.com/package/validator
const validator = require('validator');

// Get all products via the repository
// return products
let getProducts = async () => {
    let products = "All Products"
    return products;
};

// Get product by id
// Validate input
// return product
let getProductById = async (productId) => {
    let product;

    // Validate input using validator module
    // important as a bad input could crash the server or lead to an attack
    // appending + '' to numbers as the validator only works with strings
    if (!validator.isNumeric(productId + '', { no_symbols: true, allow_negatives: false })) {
        console.log("getProducts service error: invalid id parameter");
        return "invalid parameter";
    }

    // get product (if validation passed)
    product = `product with id: ${productId}`

    return product;
};

// Get products for a particular category (by cat id)
// Validate input
// return products
let getProductsByCatId = async(categoryId) => {
    let products;
    // Validate input - important as a bad input could crash the server or lead to an attack
    // appending + '' to numbers as the validator only works with strings
    if (!validator.isNumeric(categoryId + '', { no_symbols: true, allow_negatives: false })) {
        console.log("getProductsByCatId service error: invalid id parameter");
        return "invalid parameter";
    }
    // get products (if validation passed)
    products = `products in the category with id: ${categoryId}`;
    return products;
};



// Insert a new product
// This function accepts product data as a paramter from the controller.
let createProduct = async (product) => {

}

// product update service
let updateProduct = async (product) => {

}

let deleteProduct = async (productId) => {

}

// Module exports
// expose these functions
module.exports = {
    getProducts,
    getProductById,
    getProductsByCatId,
    createProduct,
    updateProduct,
    deleteProduct
};