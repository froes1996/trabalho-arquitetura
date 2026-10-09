import { Router } from 'express';
import { AccountController } from './controllers/AccountController.js';

const routes = Router();
const accountController = new AccountController();

// Rota de Health Check (mantida)
routes.get('/health', (req, res) => {
  res.json({ status: "ok" });
});

// Nova Funcionalidade: Abertura de Conta Corrente
routes.post('/accounts', accountController.handle);

export { routes };