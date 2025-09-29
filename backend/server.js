// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// Initialize app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// ====== Routes ======
app.use('/api/materials', require('./routes/materialRoutes'));
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/invoices', require('./routes/invoiceRoutes'));
app.use('/api/funding-requests', require('./routes/fundingRequestRoutes'));
app.use('/api/transactions', require('./routes/transactionRoutes'));
// Project routes
app.use('/api/projects', require('./routes/project.routes'));
app.use('/api/projects', require('./routes/projectRoutes'));

// ====== MongoDB Connection ======
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('✅ MongoDB connected'))
.catch(err => console.error('❌ MongoDB connection error:', err));

// ====== Start Server ======
const DEFAULT_PORT = process.env.PORT || 5000;

const startServer = (port) => {
    const server = app.listen(port, () => {
        console.log(`🚀 Server running on port ${port}`);
    });

    server.on('error', (err) => {
        if (err.code === 'EADDRINUSE') {
            console.warn(`⚠️ Port ${port} is in use, trying ${port + 1}...`);
            startServer(port + 1);
        } else {
            console.error('❌ Server error:', err);
        }
    });
};

startServer(DEFAULT_PORT);
