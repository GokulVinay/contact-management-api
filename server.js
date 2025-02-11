require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./src/config/db");
const app = express();
app.use(express.json());
app.use(cors());
app.get('/', (req, res) => {
    res.send('Hello, World!'); // Change this to whatever you want
  });
app.use(require("./src/middleware/errorHandler"));
connectDB();
app.use("/api/contacts", require("./src/routes/contactRoutes"));
app.use(require("./src/middleware/errorHandler"));
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
module.exports = app;
