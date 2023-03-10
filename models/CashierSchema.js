const mongoose = require("mongoose");

const schema=mongoose.schema

const cashierSchema=new schema({
    firstName: {
        type: String,
        required: true,
      },
      lastName: {
        type: String,
        required: true,
      },
    cashierID: {
        type: Number,
        default: 0,
      },
      UID: {
        type: String,
        required: true,
      },
    },
    { timestamps: true 

});
module.exports = mongoose.model("CashierAccount", cashierSchema);

