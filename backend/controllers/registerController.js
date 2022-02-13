const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { formValidation } = require('./formValidator');
const { Users } = require('../models/users');
const uuid = require('uuid');

const maxAge = 1 * 24 * 60 * 60;

const createToken = (id) => {
   return jwt.sign({ id }, process.env.ACCESS_TOKEN_SECRET, {
       'expiresIn': maxAge
   });
}

const register = async (req, res) => {
    const validator = new formValidation();
    const { fullName, email, pwd } = req.body;
    
    const checkEmpty = !validator.checkEmpty(fullName) || !validator.checkEmpty(email) || !validator.checkEmpty(pwd);

    if(checkEmpty || !validator.emailValidation(email) || !validator.pwdValidation(pwd)){
       if(checkEmpty){
        return res.status(400).json({
            message: "All fields need to be filled"
        })
       }else if(!validator.emailValidation(email)){
           return res.status(400).json({
               message: "Invalid email"
           })
       }else{
        return res.status(400).json({
            message: "Password must be atleast 6 or more characters"
        }) 
       }
    }else{
        
        const doesMailExist = await Users.findOne({ email: email }).exec();

        if(doesMailExist){
            res.status(409).json({
                message: 'The email you provided has already been registered, please login or reset your password.'
            })
        }else{
            const id = uuid.v4();
            const salt = await bcrypt.genSalt();
            const password = await bcrypt.hash(pwd, salt);

            const users = new Users({
                _id: id,
                fullName,
                email,
                pwd: password
            });

            await users.save().then(() => {
                const token = createToken(id);
                res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
                res.status(200).json({
                    message: `Welcome ${fullName} to the react-login family.`,
                    jwt: token
                })
            }).catch((err) => {
                const errMsg = err.response;

                res.status(503).json({
                    message: `Internal server error`,
                    detail: errMsg
                })
            })
        }
    }
}

module.exports = {
    register,
    createToken,
    maxAge
}