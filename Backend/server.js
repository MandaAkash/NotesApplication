const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require('jsonwebtoken')
const Loginmodel = require("./Loginmodel")
const bcrypt = require("bcryptjs");

const cors = require("cors");

app.use(express.json());
// app.use(cors());
app.use(cors({ origin: true, credentials: true }));
mongoose.connect(
    "mongodb+srv://dodlasaideepthi8106:Deepthi@cluster0.jvxjcdj.mongodb.net/"
);



app.post('/login', async(req, res) => {
    console.log("hjfghj")
    console.log(req.body)
    const user = await Loginmodel.findOne({
        email: req.body.email,
    })

    if (!user) {
        return { status: 'error', error: 'Invalid login' }
    }

    const isPasswordValid = req.body.password === user.password
        // bcrypt.compare(
        //     req.body.password,
        //     user.password
        // )
    console.log(isPasswordValid)
    if (isPasswordValid) {
        // res.send("ok")
        console.log("ok")
        const token = jwt.sign({
                name: user.name,
                email: user.email,
            },
            'secret123'
        )
        console.log(token)

        return res.json({ status: 'ok', user: token })
    } else {
        return res.json({ status: 'error', user: false })
    }
})

app.listen(3001, () => {
    console.log("SERVER RUNS PERFECTLY!");
});