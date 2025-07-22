import express from 'express';
import {register} from '../controller/AuthController.js';

const Route = express.Router();


//All Routes
Route.post('/auth/register', register);

export default Route;