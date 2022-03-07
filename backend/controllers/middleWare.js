const jwt = require('jsonwebtoken');

const authMiddlewareLogin = (req, res, next) => {
    const token = req.cookies.jwt;

    if(token){
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decodedToken) => {
            if(err){
                res.cookie('jwt', '', { maxAge: 1 });
                next();
            }else{
                
                res.status(406).json({
                    message: 'Only users that arent loggen in have access to this page',
                    redirect: true
                })
            }
        })
    }else{
        next();
    }
}

const routeProtector = (req, res) => {
    const token = req.cookies.jwt;

    if(token){
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decodedToken) => {
            if(err){
                res.cookie('jwt', '', { maxAge: 1 });
                res.status(406).json({
                    message: 'You need to login to get access to the page you are looking for.',
                    redirect: true
                })
            }else{
                next();
            }
        })
    }else{
        res.status(406).json({
            message: 'You need to login to get access to the page you are looking for.',
            redirect: true
        })
    }
}

module.exports = {
    authMiddlewareLogin,
    routeProtector
}