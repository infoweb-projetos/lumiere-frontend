import axiosInstance from '@/api/axiosinstance';

export interface Payment {
  id: string;
  quantia: number;
  pago: boolean;
  criadoEm: string;
  atualizadoEm: string;
  casoId: string;
}

export const GetPayment = async (): Promise<Payment[]> => {
  const payments = await axiosInstance.get<Payment[]>('/pagamento');

  return payments.data;
};
