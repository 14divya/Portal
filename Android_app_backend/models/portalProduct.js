const mongoose = require("mongoose");

const PortalProductSchema = new mongoose.Schema({
    images: {
        type: Array,
    },
    document:{
        type:String,
    },
    rotation:{
        type:Array,
    }
})

const product = mongoose.model("portalProduct", PortalProductSchema);

module.exports = product;