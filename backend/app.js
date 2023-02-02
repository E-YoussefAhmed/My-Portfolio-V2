require("dotenv").config();
const express = require("express");
const cors = require("cors");

const connectDB = require("./mongodb/connect");
const allRoutes = require("./routes/allRoutes");

const app = express();

// middleware
app.use(cors());
app.use(express.json());

const startServer = async () => {
  try {
    connectDB(process.env.MONGODB_URL);
    app.listen(process.env.PORT, () =>
      console.log(`Server has started on port ${process.env.PORT}`)
    );
  } catch (error) {
    console.log(error);
  }
};

startServer();

// routes
app.use("/api/v1", allRoutes);
