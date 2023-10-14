const { User } = require("../models/user");
const jwt = require("jsonwebtoken");


const Authenticate = async(req,res,next) => {
    try {
        const token = global.accessToken;
        //console.log(req.cookies);
        const verify = jwt.verify(token,process.env.SECRET_KEY);
        
        const user = await User.findOne({ _id: verify._id, "tokens.token": token });
        if (!user) {
            throw new Error("user not found");
        }
        
        req.token = token;
        req.user = user;
        req.userID = user._id;
        res.cookie("jwtoken", token);
        console.log("token: "+req.token);

        next();
    } catch (error) {
        res.status(401).send({ message: "UnAuthorized" });
        console.log(error);
    }
}

module.exports = Authenticate;