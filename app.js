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
    fs.readFileSync(`${__dirname}/nft-data/data/nft-sample.json`)
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
    // console.log(req.body);

    // add the new nft data into nft-sample.json file
    const newID=nfts[nfts.length-1].id +1;
    const newNFTs=Object.assign({id:newID},req.body);
    nfts.push(newNFTs);
    
    // write in the existing nft-simple.json file
    fs.writeFile(`${__dirname}/nft-data/data/nft-sample.json`,
        JSON.stringify(nfts),
        (err)=>{
        res.status(201).json({
            status:"success",
            nft :newNFTs
        });
    });
});


// get NFT by id
app.get('/api/v1/nfts/:id',(req,res)=>{
    //to convert the id into int
    const id=parseInt(req.params.id);
    //const id= req.params.id *1;
    const nft=nfts.find((el) => el.id === id);
    console.log(nft);

    if(!nft){
        return res.status(404).json({
            status:"failed",
            message:"Invalid ID",
        });
    }
    res.status(200).json({
        status:"success",
        data:{
            nft,
        },
    });
});


const port=8000;
app.listen(port,()=>{
    console.log(`App running on port ${port}...`);
});


