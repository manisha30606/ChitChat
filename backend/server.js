import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import authRoutes from './routes/auth.routes.js';
import messageRoutes from './routes/message.routes.js';
import userRoutes from './routes/user.routes.js';
import connectMongodb from './db/connectMongodb.js';
import cors from 'cors';
import {app,server} from "./socket/socket.js";


const corsOptions = {
    origin: 'http://localhost:3000', 
    credentials: true,
};

app.use(cors(corsOptions));

const PORT = process.env.PORT || 5000;

dotenv.config(); 

app.use(express.json());
app.use(cookieParser());

app.get('/', (req, res) => {
    res.send('hello');
});



app.use('/api/auth', authRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/users', userRoutes);

server.listen(PORT, async () => {
    await connectMongodb();
    console.log(`Server running on port ${PORT}`);
});
