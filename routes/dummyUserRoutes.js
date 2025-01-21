const express = require('express');
const router=express.Router();

const {getUsers}=require('../controllers/dummyUserControllers');

router.get('/getUsers/limit=:limit&minAge=:minAge&maxAge=:maxAge',getUsers);

module.exports = router;