const mongoose = require('mongoose');
const {MONGODB_URI} = process.env


mongoose.set('strictQuery', true);
mongoose.connect(MONGODB_URI, { server: { socketOptions: { connectTimeoutMS: 10000 } }})

// Connection Events
mongoose.connection
  .on("open", () => console.log("You are connected to mongoose"))
  .on("close", () => console.log("You are disconnected from mongoose"))
  .on("error", (error) => console.log(error));

  