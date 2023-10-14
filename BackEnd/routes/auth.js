const router = require("express").Router();
const bcrypt = require("bcrypt");
const { User } = require("../models/user");
const { Contact } = require("../models/contactus");
const jwt = require("jsonwebtoken");
const authenticate = require("../middleware/authenticate");

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
        

        res.cookie("jwtoken", token, {
            expires: new Date(Date.now() + 25),
            httpOnly: true
            
        });
        global.accessToken = token;
                


        return res.status(200).send({ data: token, message: "Login Success" });
    } catch (error) {
        res.status(500).send({ message: "Internal Server Error" });
    }
});

router.get("/Courses",authenticate,(req, res) => {
    console.log("Middleware");

    res.status(200).send({ message: "This the Courses Page" });
});

router.post("/contact", async(req, res) => {
    try {
        await new Contact({ ...req.body }).save();
        return res.status(200).send({ message: "Message Sent" });


    } catch (error) {
        console.log("Error");
    }
})

module.exports = router;