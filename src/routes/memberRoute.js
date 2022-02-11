const express = require('express');
const router = express.Router();
const memberController = require('../controllers/memberController');
const auth = require('../middleware/auth');

router.post("/addMember",memberController.addMember);
router.post("/login",memberController.login);

router.put("/:id",memberController.updatemember);

module.exports = router;