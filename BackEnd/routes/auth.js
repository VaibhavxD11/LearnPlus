const router = require("express").Router();
const bcrypt = require("bcrypt");
const { User } = require("../models/user");
const { Contact } = require("../models/contactus");
const jwt = require("jsonwebtoken");
const authenticate = require("../middleware/authenticate");
const express = require("express");
const app = express();
const path = require('path');
app.set("view engine", "ejs");
var nodemailer = require("nodemailer");
const cookieParser = require("cookie-parser");
app.use(cookieParser());

// app.set('views', path.join(__dirname, 'views'));



router.get("/", (req, res) => {
    res.send("Homepage Success");
});

router.post("/signup", async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res
            .status(422)
            .send({ message: "Please fill all fields" });
    }

    try {
        let userExist = await User.findOne({ email: email });
        if (userExist) {
            return res.status(422).send({ message: "Email already exist!!" });
        }
        else {
            const salt = await bcrypt.genSalt(Number(process.env.SALT));
            const hashPassword = await bcrypt.hash(req.body.password, salt);
            await new User({ ...req.body, password: hashPassword }).save();
            console.log("name: " + name, "email: " + email);
            res.status(201).send({ message: "Registered Successfully" });
        }
    } catch (error) {
        console.log(error);
        
    }
});

router.post("/login",async(req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).send({ message: "Fill All Details" });
        }
        let userExist = await User.findOne({ email: email });
        if (!userExist) {
            return res.status(404).send({ message: "Not Found" });
        }

        const validPassword = await bcrypt.compare(
            req.body.password, userExist.password
        );


        if (!validPassword) {
            return res.status(401).send({ message: "Invalid Email or Password" });
        }


        const token = await userExist.generateAuthToken();
        console.log(token);
        

        res.cookie("jwtokenss", token, {
            expires: new Date(Date.now()+6000),
            
        });
        //res.cookie("jwt", token);
        global.accessToken = token;
                


        return res.status(200).send({ data: token, message: "Login Success" });
    } catch (error) {
        res.status(500).send({ message: "Internal Server Error" });
    }
});

router.get("/login", async(req, res) => {  
    res.cookie("jwtokens", global.accessToken, {
        expires: new Date(Date.now() + 60000*60),

    });

    res.status(200).send({message:"OK"});
});

router.get("/Courses", authenticate, (req, res) => {
    console.log("Middleware");
    res.status(200).send({ message: "This is the Courses Page" });
});

router.post("/contact", async(req, res) => {
    try {
        await new Contact({ ...req.body }).save();
        return res.status(200).send({ message: "Message Sent" });


    } catch (error) {
        console.log("Error");
    }
})


router.post("/forgotpassword", async(req, res) => {
    const { email } = req.body;
    try {
        let userExist = await User.findOne({ email });
        if (!userExist) {
            return res.status(404).send({ message: "User Not Found" });
        }
        const secret = process.env.SECRET_KEY + userExist.password;
        const token = jwt.sign({ email: userExist.email, id: userExist._id }, secret, {
            expiresIn: "10m",
        });
        const link = `http://localhost:8080/reset-password/${userExist.email}/${token}`;

        var transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "vaibhavdwivedi.2211@gmail.com",
                pass: "fxmwhkvalalylscb",
                // fxmw hkva laly lscb
            },
        });

        var mailOptions = {
            from: "youremail@gmail.com",
            to: userExist.email,
            subject: "Password Reset Link",
            text: link
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log("Email sent: " + info.response);
            }
        });

        console.log(link);
        res.status(200).send({ message: "Success" });


    } catch (error) {
        console.log(error);
    }
})

router.get("/reset-password/:email/:token", async (req, res) => {
    const { email, token } = req.params;
    console.log(req.params);
    let userExist = await User.findOne({ email});
    if (!userExist) {
        return res.status(404).send({ message: "User Not Found" });
    }
    const secret = process.env.SECRET_KEY + userExist.password;
    try {
        const verify = jwt.verify(token, secret);
        console.log(1);
        res.render("forgot", { email: verify.email ,status: "not verified" });
        //res.status(200).send({ message: "Verified" });
        
    } catch (error) {
        console.log(error);
        res.status(401).send({ message: "Not verified" });
    }
        
})


router.post("/reset-password/:email/:token", async (req, res) => {
    const { email, token } = req.params;
    const { password } = req.body;
    
    let userExist = await User.findOne({ email });
    if (!userExist) {
        return res.status(404).send({ message: "User Not Found" });
    }
    const secret = process.env.SECRET_KEY + userExist.password;
    try {
        const verify = jwt.verify(token, secret); 
        const salt = await bcrypt.genSalt(Number(process.env.SALT));
        const hashPassword = await bcrypt.hash(password, salt);
        await User.updateOne(
            { _id: userExist._id },
            {
                $set: {
                    password: hashPassword,
                },
            }
        );
        res.render("forgot", { email: verify.email, status: "verified" });
        //res.status(200).send({ message: "Verified and Updated" });

    } catch (error) {
        console.log(error);
        res.status(401).send({ message: "Not verified" });
    }

})

module.exports = router;