const mongoose = require('mongoose');

const bannerSchema = new mongoose.Schema({
    images: { type: [String], required: true },
    offerDetails: { type: String, required: true },
    colorPalette: { type: String, required: true },
    theme: { type: String, required: true },
    outputSpecs: { type: String, required: true },
    generatedUrl: { type: String },
    createdAt: { type: Date, default: Date.now },
});

const Banner = mongoose.model('Banner', bannerSchema);
module.exports = Banner;
