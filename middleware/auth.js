const jwt = require("jsonwebtoken");
const _msg = require('../config/message')
const httpStatus = require('http-status');

// Callback argument to the middleware function, called "next" by convention.
module.exports = function auth(req, res, next) {
    const token = req.header('x-auth-token');
    if (!token) {
        return res.status(httpStatus.UNAUTHORIZED).send(
            {
                serverResponse: {
                    isError: true,
                    message: _msg[1001][lang],
                    statusCode: 'UNAUTHORIZED'
                }
            }
        );
    }
    try {
        const decode = jwt.verify(token, process.env.JWT_SECRET, {
            issuer: process.env.JWT_ISSUER,
        });
        req.user = decode;
        next()
    } catch (error) {
        return res.status(httpStatus.UNAUTHORIZED).send(
            {
                serverResponse: {
                    isError: true,
                    message: _msg[1002][lang],
                    statusCode: 'UNAUTHORIZED'
                }
            }
        );
    }
}
