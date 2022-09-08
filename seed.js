require('dotenv').config();
require('./config/database');

const Product = require ('./models/productSchema');

(async function() {

    await Category.deleteMany({});
    const categories = await Category.create([

    ]);