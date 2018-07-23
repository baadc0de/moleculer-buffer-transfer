'use strict'
const Codec = require('notepack.io')

const BaseSerializer = require('moleculer/src/serializers/base')
/**
 * JSON serializer for Moleculer
 *
 * @class JSONSerializer
 */
class NotepackSerializer extends BaseSerializer {
  /**
   * Creates an instance of JSONSerializer.
   *
   * @memberof NotepackSerializer
   */
  constructor() {
    super()
  }

  /**
   * Serializer a JS object to Buffer
   *
   * @param {Object} obj
   * @param {String} type of packet
   * @returns {Buffer}
   *
   * @memberof Serializer
   */
  serialize(obj) {
    return Codec.encode(obj)
  }

  /**
   * Deserialize Buffer to JS object
   *
   * @param {Buffer} buf
   * @param {String} type of packet
   * @returns {Object}
   *
   * @memberof Serializer
   */
  deserialize(buf) {
    return Codec.decode(buf)
  }
}

module.exports = NotepackSerializer
