require('dotenv').config();
const express = require("express");
//const { User } = require("./models/user");
// const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const cookieParser = require("cookie-parser");
// const userRoutes = require('./routes/users');
// const authRoutes = require('./routes/auth');
//const bcrypt = require("bcrypt");
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));

app.use(express.json())
app.use(cors());
app.use(cookieParser());
connection();

const corsOptions = {
    origin: 'http://localhost:3000', // Update this with your React app's URL
    credentials: true,
};

app.use(cors(corsOptions));

// app.post("/Courses", async (req, res) => {
//     console.log(global.accessToken);
//     res.cookie("jwt", global.accessToken, {
//         expires: new Date(Date.now() + 60000),
//     }); 
//     res.send({ message: "Logged In" });
// })

app.use(require("./routes/auth"));




const port =  process.env.PORT||8080;
app.listen(port, () => console.log(`Listening on port ${port}.port...`));