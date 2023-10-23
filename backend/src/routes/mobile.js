const express =require('express');

const router =express.Router();
const MobileController =require('../controllers/mobile')

const verifyToken=require('../middlewears/verifyToken')

router.post('/',MobileController.create)
router.put('/:id', MobileController.update)
router.delete('/:id', MobileController.delete)
router.get('/all', MobileController.getAll)
router.get('/:id', MobileController.getOne)
router.get('searchResults',MobileController.search)




module.exports =router;
