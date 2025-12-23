const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();
const db = admin.firestore();

exports.logEntry = functions.https.onRequest(async (req, res) => {
  const { location, type } = req.body;

  await db.collection("entries").add({
    location,
    type,
    timestamp: new Date()
  });

  res.send("Entry logged");
});
