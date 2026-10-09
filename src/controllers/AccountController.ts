import type { Request, Response } from 'express';
import { AccountService } from '../services/AccountService.js';

export class AccountController {
  handle(req: Request, res: Response) {
    const { owner } = req.body;
    const accountService = new AccountService();

    try {
      const newAccount = accountService.execute(owner);
      return res.status(201).json(newAccount);
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  }
}