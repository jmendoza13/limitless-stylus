require('dotenv').config();
require('./config/database');

const Product = require ('./models/product');


(async function() {

    await Product.deleteMany({});
    const products = await Product.create([
        {name:'Ultimate Stylus kit', description:'This Kit includes Six adult/teen angled stylus: 121; 125; 135; 145; straight. Child size stylus 14 Straps are included with all styluses Less', price: 527.00, imageUrl:''},
        {name:'Adult/Teen Stylus Kit', description:'This Kit Includes: Five adult/teen angled stylus: 121; 125; 135; 145; Straight Straps included with all styluses', price: 462, imageUrl:''},
        {name:'Child Size Stylus Angle 145', description:'This includes 1 set of child size straps and one tip.', price: 85.00, imageUrl:''},
        {name:'Adult/Teen Stylus Angle 145', description:'This Kit includes Six adult/teen angled stylus: 121; 125; 135; 145; straight. Child size stylus 14 Straps are included with all styluses Less', price: 527, imageUrl:''},
        {name:'Adult/Teen Stylus Angle 125', description:'This Kit includes Six adult/teen angled stylus: 121; 125; 135; 145; straight. Child size stylus 14 Straps are included with all styluses Less', price: 527, imageUrl:''},
        {name:'Adult/Teen Stylus Angle 135', description:'This Kit includes Six adult/teen angled stylus: 121; 125; 135; 145; straight. Child size stylus 14 Straps are included with all styluses Less', price: 527, imageUrl:''},
        {name:'Adult/Teen Stylus Angle 121', description:'This Kit includes Six adult/teen angled stylus: 121; 125; 135; 145; straight. Child size stylus 14 Straps are included with all styluses Less', price: 527, imageUrl:''},
        {name:'Adult/Teen Stylus Straight', description:'This Kit includes Six adult/teen angled stylus: 121; 125; 135; 145; straight. Child size stylus 14 Straps are included with all styluses Less', price: 527, imageUrl:''},
        {name:'Child Size Straps', description:'This Kit includes Six adult/teen angled stylus: 121; 125; 135; 145; straight. Child size stylus 14 Straps are included with all styluses Less', price: 527, imageUrl:''},
        {name:'20 Tips Package', description:'This Kit includes Six adult/teen angled stylus: 121; 125; 135; 145; straight. Child size stylus 14 Straps are included with all styluses Less', price: 527, imageUrl:''},
        {name:'10 Replacaeble Tips ', description:'This Kit includes Six adult/teen angled stylus: 121; 125; 135; 145; straight. Child size stylus 14 Straps are included with all styluses Less', price: 527, imageUrl:''},
        {name:'5 Replaceable Tips', description:'This Kit includes Six adult/teen angled stylus: 121; 125; 135; 145; straight. Child size stylus 14 Straps are included with all styluses Less', price: 527, imageUrl:''},
    ]);
    console.log(products)
    process.exit();
})();