const dotenv = require("dotenv");
dotenv.config(); // 👈 LOAD ENV VARIABLES FIRST

const app = require("./app");
const connectDB = require("./config/db");

connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`)
);
