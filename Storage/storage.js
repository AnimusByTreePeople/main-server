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
//get accounts
module.exports = upload;
