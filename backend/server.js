import express from "express";
import cors from "cors";
import "dotenv/config";
import contactRoute from "./routes/contactRoute.js"

const app = express();

app.use(cors());
app.use(express.json())

app.use("/api/contact", contactRoute)

app.get("/", (req,res) => {
    res.send("Server is live...")
});


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}` )
})

