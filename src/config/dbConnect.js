import mongoose from "mongoose";

mongoose.connect("mongodb+srv://fernandamh:senha123@alura.mmctn.mongodb.net/alura-node")

let db = mongoose.connection;

export default db

