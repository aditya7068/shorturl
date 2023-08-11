const mongoose = require("mongoose");
const urlShema = new mongoose.Schema(
  {
    ShortId: {
      type: String,
      required: true,
      unique: true,
    },
    redirectId: {
      type: String,
      required: true,
    },
    visitHistory: [
      {
        timestamp: { type: Number },
      },
    ],
  },
  { timestamps: true }
);
const URL = mongoose.model("url", urlShema);
module.exports = URL;
