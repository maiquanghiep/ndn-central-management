const createNfdClient = require("../util/grpc/grpc")

const GetNfdReport = (req, res) => {
  const grpcClient = createNfdClient()
  grpcClient.NFDStatusReport({}, (err, response) => {
    if (err) {
      return res.json(err)
    }
    res.json(response.report)
  })
}

module.exports = {
  GetNfdReport
}