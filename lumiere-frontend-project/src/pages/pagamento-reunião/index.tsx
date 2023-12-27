import { MenuLogin } from '@/components/menu/menu-login';
import { DisplayH1 } from '@/components/texts/display-sm/h1';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { BallAlert } from '@/components/ball-alert';
import { useEffect, useState } from 'react';
import { GetPayment, Payment } from '@/api/services/payment/get-payment';
import { useMutation } from 'react-query';
import { Card, CardHeader, CardTitle, CardContent, CardFooter, CardDescription } from '@/components/ui/card';
import { MontP } from '@/components/texts/monteserrat/p';
import { MontH3 } from '@/components/texts/monteserrat/h3';
import { MontInfo } from '@/components/texts/monteserrat/info';
import { GetUser, User } from '@/api/services/user/me';
import { Button_blue } from '@/components/buttons/button-blue-icon';
import { Checks } from '@phosphor-icons/react';
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogCancel,
  AlertDialogAction,
  AlertDialogFooter,
  AlertDialogHeader,
} from '@/components/ui/alert-dialog';
import { Dialog } from '@/components/dialog/dialog-edit-payment';

export const PagamentoReuniao = () => {
  const [payments, setPayments] = useState<Payment[] | undefined>();
  const [user, setUser] = useState<User | undefined>();

  const mutatePayment = useMutation(GetPayment, {
    onSuccess: (data) => {
      setPayments(data);
    },
  });

  const mutateUser = useMutation(GetUser, {
    onSuccess: (data) => {
      setUser(data);
    },
  });

  useEffect(() => {
    mutatePayment.mutate();
    mutateUser.mutate();
  }, []);

  return (
    <>
      <MenuLogin />
      <main className=" flex min-h-screen w-full flex-col items-center scroll-smooth bg-gray-200 pb-4 pt-24">
        <div className="flex w-full max-w-[1500px] flex-col items-center gap-4">
          <DisplayH1>Casos recentes</DisplayH1>
          <Tabs defaultValue="pagamentos" className="w-full">
            <TabsList>
              <TabsTrigger value="pagamentos">
                <>
                  Pagamentos
                  <BallAlert n={payments ? payments.length : 0} />
                </>
              </TabsTrigger>
              <TabsTrigger value="reunioes">
                <>
                  Reuniões
                  <BallAlert n={2} />
                </>
              </TabsTrigger>
              <TabsTrigger value="historico" disabled>
                <>Histórico de reuniões</>
              </TabsTrigger>
            </TabsList>
            <TabsContent value="pagamentos">
              <div
                className="flex w-full gap-2
              "
              >
                {payments &&
                  payments.map((payment) => (
                    <Card className="w-[400px]">
                      <CardHeader>
                        <CardTitle>
                          {' '}
                          {user &&
                            user.casos.map((c) => {
                              if (c.id === payment.casoId) {
                                return <p>{c.titulo}</p>;
                              }
                            })}{' '}
                        </CardTitle>
                        <CardDescription>
                          <MontInfo>
                            Criado em {new Date(payment.criadoEm).toLocaleDateString('pt-BR', { timeZone: 'UTC' })}
                          </MontInfo>
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <MontH3>Quantia</MontH3>
                        <MontP>R$ {payment.quantia}</MontP>
                      </CardContent>
                      <CardFooter>
                        {!user?.isAdvogado && <MontP>{payment.pago ? 'Pago' : 'Cliente não pagou'}</MontP>}
                        {user?.isAdvogado && payment.pago ? (
                          <>
                            <MontP className="mr-2">Pagamento realizado</MontP>
                            <Checks size={32} className="text-blue-800" />
                          </>
                        ) : (
                          <Dialog />
                        )}
                      </CardFooter>
                    </Card>
                  ))}
              </div>
              
            </TabsContent>
            <TabsContent value="reunioes">Change your Reuniões here.</TabsContent>
          </Tabs>
        </div>
      </main>
    </>
  );
};
