import mongoose, { Schema} from "mongoose";

const BookSchema = new Schema({
    title: { type: String, required: true, unique: true },
    author: { type: String, required: true},
    published: {type: Date, required: true}
})

const BookModel = mongoose.model("Book", BookSchema);

export default BookModel;