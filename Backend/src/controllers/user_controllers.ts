import { log } from "node:console";
import Users from "../models/Users.js"
import {compare, hash} from "bcrypt"
import { createToken } from "../utils/token_manager.js";
import { COOKIE_NAME } from "../utils/constants.js";

export const getAllUsers=async (req,res,next)=>{
    try {

        const users=await Users.find();
        return res.status(200).json({message:"OK",users});
        
    } catch (error) {
        console.log(error);
        console.log("keyy");

        
        return res.status(500).json({message:"ERROR",cause:error.message});
    }
    

}

export const userSignup=async (req,res,next)=>{
    try {

        const {name,email,password}=req.body;
        const existingUser=await Users.findOne({email:email})
        if (existingUser) return res.status(401).send("user alredy registered")
            
        
        const hashedPassword=await hash(password,10);
        const user=new Users({
            name,email,password:hashedPassword
        })

        user.save();


        //cookie

          //cookie
    res.clearCookie(COOKIE_NAME,
        { httpOnly:true,domain:'localhost',signed:true,path:'/'}
     );
     
     const token=createToken(user._id.toString(), user.email, "7d");
     const expires=new Date();
     expires.setDate(expires.getDate()+7)
     res.cookie(COOKIE_NAME,token,{path:"/",domain:"localhost",expires,httpOnly:true,signed:true  });
 
        return res.status(201).json({message:"User created",user});
        
    } catch (error) {
        console.log(error);
        
        return res.status(500).json({message:"ERROR",cause:error.message});
    }

}


export const userLogin=async (req,res,next)=>{
    try {

        const {email,password}=req.body;

        const user= await Users.findOne({email:email});
        if (!user) return res.status(401).send("User not found");
        const isPasswordCorrect= await compare(password,user.password);
    if (!isPasswordCorrect) return res.status(403).send ({message:"Incorrect password"});

    //cookie
    res.clearCookie(COOKIE_NAME,
       { httpOnly:true,domain:'localhost',signed:true,path:'/'}
    );
    const token=createToken(user._id.toString(), user.email, "7d");
    const expires=new Date();
    expires.setDate(expires.getDate()+7)
    res.cookie(COOKIE_NAME,token,{path:"/",domain:"localhost",expires,httpOnly:true,signed:true  });


    return res.status(200).json({ message: "Successfully logged in", userId: user.id.toString() });
        
    } catch (error) {
        console.log(error);
        
        return res.status(500).json({message:"ERROR",cause:error.message});
    }

}


