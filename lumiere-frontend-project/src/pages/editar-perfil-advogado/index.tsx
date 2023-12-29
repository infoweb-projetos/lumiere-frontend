import { useEffect, useState } from 'react';
import * as Yup from 'yup';
import { useMutation } from 'react-query';
import { DisplayH1 } from '../../components/texts/display-sm/h1';
import { validationEditarSchemaLaywer, validationEditarSchemaCliente } from './editar.validation';
import * as React from 'react';
import { InputEdit } from '../../components/input/input-edit';
import { Profile, Root } from '../../api/services/user/profile';
import { ErrorsForm } from '../cadastro/cadastro.interface';
import { ApiError } from '../../api/auth/singIninterface';
import { editLawyer } from '../../api/services/advogados';
import { MontInfo } from '../../components/texts/monteserrat/info';
import { TextAreaEdit } from '../../components/input/textarea-edit';
import { Footer } from '../../components/footer';
import * as Toast from '@radix-ui/react-toast';
import { InputPasswordEdit } from '../../components/input/input-password-edit';
import { editCliente } from '../../api/services/clientes';
import { Menu } from '@/components/menu/menu';

export default function EditarPerfil() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [descricao, setDecricao] = useState('');
  const [areaatuacao, setAreaAtuacao] = useState('');
  const [isAdvogado, setisAdvogado] = useState(Boolean);

  const [dataUser, setDataUser] = useState<Root | undefined>();

  const [responseError, setResponseError] = useState('');
  const [validationFormError, setValidationFormError] = useState<ErrorsForm>({
    email: '',
    password: '',
    name: '',
    passwordConfirm: '',
  });

  const mutateProfile = useMutation(Profile, {
    onSuccess: (data) => {
      console.log(data);
      setDataUser(data);
      setName(data.nome);
      setEmail(data.email);
      setDecricao(data.historico);
      setCnpj(data.cnpj);
      setPassword(data.senha);
      setisAdvogado(data.isAdvogado);
    },
    onError: () => {
      console.log(isAdvogado);
    },
  });

  const editLawyerMutation = useMutation(editLawyer, {
    onSuccess: (data) => {
      console.log('Sucesso na edição do advogado:', data);
    },
    onError: (error: ApiError) => {
      setResponseError(error.response?.data.message || 'Um erro inesperado ocorreu.');
    },
  });
  const editClientMutation = useMutation(editCliente, {
    onSuccess: (data) => {
      console.log('Sucesso na edição do cliente:', data);
    },
    onError: (error: ApiError) => {
      setResponseError(error.response?.data.message || 'Um erro inesperado ocorreu.');
    },
  });

  useEffect(() => {
    mutateProfile.mutate();
  }, []);
  {
    /*Laywer*/
  }
  const validateFormLaywer = async (): Promise<boolean> => {
    try {
      await validationEditarSchemaLaywer.validate(
        {
          name: name,
          email: email,
          password: password,
          cnpj: cnpjMask(cnpj),
          historico: descricao,
        },
        {
          abortEarly: false,
        },
      );
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const validationErrors = error.inner.reduce<ErrorsForm>((errors, err) => {
          errors[err.path as keyof ErrorsForm] = err.message;
          return errors;
        }, {});
        setValidationFormError(validationErrors);
      }
      return false;
    }
    setValidationFormError({});
    return true;
  };

  async function onSubmitLaywer(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const isValid = await validateFormLaywer();

    if (isValid) {
      editLawyerMutation.mutate({
        email: email,
        nome: name,
        cnpj: cnpjMask(cnpj),
        senha: password,
        historico: descricao ? descricao : null,
        areaDeAtuacao: null,
        isAdvogado: isAdvogado,
      });
    }
  }

  {
    /*Client*/
  }
  const validateFormClient = async (): Promise<boolean> => {
    try {
      await validationEditarSchemaCliente.validate(
        {
          name: name,
          email: email,
        },
        {
          abortEarly: false,
        },
      );
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const validationErrors = error.inner.reduce<ErrorsForm>((errors, err) => {
          errors[err.path as keyof ErrorsForm] = err.message;
          return errors;
        }, {});
        setValidationFormError(validationErrors);
      }
      return false;
    }
    setValidationFormError({});
    return true;
  };

  async function onSubmitClient(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const isValid = await validateFormClient();
    if (isValid) {
      editClientMutation.mutate({
        email: email,
        nome: name,
        senha: password,
        isAdvogado: isAdvogado,
      });
    }
  }

  function cnpjMask(value: string) {
    const onlyDigits = value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
    const formattedCnpj = onlyDigits
      .slice(0, 14) // Limita o CNPJ a 14 dígitos
      .replace(/(\d{2})(\d)/, '$1.$2') // Aplica a formatação com pontos e barras
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1/$2')
      .replace(/(\d{4})(\d)/, '$1-$2');
    return formattedCnpj;
  }

  return (
    <>
      <Menu />

      <main className="min-h-screen bg-gray-200 ">
        <DisplayH1 className="pb-8 pl-32 pr-32 ">Meu perfil</DisplayH1>
        {isAdvogado ? (
          <form
            className="flex h-full w-full flex-col items-center gap-y-6 bg-blue-300 p-8 pb-32 pl-48 pr-48 pt-32"
            onSubmit={(e) => onSubmitLaywer(e)}
          >
            <div className="flex h-1/2 w-1/2 flex-row">
              <div>
                <img className="h-5/4 -rotate-90" src="elizia-advogada.svg"></img>
              </div>
              <div className="ml-10 flex w-full flex-col ">
                <div className="flex w-full flex-col">
                  <label className="font-dm text-2xl text-white">Nome completo</label>
                  <InputEdit
                    className=" h-10 rounded border-2 border-[1px] border-white bg-white text-base text-black"
                    name="name"
                    placeholder="Name"
                    onChange={setName}
                    value={name}
                    erro={false}
                  ></InputEdit>
                  <MontInfo className="text-semantic-red">{validationFormError.name}</MontInfo>
                </div>
                <div className="flex w-full flex-col">
                  <label className="font-dm text-2xl text-white">Histórico de atuação</label>
                  <TextAreaEdit
                    className=" h-32 rounded border-2 border-[1px] border-white bg-white text-base text-black"
                    name="descricao"
                    placeholder={descricao}
                    onChange={setDecricao}
                    value={descricao}
                    erro={false}
                  ></TextAreaEdit>
                  <MontInfo className="text-semantic-red">{validationFormError.name}</MontInfo>
                </div>
              </div>
            </div>
            <div className="flex h-1/2 w-1/2 flex-row gap-x-8">
              <div className="flex h-1/2 w-full flex-col">
                <div className="flex w-full flex-col">
                  <label className="font-dm text-2xl text-white">Email</label>
                  <InputEdit
                    className="h-10 rounded border-2 border-[1px] border-white bg-white text-base text-black"
                    name="email"
                    placeholder={email}
                    onChange={setEmail}
                    value={email}
                    erro={false}
                  ></InputEdit>
                  <MontInfo className="text-semantic-red">{validationFormError.email}</MontInfo>
                </div>
                <div className="flex w-full flex-col">
                  <label className="font-dm text-2xl text-white">Senha</label>
                  <InputPasswordEdit
                    value={password}
                    onChange={setPassword}
                    erro={false}
                    placeholder={password}
                    name="password"
                  />
                  <MontInfo className="text-semantic-red">{validationFormError.password}</MontInfo>
                </div>
              </div>
              <div className="flex h-1/2 w-full flex-col">
                <div className="flex flex-col ">
                  <label className="font-dm text-2xl text-white">CNPJ</label>
                  <InputEdit
                    className="h-10 rounded border-2 border-[1px] border-white bg-white text-base text-black"
                    name="cnpj"
                    placeholder="CNPJ"
                    value={cnpjMask(cnpj)}
                    onChange={setCnpj}
                    erro={false}
                  ></InputEdit>
                  <MontInfo className="text-semantic-red">{validationFormError.email}</MontInfo>
                </div>
                <div className="flex w-full flex-col">
                  <label className="font-dm text-2xl text-white">Áreas de atuação</label>
                  <InputEdit
                    className="h-10 rounded border-2 border-[1px] border-white bg-white text-base text-black"
                    name="areadeatuacao"
                    placeholder="Area de Atuação"
                    value={areaatuacao}
                    onChange={setAreaAtuacao}
                    erro={false}
                  ></InputEdit>
                </div>
              </div>
            </div>
            <button
              className=" bg-text-[20px] mt-8 w-fit rounded-sm bg-primary-500 pb-3 pl-6 pr-6 pt-3 font-mont text-white hover:bg-blue-800"
              type="submit"
            >
              Salvar alterações
            </button>
          </form>
        ) : (
          <>
            <form
              className="flex h-full w-full flex-col items-center gap-y-6 bg-blue-300 p-8 pb-32 pt-32"
              onSubmit={(e) => onSubmitClient(e)}
            >
              <div>
                <img className="-rotate-90" src="elizia-advogada.svg"></img>
              </div>
              <div className="flex w-1/4 flex-col">
                <label className="font-dm text-2xl text-white">Nome completo</label>
                <InputEdit
                  className=" h-10 rounded border-2 border-[1px] border-white bg-white text-base text-black"
                  name="name"
                  placeholder={name}
                  onChange={setName}
                  value={name}
                  erro={false}
                ></InputEdit>
                <MontInfo className="text-semantic-red">{validationFormError.name}</MontInfo>
              </div>
              <div className="flex w-1/4 flex-col">
                <label className="font-dm text-2xl text-white">Email</label>
                <InputEdit
                  className="h-10 rounded border-2 border-[1px] border-white bg-white text-base text-black"
                  name="email"
                  placeholder={email}
                  onChange={setEmail}
                  value={email}
                  erro={false}
                ></InputEdit>
                <MontInfo className="text-semantic-red">{validationFormError.email}</MontInfo>
              </div>
              <div className="flex w-1/4 flex-col">
                <label className="font-dm text-2xl text-white">Senha</label>
                <InputPasswordEdit
                  value={password}
                  onChange={setPassword}
                  erro={false}
                  placeholder={password}
                  name="password"
                />
                <MontInfo className="text-semantic-red">{validationFormError.password}</MontInfo>
              </div>
              <button
                className="bg-text-[20px] mt-8 w-fit rounded-sm bg-primary-500 pb-3 pl-6 pr-6 pt-3 font-mont text-white hover:bg-blue-800"
                type="submit"
              >
                Salvar alterações
              </button>
            </form>
          </>
        )}

        {/*Toast*/}
        <Toast.Provider swipeDirection="right">
          <Toast.Title className="mb-[5px] font-mont text-[15px] font-bold text-gray-200 [grid-area:_title]">
            Infelizmente ocorreu um erro.
          </Toast.Title>
          <Toast.Description asChild>
            <MontInfo className="text-[12px] text-white/80">{responseError}</MontInfo>
          </Toast.Description>
          <Toast.Viewport className="fixed bottom-0 right-0 z-[2147483647] m-0 flex w-[390px] max-w-[100vw] list-none flex-col gap-[10px] p-[var(--viewport-padding)] outline-none [--viewport-padding:_25px]" />
        </Toast.Provider>
        <Footer />
      </main>
    </>
  );
}
