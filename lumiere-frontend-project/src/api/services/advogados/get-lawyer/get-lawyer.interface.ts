export interface ResponseLawyer {
  id: string;
  nome: string;
  email: string;
  cnpj: string;
  historico?: string;
  areaDeAtuacao?: string;
}

export interface ParamsLawyer {
  id: string;
}
