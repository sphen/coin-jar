const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    });
    console.log(`DB connected ${conn.connection.host}`.yellow.bold);
  } catch (err) {
    console.log(`error: ${err.message}`.red);
    process.exit(1);
  }
};

module.exports = connectDB;
