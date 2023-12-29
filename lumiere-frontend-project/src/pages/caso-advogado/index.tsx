import { useState, useEffect } from 'react';
import { Footer } from '../../components/footer';
import axiosInstance from '../../api/axiosinstance';
import { DisplayH1 } from '@/components/texts/display-sm/h1';
import { LinhaCaso } from '@/components/cards/card-listar-caso';
import { Button_blue } from '@/components/buttons/button-blue-icon';
import { Menu } from '@/components/menu/menu';
import { GetClient } from '@/api/services/clientes/get-user';
import { useMutation } from 'react-query';
import { Cliente } from '@/api/services/clientes/Cliente.interface';
import { GetUser, User } from '@/api/services/user/me';

interface PropsList {
  id: string;
  descricao: string;
  advogadoId: string;
  createdAt: string;
}

export interface Root {
  id: string;
  titulo: string;
  descricao: string;
  criadoEm: string;
  atualizadoEm: string;
  nomeAdvogado: string;
  emailAdvogado: string;
  nomeCliente: string;
  emailCliente: string;
  pagamento: Pagamento;
}

export interface Pagamento {
  id: string;
  quantia: number;
  pago: boolean;
  criadoEm: string;
  atualizadoEm: string;
  casoId: string;
}
export default function CasoAdvogado() {
  const [cases, setCases] = useState<Root[]>([]);
  const [user, setUser] = useState<User>();

  useEffect(() => {
    mutateUser.mutate();
    async function loadCases() {
      const response = await axiosInstance.get('/caso');

      setCases(response.data);
    }
    loadCases();
  }, []);

  const mutateUser = useMutation(GetUser, {
    onSuccess: (data) => {
      setUser(data);
    },
  });

  return (
    <>
      <Menu />
      <main className="flex min-h-screen w-full justify-center bg-gray-200 pl-16 pr-16 pt-24">
        <div className="mb-4  flex w-full max-w-[1500px] flex-col">
          <div className="mb-4 mt-8 flex flex-row justify-between">
            <DisplayH1 className="text-[42px] text-black">Casos</DisplayH1>
            {user?.isAdvogado && (
              <div className="flex flex-row justify-center">
                <Button_blue title="Adicionar Caso" size="sm" referencia="/Criar-Caso" />
              </div>
            )}
          </div>
          <div className="grid grid-cols-6 rounded-t bg-primary-500 p-4 font-mont text-[26px] font-bold text-white">
            <p>Caso</p>
            <p>Descrição</p>
            <p>Cliente</p>
            <p>Advogado</p>
            <p>Data de abertura</p>
            <p></p>
          </div>
          {cases.map((c) => (
            <a
              href={`Casos/${c.id}`}
              key={c.id}
              style={{ textDecoration: 'none' }}
              className="grid grid-cols-6 gap-x-2 bg-white pb-8 pl-4 pr-4 pt-8 hover:bg-white/70"
            >
              <LinhaCaso
                isAdvogado={user?.isAdvogado ? user?.isAdvogado : false}
                refetch={() => {
                  async function loadCases() {
                    const response = await axiosInstance.get('/caso');

                    setCases(response.data);
                  }
                  loadCases();
                }}
                id={c.id}
                titulo={c.titulo}
                createdAt={c.criadoEm}
                advogadoName={c.nomeAdvogado}
                clienteName={c.nomeCliente}
                descricao={c.descricao.slice(0, 100)}
              />
            </a>
          ))}
          {/* <div className="mb-4 mt-8 flex flex-row justify-between">
            <DisplayH1 className="text-[42px] text-black">Casos concluídos</DisplayH1>
          </div>
          <div className="grid grid-cols-6 rounded-sm bg-primary-500 p-4 font-mont text-[26px] font-bold text-white">
            <p>Caso</p>
            <p>Descrição</p>
            <p>Cliente</p>
            <p>Advogado</p>
            <p>Data de abertura</p>
            <p></p>
          </div>
          {cases.map((c) => (
            <div key={c.id} className="grid grid-cols-6 gap-x-2 bg-white pb-8 pl-4 pr-4 pt-8">
              <LinhaCaso
                isAdvogado={user?.isAdvogado ? user?.isAdvogado : false}
                refetch={() => {
                  async function loadCases() {
                    const response = await axiosInstance.get('/caso');

                    setCases(response.data);
                  }
                  loadCases();
                }}
                id={c.id}
                titulo={c.titulo}
                createdAt={c.criadoEm}
                advogadoName={c.nomeAdvogado}
                clienteName={c.nomeCliente}
                descricao={c.descricao.slice(0, 100)}
              />
            </div>
          ))} */}
        </div>
      </main>
    </>
  );
}
