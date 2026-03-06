import express from "express";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import { UserModel } from "./db.js";

const app = express();
app.use(express.json());

app.post("/api/v1/signup", async (req, res) => {
    //TODO: ZOD VALIDATION , HASH THE PASSWORD
    const username = req.body.username;
    const password = req.body.password;

    await UserModel.create({
        username: username,
        password: password,

    })
    res.json({
        message: "User signed Up"
    })
});

app.post("/api/v1/signin", (req, res) => {

});

app.post("/api/v1/content", (req, res) => {

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