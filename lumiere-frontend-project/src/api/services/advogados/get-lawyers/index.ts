import axiosInstance from '../../../axiosinstance';
import { ResponseLawyer } from './get-lawyer.interface';

export const GetLawyer = async (): Promise<ResponseLawyer[]> => {
  const adv = await axiosInstance.get<ResponseLawyer[]>('/advogado');
  return adv.data;
};
