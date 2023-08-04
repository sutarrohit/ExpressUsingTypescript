import { Request } from "express";
import { IUser } from "./src/interfaces/userInterfaces";
declare module "express" {
  export interface Request {
    user?: IUser;
  }
}
