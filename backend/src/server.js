import express from "express";
import noteRoutes from "./routes/noteRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";

dotenv.config();

console.log("process.env.MONGO_URI", process.env.MONGO_URI);

const app = express();
const PORT = process.env.PORT || 5001;


connectDB();
app.use(express.json());//middlerware 

app.use("/api/notes", noteRoutes);


app.listen(PORT, () => {
    console.log("Server is running on port:", PORT);
});