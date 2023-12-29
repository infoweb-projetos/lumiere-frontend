import { Case, Categories } from '../../user/me';

export interface ResponseLawyer {
  id: string;
  nome: string;
  email: string;
  cnpj: string;
  historico: string;
  areaDeAtuacao: string;
  casos: Case[];
  categorias: Categories[];
}
