import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import testRoutes from './routes/test.routes.js'
import {config} from 'dotenv'

config()
class Server {
    constructor() {
        this.app = express.Router();
        this.router = express.Router();
        this.port = process.env.PORT
        this.paths = {
            tests: '/api/test'
        }
        this.middleware();
        this.routes();
        this.router.use('/v1/integracion-plataformas', this.app);
        this._express = express().use(this.router);
    }
//http://localhost:5000/v1/integracion-plataformas/api/test
    middleware() {
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(morgan('dev'))
    }
    routes() {
        this.app.use(this.paths.tests, testRoutes)
    }
    listen() {
        this._express.listen(this.port, () => {
            console.log(`Servidor corriendo en el puerto ${this.port}`);
        })
    }
}


export default Server;