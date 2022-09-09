require('dotenv').config();
require('./config/database');

const Product = require ('./models/product');


(async function() {

    await Product.deleteMany({});
    const products = await Product.create([
        {name:'Ultimate Stylus kit', description:'This Kit includes Six adult/teen angled stylus: 121; 125; 135; 145; straight. Child size stylus 14 Straps are included with all styluses Less', price: 527.00, imageUrl:'https://i.imgur.com/QuPImAb.png'},
        {name:'Adult/Teen Stylus Kit', description:'This Kit Includes: Five adult/teen angled stylus: 121; 125; 135; 145; Straight Straps included with all styluses', price: 462, imageUrl:'https://i.imgur.com/QuPImAb.png'},
        {name:'Child Size Stylus Angle 145', description:'This includes 1 set of child size straps and one tip.', price: 85.00, imageUrl:'https://i.imgur.com/QuPImAb.png'},
        {name:'Adult/Teen Stylus Angle 145', description:'This includes 1 set of Adult size straps and one tip.', price: 87.00, imageUrl:'https://i.imgur.com/QuPImAb.png'},
        {name:'Adult/Teen Stylus Angle 125', description:'This includes 1 set of Adult size straps and one tip.', price: 87.00, imageUrl:'https://i.imgur.com/QuPImAb.png'},
        {name:'Adult/Teen Stylus Angle 135', description:'This includes 1 set of Adult size straps and one tip.', price: 87.00, imageUrl:'https://i.imgur.com/QuPImAb.png'},
        {name:'Adult/Teen Stylus Angle 121', description:'This includes 1 set of Adult size straps and one tip.', price: 87.00, imageUrl:'https://i.imgur.com/QuPImAb.png'},
        {name:'Adult/Teen Stylus Straight', description:'This includes 1 set of Adult size straps and one tip.', price: 87.00, imageUrl:'https://i.imgur.com/QuPImAb.png'},
        {name:'Child Size Straps', description:'Child Strap', price: 8.00, imageUrl:'https://i.imgur.com/QuPImAb.png'},
        {name:'Adult/Teen Size Straps', description:'Adult Strap', price: 8.00, imageUrl:'https://i.imgur.com/QuPImAb.png'},
        {name:'20 Tips Package', description:'Replacement, screw on touch screen tips. Made from mesh material.', price: 46.00, imageUrl:'https://i.imgur.com/QuPImAb.png'},
        {name:'10 Replacaeble Tips ', description:'Replacement, screw on touch screen tips. Made from mesh material.', price: 26.00, imageUrl:'https://i.imgur.com/QuPImAb.png'},
        {name:'5 Replaceable Tips', description:'Replacement, screw on touch screen tips. Made from mesh material.', price: 17.00, imageUrl:'https://i.imgur.com/QuPImAb.png'},
    ]);
    console.log(products)
    process.exit();
})();