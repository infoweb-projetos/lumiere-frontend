import { DeleteCase } from '@/api/services/cases/delete-case';
import { Button_ghost_light } from '@/components/buttons/button-ghost-light';
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogCancel,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogDescription,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { useState } from 'react';
import ReactLoading from 'react-loading';
import { useMutation } from 'react-query';

interface Props {
  id: string;
  refetch: () => void;
}

export const DialogDelete = ({ id, refetch }: Props) => {
  const [open, setOpen] = useState<boolean>(false);

  const mutateDelete = useMutation(DeleteCase, {
    onSuccess: () => {
      refetch();
      setOpen(false);
    },
  });

  const handleDelete = () => {
    mutateDelete.mutate({
      id,
    });
  };

  return (
    <AlertDialog defaultOpen={false} onOpenChange={setOpen} open={open}>
      <AlertDialogTrigger asChild>
        <Button_ghost_light
          title="Excluir caso"
          size="sm"
          func={() => {
            setOpen(true);
          }}
        />
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Deseja deletar o caso?</AlertDialogTitle>
          <AlertDialogDescription>Fazendo isso você não vai recuperar os dados desse caso!</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <button
            disabled={mutateDelete.isLoading}
            onClick={() => {
              handleDelete();
            }}
            className="flex h-10 items-center justify-center rounded bg-semantic-red px-4 text-white hover:bg-semantic-red/80"
          >
            {mutateDelete.isLoading ? (
              <ReactLoading type={'bubbles'} color={'#fff'} height={'24px'} width={'24px'} />
            ) : (
              'Delete'
            )}
          </button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
