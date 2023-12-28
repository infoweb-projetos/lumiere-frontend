export interface Cliente {
    email: string;
    senha: string;
    // passwordConfirm: string;
    nome: string;
    isAdvogado: boolean | null;
    
  }
  
  export interface ClienteResponse {
    nome: string;
    email: string;
  }
  
  export interface UnauthorizedError {
    statusCode: number;
    message: string;
    error: string;
  }
  
  import { AxiosError } from 'axios';
  export type ApiError = AxiosError<UnauthorizedError>;
  