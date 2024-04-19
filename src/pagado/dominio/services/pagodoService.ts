import { Pagado } from "../entities/pagado";
export interface PaymentService {
    createPayment(paymentData: Pagado): Promise<any>;
}