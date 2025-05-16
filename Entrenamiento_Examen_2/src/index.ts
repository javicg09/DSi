import express from 'express';
import { connectDB } from './db/mongoose.js';

const PORT = 3000;
const app = express();

app.use(express.json());

app.get('/ping', (_, res) => {
    res.send('pong')
})

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log('App listening on port = ${PORT}');
    })
})
