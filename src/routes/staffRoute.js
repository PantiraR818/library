const express = require('express');
const router = express.Router();
const staffController = require('../controllers/staffController');
const auth = require('../middleware/auth');

router.post("/addStaff",staffController.addStaff);
router.post("/login",staffController.login);

router.put("/:id",auth,staffController.updateStaff);

module.exports = router;


// const express = require('express');
// const router = express.Router();
// // เรียกใช้
// const staffController = require('../controllers/staffController');
// const auth = require('../middleware/auth');

// router.post("/addstaff",staffController.addStaff);
// router.post("/login",staffController.login);

// router.put("/:id",auth,staffController.updateStaff);


// // exports ออกไปใช้งานด้านนอก
// module.exports = router;

