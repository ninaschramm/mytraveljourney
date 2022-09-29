import { Router } from "express";

import { createUserSchema } from "../schemas/authSchemas";

import { createUser } from "../controllers/authControllers";

import { validateSchema } from "../middlewares/ValidateSchema";

const authRouter = Router();

authRouter.post("/signup", validateSchema(createUserSchema), createUser);
//authRouter.post("/signin", );

export default authRouter;