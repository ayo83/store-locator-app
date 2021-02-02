const express = require('express');
const router = express.Router();
const { getStores, addStore } =require('../controllers/stores')

router.get('/', getStores);
router.post('/', addStore);


module.exports = router;