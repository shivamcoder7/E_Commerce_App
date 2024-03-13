/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */
const functions = require("firebase-functions");
const { onRequest } = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51ORyyFSFt8DWQKdukqFenZQKzTf0xXkhRetZmHd4IdZF57HK24t9WuOsIejA5AmQzC8R2pHw9Y9knyF7VWD8MKXU00VLHsRBha"
);

//API

//App config
const app = express();

//Middlewares(process the info/data)
app.use(cors({ origin: true }));
app.use(express.json());

//API routes
app.get("/", (request, response) => response.status(200).send("hello World"));
// app.get("/shivam", (req, res)=> res.status(200).send("Hare Krishna"));
app.post("/payments/create", async (req, res) => {
  const total = req.query.total;

  console.log("Payment reciept recieved BOOM!!! for this amount>>>", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "usd",
  });

  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

//Listen Command
exports.api = functions.https.onRequest(app);

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

//Example end point
//http://127.0.0.1:5001/e-commerce-web-dccd0/us-central1/api
