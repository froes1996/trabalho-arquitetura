import { Router } from 'express';
// IMPORTANTE: verbatimModuleSyntax exige 'import type' para tipos
import type { Request, Response } from 'express';

const routes = Router();

// Rota 1: Health Check
routes.get('/health', (req: Request, res: Response) => {
    res.json({ status: "ok" });
});

// Rota 2: Accounts (Mockada)
routes.get('/accounts', (req: Request, res: Response) => {
    const mockedAccounts = [
        { id: 1, owner: "Motorista João da Silva", balance: 1500.50, status: "active", type: "logistics" },
        { id: 2, owner: "Transportadora XPTO", balance: 45000.00, status: "active", type: "corporate" },
        { id: 3, owner: "Motorista Carlos Souza", balance: 340.20, status: "inactive", type: "logistics" }
    ];
    
    res.json(mockedAccounts);
});

export { routes };