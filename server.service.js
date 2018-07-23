module.exports = {
  name: 'server',
  actions: {
    getABigBuffer(ctx) {
      const {size = 128 * 1024} = ctx.params
      return Buffer.allocUnsafe(size)
    }
  }
}