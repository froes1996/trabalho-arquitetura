import express from 'express';
// IMPORTANTE: no nodenext, imports relativos precisam da extensão .js
import { routes } from './routes.js'; 

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(routes);

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});