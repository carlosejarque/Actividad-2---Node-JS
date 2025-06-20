const booksRoutes = require("./routes/booksRoutes");
const authRoutes = require("./routes/authRoutes");
const express = require("express");
const morgan = require("morgan");

require('dotenv').config();


const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(morgan("dev"));

app.use("/books", booksRoutes);
app.use("/login", authRoutes);

app.use((err, req, res, next) => {

  if (err.isJoi) {
    return res.status(400).json({
      error: "Validation Error",
      message: err.details.map((detail) => detail.message).join(", "),
    });
  }

  console.error(err.stack);
  res.status(500).json({
    error: "Internal Server Error",
    message: err.message || "An unexpected error occurred",
  });
});

app
  .listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
  })
  .on("error", (err) => {
    console.error("Error al iniciar el servidor: ", err);
  });
