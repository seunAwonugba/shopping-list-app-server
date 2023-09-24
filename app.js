require("dotenv").config();
const express = require("express");
const { StatusCodes, ReasonPhrases } = require("http-status-codes");
const { sequelize } = require("./models/index");
const itemRouter = require("./routers/itemRouters");

const app = express();

const port = process.env.PORT;
const host = process.env.HOST;

app.use(express.json());
app.use("/api/v1", itemRouter);

app.get("/api/v1", (req, res) => {
  res.status(StatusCodes.OK).json({
    success: true,
    data: "Home page",
  });
});

app.all("*", (req, res) => {
  res.status(StatusCodes.NOT_FOUND).json({
    success: false,
    data: ReasonPhrases.NOT_FOUND,
  });
});

const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log(`⚡️[database]: Connection has been established successfully.`);

    app.listen(port, host, () => {
      console.log(`⚡️[server]: Server is running at http://${host}:${port}`);
    });
  } catch (error) {
    console.error("😔[database]: Unable to connect to the database:", error);
  }
};

startServer();
