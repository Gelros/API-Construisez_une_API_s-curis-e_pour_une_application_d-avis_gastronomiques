const express = require("express");

const auth = require("../middleware/auth");

const saucesCtrl = require("../controllers/sauces");

const likeCtrl = require("../controllers/like");

const multer = require("../middleware/multer-config");

const router = express.Router();

router.post("/", auth, multer, saucesCtrl.createSauce);

router.get("/:id", auth, saucesCtrl.getOneSauce);

router.delete("/:id", auth, saucesCtrl.delete);

router.put("/:id", auth, multer, saucesCtrl.modify);

router.get("/", auth, saucesCtrl.getSauce);

router.post("/:id/like", auth, multer, likeCtrl.like);

module.exports = router;
