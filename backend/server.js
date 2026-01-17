require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const tasksRoutes = require('./routes/taskroutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/tasks', tasksRoutes);

// Connect to DB and start server
connectDB();
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port http://localhost:${PORT}`));
