export interface CreateCase {
  titulo: string;
  descricao: string;
  emailCliente: string;
}

export interface CreateCaseResponse {
  titulo: string;
  descricao: string;
}

export interface UnauthorizedError {
  statusCode: number;
  message: string;
  error: string;
}

import { AxiosError } from 'axios';
export type ApiError = AxiosError<UnauthorizedError>;
