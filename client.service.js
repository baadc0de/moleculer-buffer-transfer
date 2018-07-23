function inspect(x) {
  let rv = ''
  if (x.constructor) {
    rv = x.constructor.name + ' '
  }
  if (typeof x === 'object') {
    rv += Object.keys(x).join(', ').substr(0, 80)
  }
  return rv
}

module.exports = {
  name: 'client',
  async started() {
    await this.broker.waitForServices(['server'])
    this.logger.info('client found server')
    this.timer = setInterval(() => {
      this.doWork()
    }, 250)
  },
  async stopped() {
    clearInterval(this.timer)
  },
  methods: {
    doWork() {
      this.broker.call('server.getABigBuffer', {size: 128 * 1024}).then((res) => {
        this.logger.info('got', inspect(res))
      })
    }
  }
}