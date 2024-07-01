import os from 'os'

const getDateTime = (req, res) => {
    const Hora = new Date()
    res.json(Hora)
    console.log(Hora);
}

const getInfoDevice = (req, res) => {
    const info = {
        plataforma: os.platform(), // 'darwin', 'win32', 'linux'
        arquitectura: os.arch(), // 'x64', 'arm', 'ia32'
        numeroCPUs: os.cpus().length,
        memoriaLibre: os.freemem(),
        memoriaTotal: os.totalmem(),
        tiempoActivo: os.uptime(), // en segundos
        hostname: os.hostname(),
        red: os.networkInterfaces(),
    }
    res.json(info)
}


export default {
    getDateTime,
    getInfoDevice
}