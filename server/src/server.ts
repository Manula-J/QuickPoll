import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config();

// express app
const app = express();

// Connect to mongodb
const dbURI: string = 'mongodb+srv://manulajayabodhi:wl0Ow9nBYeWF0TVf@clusterquickpoll.yonc6vi.mongodb.net/?retryWrites=true&w=majority&appName=ClusterQuickPoll';

mongoose.connect(dbURI)
  .then(() => {
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`)
      console.log("Connected to MongoDB");
    })
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error.message);
    process.exit(1);
  })

app.use(express.json());

app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}))
