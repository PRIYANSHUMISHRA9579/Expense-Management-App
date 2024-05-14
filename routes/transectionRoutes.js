import express from 'express';
import { addTransection, getAllTransection,editTransection,deleteTransection } from '../controllers/transectionCtrl.js';


const router=express.Router();


//routes
//add transection POST method
router.post('/add-transection',addTransection);

//edit transaction
router.post('/edit-transection',editTransection);

//delete transection
router.post('/delete-transection',deleteTransection);


//get transection
router.post('/get-transection',getAllTransection);

export default router;