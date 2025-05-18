import express from 'express';
import { connectDB } from './db/mongoose.js';
import booksRouter from "./routers/booksRouter.js"

const PORT = 3000;
const app = express();

app.use(express.json());

app.use("/libros", booksRouter);

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("App listening on port = ${PORT}");
    })
})
