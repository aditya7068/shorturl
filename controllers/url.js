const URL = require("../models/url");
const shortid = require("shortid");
async function handleURL(req, res) {
  const body = req.body;
  if (!body.url) return res.status(400).json({ error: "url is required" });
  const shortID = shortid();
  await URL.create({
    shortId: shortID,
    redirectId: body.url,
    visitHistory: [],
  });
  console.log("jii");
  return res.json({ id: shortID });
}
module.exports = {
  handleURL,
};
