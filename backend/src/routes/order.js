const express =require('express');

const router =express.Router();
const OrderController =require('../controllers/order');

router.post('/',OrderController.create)
router.get('/admin/:id',OrderController.getOrderByAdmin)
router.get('/buyer/:id', OrderController.getOrderByBuyer)

module.exports=router;