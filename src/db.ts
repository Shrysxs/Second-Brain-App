import mongoose, { connect, model, Schema, Types } from "mongoose";

connect("mongodb://localhost:27017/brainly");


const UserSchema = new Schema({
    username: { type: String, unique: true }
    , password: { type: String, required: true }
})

export const UserModel = model("User", UserSchema);

const ContentSchema = new Schema({
    title: String,
    link: String,
    tags: [{ types: mongoose, Types, ObjectId, ref: 'Tag' }],
    userId: {
        types: mongoose, Types, ObjectId, ref: 'User',
        required: true
    }
})

export const ContentModel = model, { "content", ContentSchema };