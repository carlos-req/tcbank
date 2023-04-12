const express = require("express");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");
const port = process.env.PORT || 3000;
const transactions = require("./routes/transactionRoutes");
const users = require("./routes/userRoutes");

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/transactions", transactions);
app.use("/api/users", users);

app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));
