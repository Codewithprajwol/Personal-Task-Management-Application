import express from 'express';
import 'dotenv/config';
import { AppDataSource } from './config/connectdb.js';
import taskRoutes from './routes/task.routes.js';
import cors from 'cors';
const app = express();
app.use(cors());
app.use(express.json());
app.use('/', taskRoutes);
app.listen(3000, () => {
    AppDataSource.initialize().then(() => {
        console.log('Data source has been intialized');
    }).catch((err) => console.log(err.message));
    console.log('Server is listening at port 3000');
});
