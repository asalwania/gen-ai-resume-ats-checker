const app = require("./src/app");
const dotenv = require("dotenv");
const connectDB = require("./src/config/database");

dotenv.config();
connectDB();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
