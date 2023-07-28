var crypto = require('crypto');
const userModel = require("../models/user");
const asyncHandler = require('express-async-handler');

var genRandomString = function (length) {
    return crypto.randomBytes(Math.ceil(length / 2))
        .toString('hex')
        .slice(0, length);
}

var sha512 = function (password, salt) {
    var hash = crypto.createHmac('sha512', salt);
    hash.update(password);
    var value = hash.digest('hex');
    return {
        salt: salt,
        passwordHash: value
    };
}

function saltHashPassword(userPassword) {
    var salt = genRandomString(16);
    var passwordData = sha512(userPassword, salt);
    return passwordData;
}

function checkHashPassword(userPassword, salt) {
    var passwordData = sha512(userPassword, salt);
    return passwordData;
}

const loginUser = asyncHandler(async (request, response, next) => {
    var post_data = request.body;

    var email = post_data.email;
    var userPassword = post_data.password;

    const findUser = await userModel.findOne({ 'email': email });
    
    if (findUser == null) {
        response.json("Username does not exist");
    }
    else {
        var salt = findUser.salt;
        var hashed_password = checkHashPassword(userPassword, salt).passwordHash;
        var encrypted_password = findUser.password;
        if (hashed_password == encrypted_password) {
            response.json("Login successful");
            }
        else {
            response.json("Invalid password");
            }
    }
})

const registerUser = asyncHandler(async (request, response) => {
    var post_data = request.body;
    
    var plaint_password = post_data.password;
    var hash_data = saltHashPassword(plaint_password);

    var password = hash_data.passwordHash;
    var salt = hash_data.salt;

    var name = post_data.name;
    var email = post_data.email;

    var role = post_data.role;

    var user = new userModel({
        'email': email,
        'password': password,
        'salt': salt,
        'name': name,
        'role': role
    });

    const findUser = await userModel.findOne({ 'email': email });
    if (findUser == null) {
        const newUser = await userModel.create(user);
        response.json(newUser);
    }
    else {
        response.json({
            msg: "User already exists",
            success: false,
        });
    }
})

const getAUser = asyncHandler(async (request, response) => {
    var  post_data  = request.params;
    
    var email = post_data.email;
    
    try {
        const findUser = await userModel.findOne({ 'email': email });
        if (findUser != null) {
            response.json({
                'role':findUser.role,
            });
        }
    } catch (error) {
        throw new Error(error);
    }
});


module.exports = {
    loginUser,
    registerUser,
    getAUser,
};