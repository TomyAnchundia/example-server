import {Router} from 'express'
import TestController from '../controllers/index.js'

const {Test} = TestController


const router = Router()

//GET
router.get('/get-date-time', Test.getDateTime)
router.get('/info-device', Test.getInfoDevice)


export default router;


// https://example-server-04ab.onrender.com/v1/integracion-plataformas/api/test/info-device