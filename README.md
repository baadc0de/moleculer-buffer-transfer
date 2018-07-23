# moleculer-buffer-transfer
testing NodeJS Buffer transfer between moleculer services

## running
Run with `docker-compose up`. The debug output will show if Buffers are preserved when transferring or we are getting `{"type": "buffer"}` objects instead.

To try different serializers, edit `moleculer.config.js`. The only serializer that preserves buffers is `MsgPack` which is also unfortunately the slowest.
