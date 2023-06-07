const express=require("express");
const nftController=require("./../controllers/nftControllers");

// const {
//     getAllNFTs,
//     addNFT,
//     getNFTById,
//     patchNFT,
//     deleteNFT}=require("./../controllers/nftControllers");

const router=express.Router();
//routes for nfts
router.route('/').get(nftController.getAllNFTs).post(nftController.addNFT);
router.route('/:id').get(nftController.getNFTById).patch(nftController.patchNFT).delete(nftController.deleteNFT);
// router.route('/').get(getAllNFTs).post(addNFT);
// router.route('/:id').get(getNFTById).patch(patchNFT).delete(deleteNFT);

module.exports=router;