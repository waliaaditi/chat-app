import express from 'express'
import dotenv from 'dotenv'
import path from 'path'
import authRoute from './Routes/AuthRoutes.js'
import connectDB from './db/connectDB.js';
import messageRoute from './Routes/MessageRoutes.js'
import userRoutes from './Routes/UserRoutes.js'
import cookieParser from 'cookie-parser';
import cors from 'cors'
import { app,server,io } from './socket/socket.js';
dotenv.config();
const __dirname = path.resolve();
app.use(cors())
app.use(express.json())
app.use(cookieParser())

const PORT=process.env.PORT || 3000
app.use("/api/auth",authRoute)
app.use("/api/messages",messageRoute)
app.use("/api/users/",userRoutes)
app.use(express.static(path.join(__dirname, "/frontend/dist")));

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});
connectDB()
server.listen(PORT,()=>{
    console.log(`server is listening to the port ${PORT}`);
})