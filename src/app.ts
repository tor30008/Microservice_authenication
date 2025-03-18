import express , { Request , Response } from 'express';
import {checkDB} from './Config/db.config';
import * as path from 'path';
import https from 'https';
import fs from 'fs';
import dotenv from 'dotenv';


const app = express();
const port = 8000;
const HOST = '0.0.0.0';


app.get('/test',(req:Request,res:Response) => {
    console.log("/test");
    res.json("test");
});

app.listen(port ,async() => {
    checkDB();
    console.log("Start Backend API");
})