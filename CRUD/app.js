//const express = require('express')
import express, { urlencoded } from 'express'
import connectDB from './connections/connectdb.js'
import {join} from 'path'
import web from "./routes/web.js";
import router from './routes/web.js';
const app = express()
const port = process.env.PORT||'3000'
const DATABASE_URL = process.env.DATABASE_URL || 'mongodb://127.0.0.1:27017';

// call database url
connectDB(DATABASE_URL);

// urlencoded middleware
app.use(express.urlencoded ({extended:false}))

// static files 
app.use('/student',express.static(join(process.cwd(),"public")))
app.use('/student/edit',express.static(join(process.cwd(),"public")))
// set templet engin
  app.set("view engine","ejs");
 //load routes
  app.use ("/student",web);


app.listen(port, () => {
  console.log(`Example app listening at  http://localhost:${port}`)
})