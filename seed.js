require('dotenv').config();
require('./config/database');

const Product = require ('./models/product');

(async function() {

    await Category.deleteMany({});
    const categories = await Category.create([

    ]);