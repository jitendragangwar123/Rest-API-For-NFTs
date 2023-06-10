// If you want to push all the data from static file into DB then use this script
const fs = require("fs");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const NFT = require("./../../models/nftModel");

dotenv.config({ path: "./config.env" });
const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
  })
  .then((con) => {
    //console.log(con.connection);
    console.log("DB Connection Successfully");
  });

const nfts = JSON.parse(
  fs.readFileSync(`${__dirname}/nft-sample.json`, "utf-8")
);

//IMPORT DATA
const importData = async () => {
  try {
    await NFT.create(nfts);
    console.log("DATA successfully Loaded");
    //terminate the server
    process.exit();
  } catch (error) {
    console.log(error);
  }
};

//DELETE DATA
const deleteData = async () => {
  try {
    await NFT.deleteMany();
    console.log("DATA successfully Deleted");
    //terminate the server
    process.exit();
  } catch (error) {
    console.log(error);
  }
};


//argv show the location of file
if (process.argv[2] === "--import") {
  importData();
} else if (process.argv[2] === "--delete") {
  deleteData();
}
