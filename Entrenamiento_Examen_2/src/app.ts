import express from "express";

const app = express();
app.connect(MONGO_URL);

app.use(express.json);

