const moongose = require('mongoose')
require('dotenv').config();

const connectDB = async () => {
    try {
      await moongose.connect(process.env.MONGO_URI );
      console.log('\x1b[32m%s\x1b[0m','MongoDB connected');
    } catch (error) {
      console.error('Database connection failed:', error.message);
      process.exit(1); // Exit process with failure
    }
  };
  

module.exports = connectDB