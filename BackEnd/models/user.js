const mongoose = require('mongoose');
const jwt = require("jsonwebtoken");


const userSchema = new mongoose.Schema({
    name:{type:String, required:true},
    email: { type: String, required: true },
    password: { type: String, required: true },
    tokens: [
        {
            token:{type:String, required:true}
        }
    ]
});

userSchema.methods.generateAuthToken = async function () {
    try {
        const expire = Math.floor(Date.now() / 1000) + (60);
        let token = jwt.sign({ _id: this._id, exp: expire}, process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({ token: token });
        await this.save();
        return token;
    } catch (error) {
        console.log(error);
    }
}

const User = mongoose.model("user", userSchema);
module.exports = { User };