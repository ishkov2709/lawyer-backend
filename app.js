const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const customersRouter = require("./routes/api/customers");
require("dotenv").config();

const app = express();

const formatLogger = app.get("env") === "development" ? "dev" : "short";

app.use(morgan(formatLogger));
app.use(cors());
app.use(express.json());

app.use("/api/customers", customersRouter);

app.use((_, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

module.exports = app;
