import * as express from 'express';
var mongoose = require("mongoose");
const bodyparser = require('body-parser')
// const { DynamoDBClient, ListTablesCommand } = require("@aws-sdk/client-dynamodb");
// const { DynamoDB } = require("@aws-sdk/client-dynamodb");
var AWS = require("aws-sdk");

var router = require("express").Router();
const app = express();
const port = 3000;

// Body-parser middleware
app.use(bodyparser.urlencoded({ extended: false }))
app.use(bodyparser.json())

app.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  return console.log(`server is listening on ${port}`);
});

AWS.config.update({ region: 'us-east-2' });
const db = new AWS.DynamoDB.DocumentClient();

//loading Routes in app's local object
app.use(router);
require("./routes/routes")(router);