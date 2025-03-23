import { Router } from "express";
import { getAllUsers, userLogin, userSignup } from "../controllers/user_controllers.js";
import { loginValidator, signupValidator, validate } from "../utils/validators.js";

const userRouters=Router();

userRouters.get('/',getAllUsers)
userRouters.post('/signup',validate(signupValidator),userSignup)
userRouters.post('/login',validate(loginValidator),userLogin)


export default userRouters;