import { query } from "../../../db/db";
import { Pagado } from "../../dominio/entities/pagado";
import { PaymentService } from "../../dominio/services/pagodoService";

export class PaymentRepository implements PaymentService {

    createPayment = async (pagado: Pagado): Promise<any>  => {
        const sql = 'INSERT INTO pagado (datos) VALUES (?)';
        const params = [pagado.datos];

        try {
            const result = await query(sql, params);
            return result;
        } catch (error ) {
            console.log('Hubo un error al crear el pago', error)
        }
    }
}