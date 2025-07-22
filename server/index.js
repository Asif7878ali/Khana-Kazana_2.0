import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import Route from './route/Routes.js'
import Connection from './modal/Database.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 2000;

//middleware 
app.use(
    cors({
      origin : [process.env.ORIGIN],
      methods : ['GET', 'POST', 'PATCH', 'DELETE'],
      credentials : true
    })
);

//routes
app.use('/api/route', Route);

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });

Connection().then(() => {
   app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
   });
});