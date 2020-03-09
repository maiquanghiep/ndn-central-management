var express = require('express');
var router = express.Router();
const grpc = require("../util/grpc/grpc")
/* GET users listing. */
router.get('/', async function(req, res, next) {
  try {
    const grpcClient = await grpc()
    grpcClient.NFDStatusReport({}, (err, response) => {
      if (err) {
        console.log(err)
        return 
      }
      console.log(response)
    })
    res.send('respond with a resource');
  } catch (err) {
    console.log(err)
  }
});

module.exports = router;
