const express=require("express");
const nftController=require("./../controllers/nftControllers");

// const {
//     getAllNFTs,
//     addNFT,
//     getNFTById,
//     patchNFT,
//     deleteNFT}=require("./../controllers/nftControllers");

const router=express.Router();
//to check id is exist
//router.param("id",nftController.checkId);
//routes for nfts
router
    .route('/')
    .get(nftController.getAllNFTs)
    //.post(nftController.checkBody,nftController.addNFT);
    .post(nftController.createNFT);
router
    .route('/:id')
    .get(nftController.getNFTById)
    .patch(nftController.updateNFT)
    .delete(nftController.deleteNFT);
// router.route('/').get(getAllNFTs).post(addNFT);
// router.route('/:id').get(getNFTById).patch(patchNFT).delete(deleteNFT);

module.exports=router;