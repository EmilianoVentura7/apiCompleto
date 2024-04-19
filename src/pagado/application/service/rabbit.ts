import { connectToRabbitMQ } from "../../../rabbit/configRbbit";
import { Pagado } from "../../dominio/entities/pagado";
import { PaymenstMqtt } from "../../dominio/services/pagadoRabbit";

export class PaymentRepositoryMqtt implements PaymenstMqtt {
     async sendPayments(payments: Pagado): Promise<boolean> {
        try {
            const channel = await connectToRabbitMQ();
            await channel?.sendToQueue("pagado", Buffer.from(JSON.stringify({message: 'venta creada', payments})));
            console.log("Pago enviado a RabbitMQ:", payments);
            await channel?.close();
            return true;
          } catch (error) {
            console.error("Error al enviar pago a RabbitMQ:", error);
            return false;
          }
        }
}