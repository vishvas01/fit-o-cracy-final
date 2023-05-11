import express from "express";
import mongoose from "mongoose";
import cors from 'cors';
import * as dotenv from "dotenv";
import authRoutes from "./routes/auth.js";
import utilRoutes from "./routes/util.js";
import generatePlanRoute from "./routes/gPlan.js";

const app = express();

app.use(express.json());
app.use(cors());
dotenv.config();

app.use("/api/auth", authRoutes); 
app.use("/api/util", utilRoutes);
app.use("/api/gplan", generatePlanRoute);


mongoose.set("strictQuery",false);
mongoose.connect(process.env.DB_URI)
.then(() => {
  console.log("Database connected!");
  app.listen(process.env.PORT, () => {
    console.log(`Running at http://localhost:${process.env.PORT}`);
    });
  })
  .catch((err) => console.log(err));