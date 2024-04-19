import { Pagado } from "../entities/pagado";

export interface PaymenstMqtt {
    sendPayments(payments: Pagado): Promise<any>
}