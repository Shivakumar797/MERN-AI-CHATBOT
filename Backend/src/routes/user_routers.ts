import { Router } from "express";
import { getAllUsers, userLogin, userSignup, verifyUser } from "../controllers/user_controllers.js";
import { loginValidator, signupValidator, validate } from "../utils/validators.js";
import { verifyToken } from "../utils/token_manager.js";

const userRouters=Router();

userRouters.get('/',getAllUsers)
userRouters.post('/signup',validate(signupValidator),userSignup)
userRouters.post('/login',validate(loginValidator),userLogin)
userRouters.get('/auth-status',verifyToken,verifyUser)



export default userRouters;