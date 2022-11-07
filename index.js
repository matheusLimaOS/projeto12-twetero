import express from 'express'

const app = express();

app.post("/sign-up",(req,res)=>{
    console.log(req.body);
    res.send('OK');
})
