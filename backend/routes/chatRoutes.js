const express = require('express');
const {protect} = require("../middleware/authMiddleware")
const {accessChat} = require("../controllers/chatControllers");
const {fetchChats} = require("../controllers/chatControllers");
const {createGroupChat} = require("../controllers/chatControllers");
const {renameGroup,removeFromGroup,addToGroup} = require("../controllers/chatControllers");
 
const router = express.Router();


router.route('/').post(protect, accessChat);
router.route('/fetch').get(protect, fetchChats);
router.route('/group').post(protect, createGroupChat);
router.route('/rename').put(protect, renameGroup);
router.route('/groupremove').put(protect, removeFromGroup);
router.route('/groupadd').put(protect, addToGroup);

module.exports = router