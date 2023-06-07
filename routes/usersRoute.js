const express=require("express");
const userController=require("./../controllers/userControllers");

const router=express.Router();
//routes for users
router.route('/').get(userController.getAllUsers).post(userController.createUser);
router.route('/:id').get(userController.getSingleUser).patch(userController.updateUser).delete(userController.deleteUser);

module.exports=router;