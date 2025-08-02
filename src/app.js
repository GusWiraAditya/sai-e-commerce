require("dotenv").config({ path: __dirname + "/../.env" });
const express = require("express");
const app = express();
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");
app.use('/api/products', productRoutes);
app.use(express.json());
app.use("/api/users", userRoutes);
app.get("/", (req, res) => {
  res.send("Welcome to the E-commerce API!");
});
const PORT = process.env.PORT || 3000; // Port unik
app.listen(PORT, () => {
   console.log(`Server running on port ${PORT}`);
   console.log(`Access API at http://localhost:${PORT}/api`);
});
