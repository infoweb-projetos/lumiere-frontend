export interface SignUpLawyer {
  email: string;
  password: string;
  passwordConfirm: string;
  cnpj: string;
  historico: string;
  nome: string;
}

export interface SignUpLawyerResponse {
  nome: string;
  email: string;
  cnpj: string;
}

export interface UnauthorizedError {
  statusCode: number;
  message: string;
  error: string;
}

import { AxiosError } from 'axios';
export type ApiError = AxiosError<UnauthorizedError>;
