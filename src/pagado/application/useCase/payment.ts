import { Pagado } from "../../dominio/entities/pagado";
import { PaymentService } from "../../dominio/services/pagodoService";


export class PaymentServiceImpl implements PaymentService {

    constructor(private paymentRepo : PaymentService) {}

    async createPayment(pagado: Pagado): Promise<any> {
        return await this.paymentRepo.createPayment(pagado);
    }
}