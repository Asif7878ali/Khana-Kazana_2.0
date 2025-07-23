import express from 'express';
import {register} from '../controller/AuthController.js';
import { validateRegister } from '../utils/validation/validateRegister.js';

const Route = express.Router();


//All Routes
Route.post('/auth/register', validateRegister,  register); // first is validation next is api

export default Route;