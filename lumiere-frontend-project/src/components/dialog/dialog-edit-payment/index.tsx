import { Button_blue } from '@/components/buttons/button-blue-icon';
import { MontH1 } from '@/components/texts/monteserrat/h1';
import { MontP } from '@/components/texts/monteserrat/p';
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogCancel,
  AlertDialogAction,
  AlertDialogFooter,
  AlertDialogHeader,
} from '@/components/ui/alert-dialog';

export const Dialog = () => {
  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <Button_blue size={'sm'} title={'Pagar'} />
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <MontH1>Pagamento</MontH1>
          <MontP>
            This action cannot be undone. This will permanently delete your account and remove your data from our
            servers.
          </MontP>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="h-[44px] font-mont">Cancelar</AlertDialogCancel>
          <AlertDialogAction>
            <Button_blue className="bg-semantic-green" size={'sm'} title={'Salvar'} />
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
