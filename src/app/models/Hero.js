const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');



const Hero = new Schema({
    title: { type: String, required: true },
    description: { type: String},
    tab: { type: String},
    imageHero: { type: String},
    slug: { type: String, slug: "title", unique: true },
}, {
    timestamps: true,
});

// Add plugins
mongoose.plugin(slug);
Hero.plugin(mongooseDelete);

module.exports = mongoose.model('Hero', Hero);