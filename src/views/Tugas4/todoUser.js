const express = require('express');
const app = express()
const cors= require('cors')
var jwt= require('jsonwebtoken')
app.use(cors());
app.use(express.urlencoded({extended: false}))
app.use(express.json());

const tampil = require('../backend/user')
const secrit= 'bebas'
app.post('/todouser',(req, res, next)=>{
    tampil.findOne({
        name: req.body.name
    }).then((err, user) => {
        if(err) {
            res.status(500).send({message:err})
            return;
        }
        if(user){
            res.status(400).send({message:"Username is already in use"})
        } 
        next()
    })
},async(req,res)=>{
    const tp=new tampil({
        name:req.body.name,
        password:jwt.sign({foo : `${req.body.password}`},secrit)});
        try{
            
            const simpandata= await tp.save();
            res.json({error:null,data:simpandata});
        }catch(err){
            res.status(400).json({err});
        }
    console.log("prikitiew")
})

app.get('/daftar',async(req, res)=>{
    await tampil.find({},(err,data)=>{
        
        res.json(data);
    }).exec();
})
app.delete('/delete/:id',async(req,res)=>{
        await tampil.findByIdAndDelete({_id:req.params.id},(err,data)=>{
            res.json(data);
        })
    })

app.listen(3000,console.log('running'))