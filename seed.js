require('dotenv').config();
require('./config/database');

const Product = require ('./models/product');


(async function() {

    await Product.deleteMany({});
    const products = await Product.create([
        {name:'Ultimate Stylus kit', description:'This Kit includes Six adult/teen angled stylus: 121; 125; 135; 145; straight. Child size stylus 14 Straps are included with all styluses Less', price: 527, imageUrl:'https://i.imgur.com/ocGcf6C.jpg'},
    ]);
    console.log(products)
    process.exit();
})();