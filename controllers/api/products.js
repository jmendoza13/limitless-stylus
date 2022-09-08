const Product = require('../../models/productSchema');

module.exports = {
    index,
    show,
}

async function index(req, res) {
    const products = await Product.find({}).sort('name').exec();
    res.json(products);
}

async function show(req, res) {
    const product = await Product.findById(req.params.id);
    res.json(product);
}