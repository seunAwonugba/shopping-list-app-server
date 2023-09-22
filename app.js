require("dotenv").config();
const express = require("express");
const { StatusCodes, ReasonPhrases } = require("http-status-codes");
const app = express();

const port = process.env.PORT;
const host = process.env.HOST;

app.get("/", (req, res) => {
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

app.listen(port, host, () => {
    console.log(`⚡️[server]: Server is running at http://${host}:${port}`);
});
