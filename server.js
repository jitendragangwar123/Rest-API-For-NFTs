const app=require("./app");

const port=8000;
//to start the server
app.listen(port,()=>{
    console.log(`App running on port ${port}...`);
});