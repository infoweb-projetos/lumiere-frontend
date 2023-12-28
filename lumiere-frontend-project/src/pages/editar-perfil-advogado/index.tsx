import { useEffect, useState } from 'react';
import * as Yup from 'yup';
import { useMutation, useQuery } from 'react-query';
import { MenuLogin } from '../../components/menu/menu-login';
import { MenuNoLogin } from '../../components/menu/menu-no-login';
import { DisplayH1 } from '../../components/texts/display-sm/h1';
import { validationEditarSchemaLaywer, validationEditarSchemaCliente } from './editar.validation';
import * as React from 'react';
import { GetLawyer } from '../../api/services/advogados/get-lawyers';
import { InputEdit } from '../../components/input/input-edit';
import { Profile, Root } from '../../api/services/user/profile';
import { ErrorsForm } from '../cadastro/cadastro.interface';
import { ApiError } from '../../api/auth/singIninterface';
import { editLawyer, signUpLawyer } from '../../api/services/advogados';
import { MontInfo } from '../../components/texts/monteserrat/info';
import { DisplayH3 } from '../../components/texts/display-sm/h3';
import { TextAreaEdit } from '../../components/input/textarea-edit';
import { Footer } from '../../components/footer';
import * as Toast from '@radix-ui/react-toast';
import { Label } from '../../components/label';
import { InputPassword } from '../../components/input/input-password';
import { InputPasswordEdit } from '../../components/input/input-password-edit';
import { Button_blue } from '../../components/buttons/button-blue-icon';
import { ButtonYellow } from '../../components/buttons/button-yellow-icon';
import { useNavigate } from 'react-router-dom';
import { editCliente } from '../../api/services/clientes';

export default function EditarPerfil () {

    const a = false;
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cnpj, setCnpj] = useState('');
    const [descricao, setDecricao] = useState('');
    const [areaatuacao, setAreaAtuacao] = useState('');
    const [isAdvogado, setisAdvogado] = useState(Boolean);

    const [dataUser, setDataUser] = useState<Root | undefined>()

    const timerRef = React.useRef(0);



    const [responseError, setResponseError] = useState('');
    const [validationFormError, setValidationFormError] = useState<ErrorsForm>({
      email: '',
      password: '',
      name: '',
      passwordConfirm: '',     
    });
    
    const mutateProfile = useMutation(Profile, {
      onSuccess: (data) => {
        console.log(data)
        setDataUser(data)
        setName(data.nome)
        setEmail(data.email)
        setDecricao(data.historico)
        setCnpj(data.cnpj)
        setPassword(data.senha)
        setisAdvogado(data.isAdvogado)
      }, onError: () => {
        console.log(isAdvogado)
      }
    })

    const editLawyerMutation = useMutation(editLawyer, {
      onSuccess: () => {
      },
      onError: (error: ApiError) => {
        setResponseError(error.response?.data.message || 'Um erro inesperado ocorreu.');
      },
    });
    const editClientMutation = useMutation(editCliente, {
      onSuccess: (data) => {
        console.log("Sucesso na edição do cliente:", data);
      },
      onError: (error: ApiError) => {
        setResponseError(error.response?.data.message || 'Um erro inesperado ocorreu.');
      },
      
    });

    useEffect(() => {
      mutateProfile.mutate()
    },[])
    {/*Laywer*/}
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
          console.log(descricao);
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

      {/*Client*/}
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
          console.log("aaaaaa");
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
        
        {a ? <MenuNoLogin /> : <MenuLogin />}

        
        <main className='bg-gray-200 min-h-screen '>
        <DisplayH1 className='pl-32 pr-32 pt-24 pb-8 '>Meu perfil</DisplayH1>
        {isAdvogado ?  
        <div>

        </div>
        
        
        
        
        
        :
        <>
        <form className='bg-blue-300 flex flex-col items-center h-full w-full gap-y-6 p-8' onSubmit={(e) => onSubmitClient(e)}>
            <div><img className="-rotate-90" src="elizia-advogada.svg"></img></div>
            <div className='flex flex-col w-1/4'>
              <label className="font-dm text-white text-2xl">Nome completo</label>
              <InputEdit className=" h-10 rounded border-[1px] border-2 border-white text-base text-black bg-white" name="name" placeholder={name} onChange={setName} value={name} erro={false}></InputEdit>
              <MontInfo className="text-semantic-red">{validationFormError.name}</MontInfo>
            </div>
            <div className='flex flex-col w-1/4'>
              <label className="font-dm text-white text-2xl">Email</label>
              <InputEdit className="h-10 rounded border-[1px] border-2 border-white text-base bg-white text-black" name="email" placeholder={email} onChange={setEmail} value={email} erro={false}></InputEdit>
              <MontInfo className="text-semantic-red">{validationFormError.email}</MontInfo>
            </div>
            <div className='flex flex-col w-1/4'>
              <label className="font-dm text-white text-2xl">Senha</label>
              <InputPasswordEdit
                value={password}
                onChange={setPassword}
                erro={false}
                placeholder={password}
                name="password"
              />
              <MontInfo className="text-semantic-red">{validationFormError.password}</MontInfo>
            </div>
              <button className="hover:bg-blue-800 bg-text-[20px] bg-primary-500 w-fit font-mont text-white pt-3 pb-3 pl-6 pr-6 rounded-sm"type="submit">Salvar alterações</button>
            </form>
          
          </>
          }

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
    };
    