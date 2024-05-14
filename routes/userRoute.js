import express from "express";
import {loginController,registerController} from "../controllers/userController.js";

const router1 =express.Router();

//post route|| login user

router1.post("/login",loginController);

//register user || register user

router1.post("/register",registerController);



export default router1;
