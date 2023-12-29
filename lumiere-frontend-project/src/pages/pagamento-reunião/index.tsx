import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { BallAlert } from '@/components/ball-alert';
import { useEffect, useState } from 'react';
import { GetPayment, Payment } from '@/api/services/payment/get-payment';
import { useMutation } from 'react-query';
import { Card, CardHeader, CardTitle, CardContent, CardFooter, CardDescription } from '@/components/ui/card';
import { MontP } from '@/components/texts/monteserrat/p';
import { MontH3 } from '@/components/texts/monteserrat/h3';
import { Case, GetUser, User } from '@/api/services/user/me';
import { Checks, Spinner } from '@phosphor-icons/react';
import { Dialog } from '@/components/dialog/dialog-edit-payment';
import { Skeleton } from '@/components/ui/skeleton';
import { GetMeeting, GetMeets } from '@/api/services/meeting/get-meeting';
import { MontInfo } from '@/components/texts/monteserrat/info';
import { Menu } from '@/components/menu/menu';
import { useParams } from 'react-router-dom';
import { MontH1 } from '@/components/texts/monteserrat/h1';
import { Button_blue } from '@/components/buttons/button-blue-icon';

export const DetalhamentoCaso = () => {
  const { id } = useParams();
  const [caso, setCaso] = useState<Case | undefined>();
  const [cliente, setCliente] = useState<any | undefined>();

  const [payments, setPayments] = useState<Payment[] | undefined>();
  const [meetings, setMeetings] = useState<GetMeets[] | undefined>();

  const [user, setUser] = useState<User | undefined>();

  const mutatePayment = useMutation(GetPayment, {
    onSuccess: (data) => {
      setPayments(data);
    },
  });

  const mutateReuniao = useMutation(GetMeeting, {
    onSuccess: (data) => {
      setMeetings(data);
    },
  });

  const mutateUser = useMutation(GetUser, {
    onSuccess: (data) => {
      setUser(data);
      setCaso(data.casos.filter((cas) => cas.id === id)[0]);
    },
  });

  useEffect(() => {
    mutatePayment.mutate();
    mutateUser.mutate();
    mutateReuniao.mutate();
  }, []);

  const paymentsFiltered = payments?.filter((pay) => pay.casoId === caso?.id);
  const meetingsFiltered = meetings?.filter((meet) => meet.casoId === caso?.id);

  if (caso != undefined) {
    return (
      <>
        <Menu />
        <main className="flex min-h-screen w-full flex-col items-center gap-6 bg-gray-200 pb-4 pl-16 pr-16 pt-24">
          <div className="flex w-full max-w-[1528px] flex-col items-center  gap-6">
            <div className="grid grid-cols-[1fr_3fr] gap-8 rounded bg-white p-6">
              <MontH1>{caso.titulo}</MontH1>
              <div>
                <div>
                  <MontH1>Descrição</MontH1>
                  <MontP>{caso.descricao}</MontP>
                </div>

                <div>
                  <MontH1>Cliente</MontH1>
                  <MontP>Maria das Graças</MontP>
                </div>
              </div>
            </div>

            <Tabs defaultValue="pagamentos" className="w-full">
              <TabsList className=" mb-2 rounded bg-gray-400/10">
                <TabsTrigger value="pagamentos">
                  <>
                    Pagamentos
                    <BallAlert n={paymentsFiltered ? paymentsFiltered.length : 0} isLoading={mutatePayment.isLoading} />
                  </>
                </TabsTrigger>
                <TabsTrigger value="reunioes">
                  <>
                    Reuniões
                    <BallAlert n={meetingsFiltered ? meetingsFiltered.length : 0} isLoading={mutateReuniao.isLoading} />
                  </>
                </TabsTrigger>
                {/* <TabsTrigger value="historico" disabled>
                <>Histórico de reuniões</>
              </TabsTrigger> */}
              </TabsList>
              <TabsContent value="pagamentos">
                {mutatePayment.isLoading ? (
                  <div className="grid w-full grid-cols-[1fr_1fr_1fr] gap-4">
                    <div className="col-span-3">
                      <Button_blue referencia={`#`} size="sm" title="Criar pagamento" />
                    </div>
                    <Skeleton className="h-[350px] w-full rounded" />
                    <Skeleton className="h-[350px] w-full rounded" />
                    <Skeleton className="h-[350px] w-full rounded" />
                    <Skeleton className="h-[350px] w-full rounded" />
                  </div>
                ) : (
                  <div className="grid w-full grid-cols-[1fr_1fr_1fr] gap-4">
                    <div className="col-span-3">
                      <Button_blue referencia={`#`} size="sm" title="Criar pagamento" />
                    </div>
                    {paymentsFiltered &&
                      paymentsFiltered.map((payment) => (
                        <Card className="flex h-[350px] w-full flex-col justify-between rounded" key={payment.id}>
                          <div>
                            <CardHeader>
                              <CardTitle>
                                {' '}
                                {user &&
                                  user.casos.map((caso) => {
                                    if (caso.id === payment.casoId) {
                                      return <p key={caso.id}>{caso.titulo}</p>;
                                    }
                                  })}
                              </CardTitle>
                              <CardDescription>
                                Criado em {new Date(payment.criadoEm).toLocaleDateString('pt-BR', { timeZone: 'UTC' })}
                              </CardDescription>
                            </CardHeader>
                            <CardContent>
                              <MontH3>Quantia</MontH3>
                              <MontP>R$ {payment.quantia}</MontP>
                            </CardContent>
                          </div>

                          <CardFooter>
                            {user?.isAdvogado && (
                              <MontP>
                                {payment.pago ? (
                                  <div className="flex items-center gap-2">
                                    <MontP className="mr-2">Pagamento realizado</MontP>
                                    <Checks size={32} className="text-semantic-green" />
                                  </div>
                                ) : (
                                  <div className="flex items-center gap-2">
                                    <MontP className="mr-2">Em andamento</MontP>
                                    <Spinner size={32} className="text-semantic-yellow" />
                                  </div>
                                )}
                              </MontP>
                            )}
                            {!user?.isAdvogado && payment.pago ? (
                              <>
                                <MontP className="mr-2">Pagamento realizado</MontP>
                                <Checks size={32} className="text-blue-800" />
                              </>
                            ) : (
                              !user?.isAdvogado &&
                              !payment.pago && (
                                <Dialog refetchPayment={mutatePayment.mutate} value={payment.quantia} id={payment.id} />
                              )
                            )}
                          </CardFooter>
                        </Card>
                      ))}
                  </div>
                )}
              </TabsContent>
              <TabsContent value="reunioes">
                {mutateReuniao.isLoading ? (
                  <div className="grid w-full grid-cols-[1fr_1fr] gap-2">
                    <div className="col-span-2">
                      <Button_blue referencia={`/Criar-Reuniao/${caso.id}`} size="sm" title="Criar reunião" />
                    </div>
                    <Skeleton className="h-[300px] w-full rounded" />
                    <Skeleton className="h-[300px] w-full rounded" />
                    <Skeleton className="h-[300px] w-full rounded" />
                    <Skeleton className="h-[300px] w-full rounded" />
                  </div>
                ) : (
                  <div className="grid w-full grid-cols-[1fr_1fr] gap-2">
                    <div className="col-span-2">
                      <Button_blue referencia={`/Criar-Reuniao/${caso.id}`} size="sm" title="Criar reunião" />
                    </div>
                    {meetingsFiltered &&
                      meetingsFiltered.map((meet) => (
                        <Card className="flex h-[350px] w-full flex-col justify-between rounded" key={meet.id}>
                          <div>
                            <CardHeader>
                              <CardTitle>
                                {user &&
                                  user.casos.map((caso) => {
                                    if (caso.id === meet.casoId) {
                                      return <p key={caso.id}>{caso.titulo}</p>;
                                    }
                                  })}{' '}
                              </CardTitle>
                              <MontInfo>
                                Criado em {new Date(meet.criadoEm).toLocaleDateString('pt-BR', { timeZone: 'UTC' })}
                                <br />
                              </MontInfo>
                              <CardDescription>
                                {meet.descricao.slice(0, 150)}
                                {meet.descricao.length > 150 && '...'}
                              </CardDescription>
                            </CardHeader>
                            <CardContent className="flex flex-col gap-2">
                              <div className="flex gap-8">
                                <div>
                                  <MontH3>Cliente</MontH3>
                                  <MontP>{meet.nomeCliente}</MontP>
                                  <MontInfo>{meet.emailCliente}</MontInfo>
                                </div>
                                <div>
                                  <MontH3>Advogad@</MontH3>
                                  <MontP>{meet.nomeAdvogado}</MontP>
                                  <MontInfo>{meet.emailAdvogado}</MontInfo>
                                </div>
                              </div>
                              <div className="flex gap-8">
                                <div>
                                  <MontH3>Local</MontH3>
                                  <MontP>{meet.localizacao}</MontP>
                                </div>
                                <div>
                                  <MontH3>Data</MontH3>
                                  <MontP>
                                    {new Date(meet.dataReuniao).toLocaleDateString('pt-BR', { timeZone: 'UTC' })}
                                  </MontP>
                                </div>
                              </div>
                            </CardContent>
                          </div>
                        </Card>
                      ))}
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </>
    );
  }
};
