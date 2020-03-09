const grpc = require('grpc')
const protoLoader = require('@grpc/proto-loader')
const path = require('path');
const PROTO_PATH = path.join(__dirname, 'nfd_agent.proto');

const createConnection = async () => {
  try {
    const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
      keepCase: true,
      longs: String,
      enums: String,
      defaults: true,
      oneofs: true,

    });
    const protoDescriptor  = grpc.loadPackageDefinition(packageDefinition);
    const NfdAgentService = protoDescriptor.nfd

    const client = new NfdAgentService.NFDRouterAgent('10.10.9.109:50051',
      grpc.credentials.createInsecure())
    return client
  } catch (err) {
    console.log(err)
  }
}

module.exports = createConnection