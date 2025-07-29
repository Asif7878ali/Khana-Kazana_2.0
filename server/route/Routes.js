import express from 'express';
import {register_api , profile_api} from '../controller/AuthController.js'
import { validateProfile, validateRegister } from '../utils/validation/validateRegister.js';

const Route = express.Router();


//All Routes
Route.post('/auth/register', validateRegister,  register_api); // first is validation next is api
Route.put('/auth/profile/:id' , validateProfile ,  profile_api);

export default Route;