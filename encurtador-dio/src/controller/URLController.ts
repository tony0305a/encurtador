import { Request, Response } from "express";
import shortid from 'shortid'
import { configURL } from "../config/Constants";

export class URLController{
    public async shorten(req:Request,res:Response):Promise<void>{
        const { originalURL } = req.body
        const hash = shortid.generate()
        const shortURL = `${configURL.API_URL}/${hash}`
        res.json({originalURL,hash,shortURL})
    }

    public async redirect(req:Request,res:Response):Promise<void>{
        const { hash } = req.params
        const url = {
            originalURL: "https://cloud.mongodb.com/v2/629ff0941131ef1ef94031c7#clusters",
            hash: "VRuS4uDJs",
            shortURL: "http://localhost:3000/VRuS4uDJs"
        }
        res.redirect(url.originalURL)
    }
}