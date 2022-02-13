const { Users } = require('../models/users');
const bcrypt = require('bcrypt');
const { createToken, maxAge } = require('./registerController');
const { formValidation } = require('./formValidator');

const login = async (req, res) => {
    const { email, pwd } = req.body;
    const validator = new formValidation();
    const checkEmpty = !validator.checkEmpty(email) || !validator.checkEmpty(pwd);

    if(checkEmpty){
        return res.status(400).json({
            message: 'You are required to fill all fields!'
        })
    }else{

        const findUserEmail = await Users.findOne({ email });

        if(findUserEmail){
            const { _id } = findUserEmail;
            const auth = await bcrypt.compare(pwd, findUserEmail.pwd);
            
            if(auth){
                const token = createToken(_id);
                res.cookie('jwt', token,  { httpOnly: true, maxAge: maxAge * 1000 });
                res.status(200).json({
                    message: 'You have successfully logged in'
                })
            }else{
                res.status(403).json({
                    message: 'Inavlid login attempt'
                })
            }
        }else{
            res.status(403).json({
                message: 'Inavlid login attempt'
            })
        }
    }
}

const logOut = (req, res) => {
    res.cookie('jwt', '', { maxAge: 1 });

    res.status(200).json({
        message: 'You have been logged out'
    })
}

module.exports = {
    login,
    logOut
}