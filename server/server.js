const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const taskRoutes = require("./routes/taskRoutes");
const authRoutes = require("./routes/auth.routes");

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/tasks", taskRoutes);
app.use("/api/auth", authRoutes);

const mongoose = require("mongoose");

// mongoose.set("debug", true);

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB connected successfully!"))
  .catch((err) => {
    console.error("MongoDB connection error:", err.message);
    process.exit(1); // Exit the app if the connection fails
  });
app.listen(PORT, () => {
  console.log(`Server running on Port on http://localhost:${PORT}`);
});
