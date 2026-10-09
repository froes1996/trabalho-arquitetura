import type { Account } from '../models/Account.js';

// Simulando um banco de dados em memória
const accountsDB: Account[] = [];

export class AccountRepository {
  create(owner: string): Account {
    const newAccount: Account = {
      id: String(Date.now()), // Gera um ID único simples
      owner,
      balance: 0 // Toda conta nova começa com saldo zero
    };
    
    accountsDB.push(newAccount);
    return newAccount;
  }

  findAll(): Account[] {
    return accountsDB;
  }
}