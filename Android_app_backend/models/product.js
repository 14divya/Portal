const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique:true,
    },
    category: {
        type: String,
        required: true,
    },
    images: {
        type: Array,
    },
    description: {
        type: String,
    },
    features: {
        type: String,
    },
    applications: {
        type: String,
    },
    functions: {
        type: String,
    },
    document:{
        type:String,
    },
    video:{
        type:String,
    },
    op:{
        type:String,
    },
    oldTitle:{
        type:String,
    },
    rotation:{
        type:Array,
    }
});

const product = mongoose.model("product", ProductSchema);

module.exports = product;