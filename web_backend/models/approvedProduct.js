const mongoose = require("mongoose");

const ApprovedProductSchema = new mongoose.Schema({
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
    rotation:{
        type:Array,
    }
});

const approvedProduct = mongoose.model("approvedProduct", ApprovedProductSchema);

module.exports = approvedProduct;