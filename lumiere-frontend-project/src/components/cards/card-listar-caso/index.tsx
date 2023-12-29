import { MontP } from '../../texts/monteserrat/p';
import { DialogDelete } from '@/components/dialog/dialog-delete';

interface ILinha {
  isAdvogado: boolean;
  id: string;
  titulo: string;
  createdAt: string;
  advogadoName: string;
  clienteName: string;
  descricao: string;
  refetch: () => void;
}

export const LinhaCaso = ({
  titulo,
  createdAt,
  advogadoName,
  clienteName,
  descricao,
  refetch,
  id,
  isAdvogado,
}: ILinha) => {
  const date = new Date(createdAt);

  return (
    <>
      <MontP className=" text-yellow-100 w-fit rounded-sm bg-secondary-500 p-2 font-mont">{titulo}</MontP>
      <MontP>{descricao}</MontP>
      <MontP>{clienteName}</MontP>
      <MontP>{advogadoName}</MontP>
      <MontP className=" font-mont ">{date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear()}</MontP>
      {isAdvogado && <DialogDelete id={id} refetch={refetch} />}
    </>
  );
};
