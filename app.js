const fs=require("fs");
const express=require("express");
const app=express();

//express middleware
app.use(express.json());


// app.get('/',(req,res)=>{
//     res.status(200).send("Hello I am Jitendra!");
// });

// app.get('/',(req,res)=>{
//    res.status(200)
//    .json({
//         message:"Hello I am Jitendra!",
//         address:"Bly"
//     });
// });


// app.post('/',(req,res)=>{
//     res.status(201)
//     .json({
//          message:"Hii"
//      });
//  });
 

//JSON.parse() used to convert the json file to object
const nfts=JSON.parse(
    fs.readFileSync(`${__dirname}/nft-data/data/nft-simple.json`)
);

//console.log(nfts);

//get status: 200
app.get('/api/v1/nfts',(req,res)=>{
    res.status(200).json({
        status:"success",
        results:nfts.length,
        data:{
            nfts:nfts
        }
    });
});

//post status: 201 
app.post('/api/v1/nfts',(req,res)=>{
    //console.log(req);
    console.log(req.body);
    res.send("Post NFT");
        
});

const port=8000;
app.listen(port,()=>{
    console.log(`App running on port ${port}...`);
});