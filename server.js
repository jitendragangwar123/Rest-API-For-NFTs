const dotenv=require("dotenv");
const app=require("./app");

//console.log(app.get("env"));   //development environment

// set the path of .env file
dotenv.config({path:"./config.env"});
//console.log(process.env);

const port=process.env.PORT || 8000;
//to start the server
app.listen(port,()=>{
    console.log(`App running on port ${port}...`);
});