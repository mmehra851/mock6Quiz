const express = require("express");

const {quizModel} = require("../Model/quiz");

const quizRouter = express.Router();

require("dotenv").config();

quizRouter.use(express.json());

quizRouter.post("/add",async(req,res)=>{
    try{
        let newquiz = new quizModel(req.body);
        await newquiz.save();
        res.send({message:"New Quiz Added Successfully", error : false});
    }catch(error){
        res.send({message:error.message});
    }
})

quizRouter.get("/all",async(req,res)=>{
    try{
        let findall = await quizModel.find();

        if(findall.length ==0){
            res.send("No quizes available")
        }else{
            res.send({data:findall , error : false});
        }
        
    }catch(error){
        res.send({message:error.message});
    }
})

quizRouter.get("/quiz/:id",async(req,res)=>{
    try{
        let findOne = await quizModel.find({_id:req.params.id});
        
        res.send({data:findOne , error : false});
        
    }catch(error){
        res.send({message:error.message});
    }
})



quizRouter.patch("/edit/:id",async(req,res)=>{

    try{

        await quizModel.findByIdAndUpdate({_id:req.params.id},req.body);

        res.send({message:"quiz edited successfully"});

    }catch(error){
        res.send({message:error.message});
    }
})

quizRouter.delete("/delete/:id",async(req,res)=>{
    try{

        await quizModel.findByIdAndDelete(req.params.id);

        res.send({message:"quiz deleted successfully"});

    }catch(error){

        res.send({message:error.message});
    }
})

module.exports = {
    quizRouter
}