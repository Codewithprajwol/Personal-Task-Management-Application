import express from 'express';
import 'dotenv/config';
import { AppDataSource } from './config/connectdb.js';
const app = express();
app.get('/', (req, res) => {
    res.send('hello from nepal');
});
app.listen(3000, () => {
    AppDataSource.initialize().then(() => {
        console.log('Data source has been intialized');
    }).catch((err) => console.log(err.message));
    console.log('Server is listening at port 3000');
});
