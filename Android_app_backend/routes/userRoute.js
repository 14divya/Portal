const express = require('express');

const {
    loginUser, 
    registerUser,
    getAUser,
} = require('../controllers/userController');

const router = express.Router();

router.post('/register',registerUser);
router.post('/login',loginUser);
router.get('/:email',getAUser);

module.exports = router;
