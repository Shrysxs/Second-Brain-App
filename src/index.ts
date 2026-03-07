import express from "express";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import { ContentModel, UserModel } from "./db.js";
import { JWT_PASSWORD } from "./config.js";

const app = express();
app.use(express.json());

app.post("/api/v1/signup", async (req, res) => {
    //TODO: ZOD VALIDATION , HASH THE PASSWORD
    const username = req.body.username;
    const password = req.body.password;
    try {
        await UserModel.create({
            username: username,
            password: password,
        })

        res.json({
            message: "User signed Up"
        })
    } catch (e) {
        res.status(411).json({
            message: "User already exists"
        });
    }
});

app.post("/api/v1/signin", async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const existingUser = await UserModel.findOne({
        username,
        password
    });

    if (existingUser) {
        const token = jwt.sign({
            id: existingUser._id
        }, JWT_PASSWORD);

        res.json({
            token
        });
    } else {
        res.status(403).json({
            message: "Incorrect Credentials"
        });
    }
});

app.post("/api/v1/content", userMiddleware, async (req, res) => {
    const link = res.body.link;
    const type = req.body.type;
    ContentModel.create({}
        ,link,
        type,
        //@ts-ignore
        userId,: req.userId,
        tags,: []
    )

    return res.json({
        message: "content added"
    })

});

app.get("/api/v1/content", (req, res) => {

});

app.delete("/api/v1/content", (req, res) => {

});

app.post("/api/v1/brain/share", (req, res) => {

});

app.get("/api/v1/brain/share", (req, res) => {

});


app.listen(3000);