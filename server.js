const dotenv=require("dotenv");
const mongoose=require("mongoose");
const app=require("./app");

// set the path of .env file
dotenv.config({path:"./config.env"});
//console.log(process.env);
const DB=process.env.DATABASE.replace(
    "<PASSWORD>",
    process.env.DATABASE_PASSWORD
);

mongoose.connect(DB,{
    useCreateIndex:true,
    useFindAndModify:false,
    useNewUrlParser:true,
}).then((con)=>{
    //console.log(con.connection);
    console.log("DB Successfully Connected!");
});

const nftSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"A NFT must have a name"],
        unique:true,
    },
    rating:{
        type:Number,
        default:4.5,
    },
    price:{
        type:Number,
        required:[true,"A NFT must have price"],
    }
});


const NFT=mongoose.model("NFT",nftSchema);

const testNFT=new NFT({
    name:"The smart monkey",
    rating:3.2,
    price:576,
})

testNFT
    .save()
    .then((docNFT)=>{
        console.log(docNFT);
    })
    .catch((error)=>{
        console.log("Error",error);
    });

const port=process.env.PORT || 8000;
//to start the server
app.listen(port,()=>{
    console.log(`App running on port ${port}...`);
});