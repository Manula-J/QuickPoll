import express from "express";
import cors from "cors";
import dotenv from "dotenv"
import { Prisma, PrismaClient } from "@prisma/client";

dotenv.config();

// express app
const app = express();
const prisma = new PrismaClient();


app.use(express.json());

app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}))
