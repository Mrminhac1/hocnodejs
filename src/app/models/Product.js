const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');

const Product = new Schema({
    title: { type: String, required: true },
    ep: { type: String},
    image: { type: String},
    view: { type: String},
    comments: { type: String},
    tab1: { type: String},
    tab2: { type: String},
    description: { type: String},
    slug: { type: String, slug: "title", unique: true },
}, {
    timestamps: true,
});



// Add plugins
mongoose.plugin(slug);
Product.plugin(mongooseDelete);

module.exports = mongoose.model('Product', Product);
