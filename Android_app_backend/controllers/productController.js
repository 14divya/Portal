const productModel = require("../models/product");
const asyncHandler = require('express-async-handler');
const multer = require('multer');
const approvedProductModel = require("../models/approvedProduct");

const createProduct = asyncHandler(async (request, response) => {
    var post_data = request.body;

    var title = post_data.title;
    console.log(title);
    console.log(post_data.category);
    if(title==null){
        response.json("Provide a title");
    }

    var product = new productModel(post_data);

    const findProduct = await productModel.findOne({ 'title': title });
    const findApprovedProduct = await approvedProductModel.findOne({ 'title': title });

    if (findProduct == null && findApprovedProduct == null) {
        const newProduct = await productModel.create(product);
        console.log(newProduct.id);
        response.json(newProduct.id);
    }
    else {
        response.json("Product already exists");
    }
})

const createAllProduct = asyncHandler(async (request, response) => {
    var post_data = request.body;

    var title = post_data.title;
    if(title==null){
        response.json("Provide a title");
    }

    var product = new productModel(post_data);

    const findProduct = await productModel.findOne({ 'title': title });
    // const findApprovedProduct = await approvedProductModel.findOne({ 'title': title });

    if (findProduct == null) {
        const newProduct = await productModel.create(product);
        
        response.json(newProduct._id);
    }
    else {
        response.json("Product already exists");
    }
})

const createUpdatedProduct = asyncHandler(async (request, response) => {
    var post_data = request.body;

    var title = post_data.title;
    if(title==null){
        response.json("Provide a title");
    }

    var product = new productModel(post_data);

    const findProduct = await productModel.findOne({ 'title': title });
    // const findApprovedProduct = await approvedProductModel.findOne({ 'title': title });

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
    const id = request.params._id;
    const getProduct = await productModel.find({ '_id': id })
    if (getProduct != null) {
        response.json(getProduct)
    } else {
        response.json("No product in this operation");
    }
})

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        // cb(null, 'uploads')
        cb(null, '/home/divya/AndroidStudioProjects/EAPL/app/src/main/res/drawable')
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
            console.log(path);
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
        console.log(findProduct.images[0].substr(65));
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
        // cb(null, 'videos')
        cb(null, '/home/divya/AndroidStudioProjects/EAPL/app/src/main/res/raw')
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
        console.log(path)
        const findProduct = await productModel.findByIdAndUpdate(id, {
            video: path,
        },
            {
                new: true,
            }
        );
        response.json(findProduct);
        console.log(findProduct.video.substring(60));
    } catch (error) {
        throw new Error(error);
    }
})

var storageDocs = multer.diskStorage({
    destination: function (req, file, cb) {
        // cb(null, 'documents')
        cb(null,'/home/divya/AndroidStudioProjects/EAPL/app/src/main/assets')
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
        console.log(files);
        const path = files;
        console.log(path)
        const findProduct = await productModel.findByIdAndUpdate(id, {
            document: path,
        },
            {
                new: true,
            }
        );
        response.json(findProduct);
        console.log(findProduct.document.substring(61));
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
    createAllProduct,
    createUpdatedProduct,
    getProducts,
    getProductByCat,
    upload,
    uploadImages,
    uploadvideos,
    uploadVideo,
    uploaddocs,
    uploadDocs,
    uploadImagesRotation,
    uploadRotation,
    getProductByOp,
    getProductByTitle,
    getProductById,
    deleteProduct,
}
