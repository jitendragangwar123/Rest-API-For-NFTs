// const fs=require("fs");

// //JSON.parse() used to convert the json file to object
// const nfts=JSON.parse(
//     fs.readFileSync(`${__dirname}/../nft-data/data/nft-sample.json`)
// );

// //middleware for checking the existing NFT ID 
// exports.checkId=(req,res,next,value)=>{
//     //to convert the id into int
//     console.log(`ID:${value}`);
//     const id=parseInt(req.params.id);
//     //const id= req.params.id *1;
//     const nft=nfts.find((el) => el.id === id);
//     //console.log(nft);

//     if(!nft){
//         return res.status(404).json({
//             status:"failed",
//             message:"Invalid ID",
//         });
//     };
//     next();
// };

// //middleware for checking the body params
// exports.checkBody=(req,res,next)=>{
//     if(!req.body.name || !req.body.price){
//         return res.status(400).json({
//             status:"failed",
//             message:"Missing name and price",
//         });
//     };
//     next();
// }


// //get NFT
// exports.getAllNFTs=(req,res)=>{
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
// exports.addNFT=(req,res)=>{
//     //console.log(req);
//     // console.log(req.body);

//     // add the new nft data into nft-sample.json file
//     const newID=nfts[nfts.length-1].id +1;
//     const newNFTs=Object.assign({id:newID},req.body);
//     nfts.push(newNFTs);
    
//     // write in the existing nft-simple.json file
//     fs.writeFile(`${__dirname}/../nft-data/data/nft-sample.json`,
//         JSON.stringify(nfts),
//         (err)=>{
//         res.status(201).json({
//             status:"success",
//             nft :newNFTs
//         });
//     });
// };

// // get NFT by id
// exports.getNFTById=(req,res)=>{
//     const id=parseInt(req.params.id);
//     //const id= req.params.id *1;
//     const nft=nfts.find((el) => el.id === id);
//     //console.log(nft);
//     res.status(200).json({
//         status:"success",
//         data:{
//             nft,
//         },
//     });
// };

// // Update NFT
// exports.updateNFT=(req,res)=>{
//     res.status(200).json({
//         status:"success",
//         data:{
//             nft:"Updating NFT data",
//         }
//     });
// };

// // delete NFT
// exports.deleteNFT=(req,res)=>{
//     res.status(204).json({
//         status:"success",
//         data:null,
//     });
// };


////------------- Model for Schema---------------////

const NFT=require("./../models/nftModel");

//get All NFTs
exports.getAllNFTs=async (req,res)=>{
    try{
        const nfts= await NFT.find();
        res.status(200).json({
            status:"success",
            results:nfts.length,
            data:{
                nfts,
            },
        });
    } catch(error){
        res.status(404).json({
            status:"fail",
            message:error,
        });
    }
};

//Create new NFT
exports.createNFT=async (req,res)=>{
    try{
        const newNFT=await NFT.create(req.body);
        res.status(200).json({
            status:"success",
            data:{
                nft:newNFT,
            },
        });
    } catch(error){
        res.status(400).json({
            status:"fail",
            message:"Invalid data send for NFT",
        });
    }
};

// get NFT by id

exports.getNFTById=async (req,res)=>{
    try{
        const id=parseInt(req.params.id);
        const nft=await NFT.findById(id);
        //console.log(nft);
        res.status(200).json({
            status:"success",
            data:{
                nft,
            },
        });
    } catch(error){
        res.status(404).json({
            status:"fail",
            message:error,
        });    
    }
};

// Update NFT
exports.updateNFT=(req,res)=>{
    res.status(200).json({
        status:"success",
        data:{
            nft:"Updating NFT data",
        }
    });
};

// delete NFT
exports.deleteNFT=(req,res)=>{
    res.status(204).json({
        status:"success",
        data:null,
    });
};
