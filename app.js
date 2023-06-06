const express=require("express");
const app=express();


// app.get('/',(req,res)=>{
//     res.status(200).send("Hello I am Jitendra!");
// });

app.get('/',(req,res)=>{
   res.status(200)
   .json({
        message:"Hello I am Jitendra!",
        address:"Bly"
    });
});


app.post('/',(req,res)=>{
    res.status(201)
    .json({
         message:"Hii"
     });
 });
 

const port=8000;
app.listen(port,()=>{
    console.log(`App running on port ${port}...`);
});