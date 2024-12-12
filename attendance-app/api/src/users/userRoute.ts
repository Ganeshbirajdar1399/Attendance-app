import express, { Router } from 'express';
import { login, me, register } from './userController';


const UserRoute = express.Router();

UserRoute.post('/register', register);
UserRoute.post('/login', login);
UserRoute.post('/me', me);

export default UserRoute;
