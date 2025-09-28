import express, { request } from "express";
import noteRoutes from "./routes/noteRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import rateLimiter from "../src/middleware/rateLimiter.js";

dotenv.config();

console.log("process.env.MONGO_URI", process.env.MONGO_URI);

const app = express();
const PORT = process.env.PORT || 5001;

app.use(express.json());
app.use(rateLimiter);
//middlerware will parese the incoming json data
//the most use of the middle ware s the authentication
//custom middleware to log the request method and url

// app.use((req, res, next) => {
//     console.log(`Req method is ${req.method} & Req URL is ${req.url}`);
//     next();
// });
app.use("/api/notes", noteRoutes);

connectDB().then(() => {
    app.listen(PORT, () => {
    console.log("Server is running on port:", PORT);
});
}).catch((error) => {
    console.error("Error connecting to MongoDB", error);
    process.exit(1);
});
