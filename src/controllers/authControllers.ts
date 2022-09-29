import * as authServices from "../services/authServices";
import { Request, Response } from "express";
import { userData } from "../types/userTypes";

export async function createUser(req: Request, res: Response){
    const { email, username, password } = req.body;
    const user: userData = {
        email,
        username,
        password
    }
    await authServices.createUser(user);
    return res.sendStatus(201);    
}