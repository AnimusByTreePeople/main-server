const Account = require("../models/accountModel");
const mongoose = require("mongoose");
//get accounts
const getAccounts = async (req, res) => {
  const accounts = await Account.find({}).sort({ createdAt: -1 });
  res.status(200).json(accounts);
};
//get one account
const getAccount = async (req, res) => {
  const { uid } = req.params;
  console.log(uid);
  const account = await Account.findOne({
    UID: uid,
  });
  console.log(account);
  if (!account) {
    return res.status(404).json({ error: "Account not found" });
  }
  return res.status(200).json(account);
};
//create a new account
const createNewAccount = async (req, res) => {
  const { name, score, mobile, UID } = req.body;
  try {
    const account = await Account.create({
      name,
      score,
      mobile,
      UID,
    });
    res.status(200).json(account);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};
//delete one account

//update one account
const updateAccount = async (req, res) => {
  const { uid } = req.params;

  console.log(uid.lenght);

  console.log({ ...req.body });
  console.log({ UID: uid });
  const account = await Account.findOneAndUpdate(
    { UID: uid },
    { ...req.body },
    {
      returnOriginal: false,
    }
  );
  if (!account) {
    account = await Account.findOneAndUpdate(
      { mobile: uid },
      { ...req.body },
      {
        returnOriginal: false,
      }
    );
  }
  console.log(account);
  if (!account) return res.status(400).json({ error: "No account found" });
  res.status(200).json(account);
};
//exports
module.exports = {
  getAccount,
  getAccounts,
  createNewAccount,
  updateAccount,
};
