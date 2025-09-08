import express from "express"
import ConnectMongoDB from "./config/db.js";
import ProfileRoutes from "./routes/Profile.js";
const app=express();
app.use(express.json());
import cors from "cors"
app.use(cors({
  origin: ['http://localhost:5173', "https://assesment-ivory.vercel.app" ],
  methods: ['GET', 'POST' ,'DELETE' , 'PUT' ],
  credentials: true
}));
import dotenv from "dotenv"
dotenv.config();
const PORT=process.env.POTT || 5000;

ConnectMongoDB();




// api routes
app.use("/api",ProfileRoutes);

app.listen(PORT,()=>{
    console.log("Server is running on the PORT 500 ");
})