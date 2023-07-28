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
    getProductById,
    deleteProduct,
    updateProduct,
} = require('../controllers/approvedProductController');

const router = express.Router();

router.post('/create',createProduct);

router.get('/',getProducts);
router.get('/:category',getProductByCat);
router.get('/operation/:op',getProductByOp);
router.get('/title/:title',getProductByTitle);
router.get('/id/:id',getProductById);

router.put('/upload/:id',upload.array('images',4),uploadImages);
router.put('/uploadvideo/:id',uploadvideos.single('video'),uploadVideo);
router.put('/uploaddoc/:id',uploaddocs.single('doc'),uploadDocs);

router.put('/updatepro/:id',updateProduct);

router.delete('/delete/:id',deleteProduct);

module.exports = router;