import { UnauthorizedError } from '../services/advogados/singUpLawyer.interface';
import { AxiosError } from 'axios';

export interface SignInParams {
  email: string;
  senha: string;
}

export interface SignInResponse {
  access_token: string;
}
export type ApiError = AxiosError<UnauthorizedError>;
