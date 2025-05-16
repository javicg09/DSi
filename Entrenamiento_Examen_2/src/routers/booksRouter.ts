import { Router } from "express";
import BookModel from "../models/bookModel.js";

const router = Router();

//GET
router.get("/", async (_, res) => {
    try {
        const books = await BookModel.find();
        res.send(books);
    } catch (error) {
        res.status(500).send({error: "no se han encontrado resultados"});
    }
})

export default router;