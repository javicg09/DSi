import { Router } from "express";
import BookModel from "../models/bookModel.js";
import mongoose from "mongoose";

const router = Router();

//GET
router.get("/", async (_, res) => {
    try {
        const books = await BookModel.find();
        res.send(books);
    } catch (error) {
        res.status(500).send({error: "error al obtener libros de la base de datos"});
    }
});

//GET - id
router.get("/:id", async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(400).send("ID inválido");
        return;
    }

    try {
        const book = await BookModel.findById(id);
        if (!book) {
            res.status(404).send("Libro no encontrado");
            return;
        }
        res.status(201).send(book);
    } catch (error) {
        res.status(500).send({ error: "Error al obtener libros de la base de datos" })
    }
});

//POST
router.post("/", async (req, res) => {
    const { title, author, published } = req.body;

    if (!title || !author || !published) {
        res.status(400).send({ error: 'Faltan campos obligatorios' });
        return;
    }

    try {
        const newbook = await BookModel.create({ title, author, published });
        res.status(201).send(newbook);
    }
    catch (error) {
        res.status(500).send({error: "Error al crear el libro"});
    }
});

//DELETE - id
router.delete("/:id", async (req, res) => {
    const { id } = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(400).send("ID no válido");
        return;
    }

    try {
        const book = await BookModel.findByIdAndDelete(id);
        if (!book) {
            res.status(404).send("Libro no encontrado");
            return;
        }
        res.status(200).send("Libro eliminado");
    } catch (error) {
        res.status(500).send({ error: "Error al acceder a la base de datos"})
    }
});

export default router;