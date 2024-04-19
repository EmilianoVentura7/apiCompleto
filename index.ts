import express from 'express';
import cors from 'cors';
import pagadoRoute from './src/pagado/infrestructure/routes/pagadoRoute';
import { conectarWebSocket } from './socket/socket';


const app = express();
const port = 3000;

let corsOptions = {
    origin: '*'
};

app.use(cors(corsOptions));
app.use(express.json());


app.use('/', pagadoRoute);


app.listen(port, () => {
console.log('Servidor corriendo en el puerto', port)
})


conectarWebSocket();
