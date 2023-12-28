export interface SignUpLawyer {
  email: string;
  senha: string;
  // passwordConfirm: string;
  cnpj: string;
  historico: string | null;
  nome: string;
  areaDeAtuacao: null;
  isAdvogado: boolean | null;
  
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
