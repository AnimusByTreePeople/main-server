const express = require("express");

const {
  createNewAccount,
  getAccount,
  getAccounts,
  updateAccount,
  getAccountByMob,
  updateAccountByMob,
} = require("../Controllers/accountControllers");

const { createMap, upload } = require("../Controllers/mapControllers");

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

router.post("/maps/:uid", upload.single("maps"), createMap);

module.exports = router;
