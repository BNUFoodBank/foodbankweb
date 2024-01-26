// server.js
import express from 'express';
import cors from 'cors';

const app = express();

// Enable CORS middleware
app.use(cors({
    origin: 'http://localhost:3000',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204,
}));

// Your existing routes and other middleware

const PORT = process.env.PORT || 5202;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
