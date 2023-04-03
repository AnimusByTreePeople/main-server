const Account = require("../models/accountModel");
//get accounts
const getAccounts = async (req, res) => {
  const accounts = await Account.find({}).sort({ createdAt: -1 });
  res.status(200).json(accounts);
};
const getBagCount = async (req, res) => {
  const bags = await Account.find({}).sort({ bagCount: -1 });
  console.log(bags);
  const count = bags.reduce(addCount, 0);
  const out = {
    bagCount: count,
    highest: { name: bags[0].name, count: bags[0].bagCount },
  };
  res.status(200).json(out);
  //returns the total number of bags and the highest bag count owner
};
//taking the bag count and summing up the total
const addCount = (total, currentAcc) => total + currentAcc.bagCount;
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

const getAccountByMob = async (req, res) => {
  const { mobile } = req.params;
  console.log(mobile);
  const account = await Account.findOne({
    mobile: mobile,
  });
  console.log(account);
  if (!account) {
    return res.status(404).json({ error: "Account not found" });
  }
  return res.status(200).json(account);
};
//create a new account
const createNewAccount = async (req, res) => {
  console.log("creating new account");
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
  // if (!account) {
  //   account = await Account.findOneAndUpdate(
  //     { mobile: mobile },
  //     { ...req.body },
  //     {
  //       returnOriginal: false,
  //     }
  //   );
  // }
  // console.log(account);
  if (!account) return res.status(400).json({ error: "No account found" });
  res.status(200).json(account);
};

const updateAccountByMob = async (req, res) => {
  const { mobile } = req.params;

  console.log(mobile.lenght);

  console.log({ ...req.body });
  console.log({ mobile: mobile });
  const account = await Account.findOneAndUpdate(
    { mobile: mobile },
    { ...req.body },
    {
      returnOriginal: false,
    }
  );

  if (!account) return res.status(400).json({ error: "No account found" });
  res.status(200).json(account);
};
//exports
module.exports = {
  getAccount,
  getAccounts,
  createNewAccount,
  updateAccount,
  getAccountByMob,
  updateAccountByMob,
  getBagCount,
};
