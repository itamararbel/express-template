import express, { NextFunction, Request, Response } from "express";
import { idNotFound } from "../modal/client_error";

const someRouter = express.Router();

someRouter.get("/all", async (request:Request, response:Response, next:NextFunction) => {
    response.status(200).json(await getAllSomeThing())
})

someRouter.get("/:id", async (request:Request, response:Response, next:NextFunction)=>{
    const id = +request.params.id;
    const resp = await getById(id);
    resp.length === 0 ? next(new idNotFound(id)) : response.status(200).json(resp);
}
)

someRouter.post("/add", async (request:Request, response:Response, next:NextFunction)=>{
    const body = +request.body;
    response.status(201).json(await addNewSomeThing(body))
}
)

someRouter.delete("/:id", async (request:Request, response:Response, next:NextFunction)=>{
    const id = +request.params.id;
    response.status(204).json(await deleteSomeThing(id))
}
)

someRouter.put("/edit", async (request:Request, response:Response, next:NextFunction)=>{
    const body = +request.body;
    response.status(201).json(await updateSomeThing(body))
}
)
export default someRouter;
