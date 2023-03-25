const express = require("express");
const Map = require("../models/mapModel");

const {
  createNewAccount,
  getAccount,
  getAccounts,
  updateAccount,
  getAccountByMob,
  updateAccountByMob,
} = require("../Controllers/accountControllers");

const multer = require("multer");
const path = require("path");
const storage = multer.diskStorage({
  destination: "maps",
  filename: (req, file, cd) => {
    console.log();
    cd(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({
  storage: storage,
}).single("maps");
const router = express.Router();

router.get("/", getAccounts);

//get one account
router.get("/:uid", getAccount);
router.get("/mobile/:mobile", getAccountByMob);
//post new account
router.post("/", createNewAccount);

router.delete("/:uid", (req, res) => {
  res.json({ mssg: "delete account" });
});

router.put("/:uid", updateAccount);
router.put("/mobile/:mobile", updateAccountByMob);

router.post("/maps/:uid", (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      console.log(err);
    } else {
      const { uid } = req.params.uid;
      console.log(req.body, 1);
      const newMap = new Map({
        name: req.body.name,
        map: {
          data: req.files.filename,
          contentTypes: "image/png",
        },
        UID: uid,
      });
      newMap
        .save()
        .then(() => res.send("sucessfully uploaded"))
        .catch((err) => console.log(err));
    }
  });

  res.send();
});

module.exports = router;
