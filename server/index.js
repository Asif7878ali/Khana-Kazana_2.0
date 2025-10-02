import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import Route from './route/Routes.js'
import Connection from './modal/Database.js';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const app = express();
const port = process.env.PORT || 2000;

//Es module __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//middleware 
app.use(
    cors({
      origin : [process.env.ORIGIN],
      methods : ['GET', 'POST', 'PATCH', 'PUT', 'DELETE'],
      credentials : true
    })
);
// required to read JSON body miidleware
app.use(express.json({ limit: '10mb' }));

app.use('/uploads', express.static(path.join(__dirname, 'uploads')))

//routes
app.use('/api/route', Route);


Connection().then(() => {
   app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
   });
});