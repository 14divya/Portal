const productModel = require("../models/approvedProduct");
const asyncHandler = require('express-async-handler');
const multer = require('multer');

const createProduct = asyncHandler(async (request, response) => {
    var post_data = request.body;

    var title = post_data.title;

    var product = new productModel(post_data);

    const findProduct = await productModel.findOne({ 'title': title });

    if (findProduct == null) {
        const newProduct = await productModel.create(product);
        response.json(newProduct._id);
    }
    else {
        response.json("Product already exists");
    }
})

const getProducts = asyncHandler(async (request, response) => {
    const allProducts = await productModel.find();
    if (allProducts != null) {
        response.json(allProducts);
    } else {
        response.json("Product collection empty");
    }
})

const getProductByCat = asyncHandler(async (request, response) => {
    const category = request.params.category;
    const getProduct = await productModel.find({ 'category': category })
    if (getProduct != null) {
        response.json(getProduct)
    } else {
        response.json("No product in this category");
    }
})

const getProductByOp = asyncHandler(async (request, response) => {
    const op = request.params.op;
    const getProduct = await productModel.find({ 'op': op })
    if (getProduct != null) {
        response.json(getProduct)
    } else {
        response.json("No product in this operation");
    }
})

const getProductByTitle = asyncHandler(async (request, response) => {
    const title = request.params.title;
    const getProduct = await productModel.find({ 'title': title })
    if (getProduct != null) {
        response.json(getProduct)
    } else {
        response.json("No product in this operation");
    }
})

const getProductById = asyncHandler(async (request, response) => {
    const id = request.params.id;
    const getProduct = await productModel.find({ '_id': id })
    if (getProduct != null) {
        response.json(getProduct)
    } else {
        response.json("No product in this operation");
    }
})

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})
var upload = multer({ storage: storage })

var uploadImages = asyncHandler(async (request, response, next) => {
    const { id } = request.params;
    try {
        const urls = [];
        const files = request.files
        for (const file of files) {
            const { path } = file;
            urls.push(path);
        }
        const findProduct = await productModel.findByIdAndUpdate(id, {
            images: urls.map((file) => {
                return file;
            }),
        },
            {
                new: true,
            }
        );
        response.json(findProduct);
    } catch (error) {
        throw new Error(error);
    }

})

var storageRotation = multer.diskStorage({
    destination: function (req, file, cb) {
        // cb(null, 'uploads')
        cb(null, '/home/divya/AndroidStudioProjects/EAPL/app/src/main/assets/images')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})
var uploadRotation = multer({ storage: storageRotation })

var uploadImagesRotation = asyncHandler(async (request, response, next) => {
    const { id } = request.params;
    try {
        const urls = [];
        const files = request.files
        for (const file of files) {
            const { path } = file;
            urls.push(path);
        }
        const findProduct = await productModel.findByIdAndUpdate(id, {
            rotation: urls.map((file) => {
                return file;
            }),
        },
            {
                new: true,
            }
        );
        response.json(findProduct);
        console.log(findProduct.images[0].substr(65));
    } catch (error) {
        throw new Error(error);
    }

})


var storageVideo = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'videos')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})

var uploadvideos = multer({ storage: storageVideo })

var uploadVideo = asyncHandler(async (request, response, next) => {
    const { id } = request.params;
    try {
        const files = request.file.path;
        const path = files;
        const findProduct = await productModel.findByIdAndUpdate(id, {
            video: path,
        },
            {
                new: true,
            }
        );
        response.json(findProduct);
    } catch (error) {
        throw new Error(error);
    }
})

var storageDocs = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'documents')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})

var uploaddocs = multer({ storage: storageDocs })

var uploadDocs = asyncHandler(async (request, response, next) => {
    const { id } = request.params;
    try {
        const files = request.file.path;
        const path = files;
        const findProduct = await productModel.findByIdAndUpdate(id, {
            document: path,
        },
            {
                new: true,
            }
        );
        response.json(findProduct);
    } catch (error) {
        throw new Error(error);
    }
})

var updateProduct = asyncHandler(async (request, response) => {
    const { id } = request.params;
    var post_data = request.body;
    console.log("title:",post_data.title);
    console.log("id",id);

    try {
        const updatedProduct = await productModel.findByIdAndUpdate(id, post_data, { new: true, });
        response.json(updatedProduct);
    } catch (error) {
        throw new Error(error);
    }
})


var deleteProduct = asyncHandler(async (request, response) => {
    const id = request.params.id;
   
    try {
        const deletedProduct = await productModel.findByIdAndDelete(id);
        response.json(deletedProduct);
    } catch (error) {
        throw new Error(error);
    }
})

module.exports = {
    createProduct,
    getProducts,
    getProductByCat,
    upload,
    uploadImages,
    uploadvideos,
    uploadVideo,
    uploaddocs,
    uploadDocs,
    updateProduct,
    getProductByOp,
    getProductByTitle,
    getProductById,
    deleteProduct,
    uploadRotation,
    uploadImagesRotation,
}