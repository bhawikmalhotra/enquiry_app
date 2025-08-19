import dotenv from 'dotenv';
dotenv.config();

let check = (req, res, next) => {
    req.query.token == "" || req.query.token == undefined || req.query.token == ! process.env.Token ? res.status(401).json({message: "Unauthorized access blocked....."}) : next() 
}

export {check};