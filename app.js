const express=require('express');
const bodyparser=require('body-parser');
const app=express();
const ejs=require('ejs')
var sp;
var speedA=[];
app.use(express.static("public1"));
app.use(express.json());
app.use(bodyparser.urlencoded({extended:true}));
app.set('view engine','ejs');
app.get('/',function(req,res){
  res.render('index');
});
app.post('/result',function(req,res){
  sp=req.body.speed;
  speedA=req.body.speedArray;
})
app.post('/',function(req,res){
  res.render('result',{userSpeed:sp,speedAr:speedA});
})
app.listen(3000,function(){
  console.log('server starts on port 3000');
})
