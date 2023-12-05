import net from 'node:net'

export function findOtherAvailablePort(desiredPort) {
    return new Promise((res, rej) => {
        const server = net.createServer()
        
        server.listen(desiredPort , () => {
            const { port }= server.address()
            server.close(() => {
                res(port)
            })
        })

        server.on('error', (err) => {
            if(err.code === 'EADRRINUSE') {
                findAvailablePort(0).then(port => res(port))
            } else {
                rej(err)
            }
        })
    })
}

/* function findAvailablePort () {
    return new Promise((res, rej) => {
        const server = net.createServer()

        server.listen(0, () => {
            const { port } = server.address()
            server.close(() => {
                res(port)
            })
        })

        server.listen('error', (error) => {
            rej(error)
        })
    })
} */
