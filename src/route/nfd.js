var express = require('express');
var router = express.Router();
const {  
  GetNfdReport
} = require("../controller/nfd")

router.get('/report', GetNfdReport);

module.exports = router;
