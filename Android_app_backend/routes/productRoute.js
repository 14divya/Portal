const express = require('express');

const {
    createProduct, 
    getProducts,
    getProductByCat,
    uploadImages,
    upload,
    uploadvideos,
    uploadVideo,
    uploaddocs,
    uploadDocs,
    getProductByOp,
    getProductByTitle,
    deleteProduct,
    getProductById,
    createAllProduct,
    createUpdatedProduct,
    uploadRotation,
    uploadImagesRotation,
} = require('../controllers/productController');

const router = express.Router();

router.post('/create',createProduct);
router.post('/delCreate',createAllProduct);
router.post('/updateCreate',createUpdatedProduct);

router.get('/',getProducts);
router.get('/:category',getProductByCat);
router.get('/operation/:op',getProductByOp);
router.get('/title/:title',getProductByTitle);
router.get('/:id',getProductById);

router.put('/upload/:id',upload.array('images',4),uploadImages);
router.put('/uploadvideo/:id',uploadvideos.single('video'),uploadVideo);
router.put('/uploaddoc/:id',uploaddocs.single('doc'),uploadDocs);
router.put('/upload/single/:id',upload.single('images'));
router.put('/upload/rotation/:id',uploadRotation.array('rotation',40),uploadImagesRotation);

router.delete('/delete/:id',deleteProduct);

module.exports = router;