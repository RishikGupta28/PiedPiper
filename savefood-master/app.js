const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const Food = require('./formModel');




app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine","ejs");

app.use(express.static(__dirname + '/public'));

app.get("/",function(req,res){
	res.render("mainpage");
});

app.post('/enterData',async function(req,res){
    try{
        const newOrg = await Food.create({
            name:req.body.name,
            address:req.body.address,
            amount:req.body.amount
        });
        console.log(newOrg);
        res.status(201).json({
            status:'success',
            data:{
                data:newOrg
            }
        });
        }
    catch(err)
        {
            console.log(err);
            res.status(400).json({
                status:'fail',
                message:err
            });
        }
});

app.get('/findData',async function(req,res){
    try{
        const newOrg = await Food.find().sort("-createdAt");
        console.log(newOrg);
        res.status(201).json({
            status:'success',
            data:{
                data:newOrg
            }
        });
        }
    catch(err)
        {
            console.log(err);
            res.status(400).json({
                status:'fail',
                message:err
            });
        }
});
module.exports = app;