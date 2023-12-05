import http from 'node:http'
import { findOtherAvailablePort } from './freePort.mjs'

const PORT = process.env.PORT ?? 0
const server = http.createServer()

findOtherAvailablePort(PORT).then(port => {
    server.listen(port, () => {
        console.log(`Available port: http://localhost:${port}`)
    })
})