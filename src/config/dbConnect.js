import mongoose from "mongoose";

const API_USERNAME = process.env.API_USERNAME;
const API_PASSWORD = process.env.API_PASSWORD;
const API_DATABASE_NAME = process.env.API_DATABASE_NAME;
const API_DATABASE_CLUSTER = process.env.API_DATABASE_CLUSTER;

mongoose.connect(`mongodb+srv://${API_USERNAME}:${API_PASSWORD}@${API_DATABASE_NAME}.mmctn.mongodb.net/${API_DATABASE_CLUSTER}`)


let db = mongoose.connection;

export default db

