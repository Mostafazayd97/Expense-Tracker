const express = require('express')
const expressApp = express()
const AuthRoutes = require('../routes/Auth.routes')
const connectDB = require('../config/database')


expressApp.use(express.json())
expressApp.use("/api/auth",AuthRoutes)
const PORT = process.env.PORT || 5000;
connectDB();

expressApp.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

