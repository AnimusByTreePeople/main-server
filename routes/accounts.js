const express = require("express");
const {
  createNewAccount,
  getAccount,
  getAccounts,
  updateAccount,
} = require("../Controllers/accountControllers");
const router = express.Router();

//get accounts
router.get("/", getAccounts);

//get one account
router.get("/:uid", getAccount);

//post new account
router.post("/", createNewAccount);

router.delete("/:uid", (req, res) => {
  res.json({ mssg: "delete account" });
});

router.put("/:uid", updateAccount);
module.exports = router;
