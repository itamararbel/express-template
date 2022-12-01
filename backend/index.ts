import cors from "cors";
import express from "express";
import config from "./config";
import Router from "./controllers/controller";
import pageNotFound from "./middleWere/pageNotFound";
import sqlInit from "./util/init_sql";
import { catchAll } from './middleWere/catchAll';



const server = express();
sqlInit();
server.use(cors());
server.use(express.json())
server.use("", );
server.use("*",pageNotFound);
server.use(catchAll)
server.listen(config.port, ()=>{console.log("listening on port"+ config.port)})
