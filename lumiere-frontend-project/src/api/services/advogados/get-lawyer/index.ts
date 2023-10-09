import axiosInstance from '../../../axiosinstance';
import { ParamsLawyer, ResponseLawyer } from './get-lawyer.interface';

export const GetLawyerUnic = async ({ id }: ParamsLawyer): Promise<ResponseLawyer> => {
  const adv = await axiosInstance.get<ResponseLawyer>(`/advogado/${id}`);
  return adv.data;
};
