const express = require("express");
const res = require("express/lib/response");
const app = express();

app.get('/addTwoNumbers/:fNum/:sNum', function (req, res, next) {
  var fNum = parseInt(req.params.fNum)
  var sNum = parseInt(req.params.sNum)
  var result = fNum + sNum || null
  if (result == null) {
    res.json({ result: result, statusCode: 400 }).status(400)
  }
  else { res.json({ result: result, statusCode: 200 }).status(200) }
})

app.get('/addTwoStrings/:fString/:sString', function (req, res, next) {
  var fString = req.params.fString
  var sString = req.params.sString
  var result =  fString + sString || null
  if (result == null) {
    res.json({ result: result, statusCode: 400 }).status(400)
  }
  else { res.json({ result: result, statusCode: 200 }).status(200) }
})

app.get('/divideTwoNumbers/:fNum/:sNum', function (req, res, next) {
  var fNum = parseInt(req.params.fNum)
  var sNum = parseInt(req.params.sNum)
  var result = fNum / sNum || null
  if (result == null || sNum == 0) {
    res.json({ result: result, statusCode: 400 }).status(400)
  }
  else { res.json({ result: result, statusCode: 200 }).status(200) }
})


const port = 8080;
app.listen(port, () => {
  console.log("Listening to port " + port);
})