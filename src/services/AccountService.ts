import { AccountRepository } from '../repositories/AccountRepository.js';

export class AccountService {
  private accountRepository: AccountRepository;

  constructor() {
    this.accountRepository = new AccountRepository();
  }

  execute(owner: string) {
    // Regra de negócio: Não pode abrir conta sem nome do titular
    if (!owner || owner.trim() === '') {
      throw new Error('O nome do titular é obrigatório para abrir uma conta.');
    }

    // Se passou na validação, manda salvar
    return this.accountRepository.create(owner);
  }
}