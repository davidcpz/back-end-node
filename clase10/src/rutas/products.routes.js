import express from 'express';
import {getAllProducs, getProductById} from '../controllers/products.controller.js';

const router = express.Router();


router.get('/products', getAllProducs);

router.get('/products/:id', getProductById);



export default router;


