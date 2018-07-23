module.exports = {
  logger: true,
  logLevel: 'info',
  transporter: {
    type: 'TCP',
    maxPacketSize: 1 * 1024 * 1024,
  },
  requestTimeout: 5 * 1000,
  // serializer: require('./serializer'), // NOPE
  // serializer: 'Avro', // NOPE
  // serializer: 'MsgPack', // YES
  // serializer: 'ProtoBuf', // NOPE
  // serializer: 'Thrift', // NOPE
  circuitBreaker: {
    enabled: false,
  },
  metrics: true,
  statistics: true,
  maxCallLevel: 10,
  heartbeatInterval: 2,
  heartbeatTimeout: 8, 
}
