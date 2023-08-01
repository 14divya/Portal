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
    upload1,
    uploadRotation1,
    uploadvideos1,
    uploaddocs1,
    updateProduct,
    uploadImages1,
    uploadDocs1,
    uploadImagesRotation1,
} = require('../controllers/productController');

const router = express.Router();

router.post('/create',createProduct);
router.post('/delCreate',createAllProduct);
router.post('/updateCreate',createUpdatedProduct);

router.get('/',getProducts);
router.get('/:category',getProductByCat);
router.get('/operation/:op',getProductByOp);
router.get('/title/:title',getProductByTitle);
router.get('/id/:id',getProductById);

router.put('/upload/:id',upload.array('images',4),uploadImages);
router.put('/upload1/:id',upload1.array('image',4),uploadImages1);
router.put('/uploadvideo/:id',uploadvideos.single('video'),uploadVideo);
router.put('/uploadvideo1/:id',uploadvideos1.single('video'));
router.put('/uploaddoc/:id',uploaddocs.single('doc'),uploadDocs);
router.put('/uploaddoc1/:id',uploaddocs1.single('docs'),uploadDocs1);
router.put('/upload/single/:id',upload.single('images'));
router.put('/upload/rotation/:id',uploadRotation.array('rotation',40),uploadImagesRotation);
router.put('/upload1/rotation1/:id',uploadRotation1.array('rotations',40),uploadImagesRotation1);

router.put('/update/:id',updateProduct);

router.delete('/delete/:id',deleteProduct);

module.exports = router;