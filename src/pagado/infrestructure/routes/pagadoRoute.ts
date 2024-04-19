import express from 'express';
import { PaymentController } from '../controller/pagadoContoller';
export const route = express.Router();

route.post('/pagado', PaymentController.createPayment);

export default route;