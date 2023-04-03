const multer = require("multer");
const storage = multer.diskStorage({
  destination: (req, file, cd) => {
    console.log();
    cd(null, "./maps");
  },
  filename: (req, file, cd) => {
    console.log();
    cd(null, Date.now() + file.originalname);
  },
});

const upload = multer({
  storage: storage,
});
//get accounts
module.exports = upload;
