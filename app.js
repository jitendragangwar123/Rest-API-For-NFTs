// const fs=require("fs");
// const express=require("express");
// const morgan=require("morgan");
// const app=express();

// //express middleware
// app.use(express.json());
// //morgan used as a middleware to identify the request
// app.use(morgan("dev"));

// //Custom middleware : Every time it will execute whenever any fuction call
// app.use((req,res,next)=>{
//     console.log("Hii I am the middleware!!");
//     next();
// });

// //custom middleware
// app.use((req,res,next)=>{
//     req.requestTime=new Date().toISOString();
//     //console.log(req.requestTime);
//     next();
// });

// // app.get('/',(req,res)=>{
// //     res.status(200).send("Hello I am Jitendra!");
// // });

// // app.get('/',(req,res)=>{
// //    res.status(200)
// //    .json({
// //         message:"Hello I am Jitendra!",
// //         address:"Bly"
// //     });
// // });


// // app.post('/',(req,res)=>{
// //     res.status(201)
// //     .json({
// //          message:"Hii"
// //      });
// //  });
 

// //JSON.parse() used to convert the json file to object
// const nfts=JSON.parse(
//     fs.readFileSync(`${__dirname}/nft-data/data/nft-sample.json`)
// );

// //console.log(nfts);

// //get NFT
// const getAllNFTs=(req,res)=>{
//     console.log(req.requestTime);
//     res.status(200).json({
//         status:"success",
//         requestTime:req.requestTime,
//         results:nfts.length,
//         data:{
//             nfts:nfts
//         }
//     });
// };
// //post NFT
// const addNFT=(req,res)=>{
//     //console.log(req);
//     // console.log(req.body);

//     // add the new nft data into nft-sample.json file
//     const newID=nfts[nfts.length-1].id +1;
//     const newNFTs=Object.assign({id:newID},req.body);
//     nfts.push(newNFTs);
    
//     // write in the existing nft-simple.json file
//     fs.writeFile(`${__dirname}/nft-data/data/nft-sample.json`,
//         JSON.stringify(nfts),
//         (err)=>{
//         res.status(201).json({
//             status:"success",
//             nft :newNFTs
//         });
//     });
// };
// // get NFT by id
// const getNFTById=(req,res)=>{
//     //to convert the id into int
//     const id=parseInt(req.params.id);
//     //const id= req.params.id *1;
//     const nft=nfts.find((el) => el.id === id);
//     console.log(nft);

//     if(!nft){
//         return res.status(404).json({
//             status:"failed",
//             message:"Invalid ID",
//         });
//     }
//     res.status(200).json({
//         status:"success",
//         data:{
//             nft,
//         },
//     });
// };
// // patch NFT
// const patchNFT=(req,res)=>{
//     const id=parseInt(req.params.id);
//     const nft=nfts.find((el) => el.id === id);
//     console.log(nft);

//     if(!nft){
//         return res.status(404).json({
//             status:"failed",
//             message:"Invalid ID",
//         });
//     }
//     res.status(200).json({
//         status:"success",
//         data:{
//             nft:"Updating NFT data",
//         }
//     });
// };
// // delete NFT
// const deleteNFT=(req,res)=>{
//     const id=parseInt(req.params.id);
//     const nft=nfts.find((el) => el.id === id);
//     console.log(nft);

//     if(!nft){
//         return res.status(404).json({
//             status:"failed",
//             message:"Invalid ID",
//         });
//     }

//     res.status(204).json({
//         status:"success",
//         data:null,
//     });
// };

// //-------User Section 

// const getAllUsers=(req,res)=>{
//     res.status(500).json({
//         status:"error",
//         message:"Internal Server Error",
//     });
// };

// const createUser=(req,res)=>{
//     res.status(500).json({
//         status:"error",
//         message:"Internal Server Error",
//     });
// };

// const getSingleUser=(req,res)=>{
//     res.status(500).json({
//         status:"error",
//         message:"Internal Server Error",
//     });
// };

// const updateUser=(req,res)=>{
//     res.status(500).json({
//         status:"error",
//         message:"Internal Server Error",
//     });
// };

// const deleteUser=(req,res)=>{
//     res.status(500).json({
//         status:"error",
//         message:"Internal Server Error",
//     });
// };


// //routes
// // app.get('/api/v1/nfts',getAllNFTs);
// // app.post('/api/v1/nfts',addNFT);
// // app.get('/api/v1/nfts/:id',getNFTById);
// // app.patch('/api/v1/nfts/:id',patchNFT);
// // app.delete('/api/v1/nfts/:id',deleteNFT);

// // seperate the routes
// const nftsRouter=express.Router();
// const usersRouter=express.Router();


// //routes for nfts
// nftsRouter.route('/').get(getAllNFTs).post(addNFT);
// nftsRouter.route('/:id').get(getNFTById).patch(patchNFT).delete(deleteNFT);

// //routes for users
// usersRouter.route('/').get(getAllUsers).post(createUser);
// usersRouter.route('/:id').get(getSingleUser).patch(updateUser).delete(deleteUser);

// //middleware 
// app.use('/api/v1/nfts',nftsRouter);
// app.use('/api/v1/users',usersRouter);

// const port=8000;
// //to start the server
// app.listen(port,()=>{
//     console.log(`App running on port ${port}...`);
// });





/////----------------MVC Model--------------------/////


const express=require("express");
const morgan=require("morgan");
const nftsRouter=require("./routes/nftsRoute");
const usersRouter=require("./routes/usersRoute");

const app=express();
//express middleware
app.use(express.json());
//morgan used as a middleware to identify the request
app.use(morgan("dev"));

//Custom middleware : Every time it will execute whenever any fuction call
app.use((req,res,next)=>{
    console.log("Hii I am the middleware!!");
    next();
});

//custom middleware
app.use((req,res,next)=>{
    req.requestTime=new Date().toISOString();
    //console.log(req.requestTime);
    next();
});

//router middleware 
app.use('/api/v1/nfts',nftsRouter);
app.use('/api/v1/users',usersRouter);

module.exports=app;