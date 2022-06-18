import express from "express";
import db from "./config/dbConnect.js"
import routes from "./routes/index.js"
import dotenv from "dotenv"

dotenv.config();

db.on("error", console.log.bind(console, 'connection error'))
db.once("open", ()=> {
  console.log('sucessful database connection')
})

const app = express();
app.use(express.json())
routes(app)

export default app
