const { Router } = require('express');
const router = Router()
const { cofeController } = require('../controllers/cofe.controller')


router.get('/drinks', cofeController.cofeAllGet)
router.get('/drinks/in-stock', cofeController.cofeGetInstock);
router.get('/drinks/:id', cofeController.cofeGetId);
router.post('/drinks', cofeController.cofePost)
router.delete('/drinks/:id', cofeController.cofeDelete);
router.patch('/drinks/:id', cofeController.cofePatch)






module.exports = router
