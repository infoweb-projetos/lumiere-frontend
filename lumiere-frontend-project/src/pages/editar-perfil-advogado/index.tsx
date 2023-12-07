import {DateCalendar} from '@mui/x-date-pickers/DateCalendar'; 
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useEffect, useState } from 'react';
import * as Yup from 'yup';
import { ErrorsForm} from './caso.interface';
import { useMutation, useQuery } from 'react-query';
import {createCaseSchema} from './caso.validation'
import { ApiError, CreateCaseResponse } from '../../api/services/casos/criarCaso.interface';
import { createCase } from '../../api/services/casos';
import { MenuLogin } from '../../components/menu/menu-login';
import { MenuNoLogin } from '../../components/menu/menu-no-login';
import { DisplayH1 } from '../../components/texts/display-sm/h1';
import { Label } from '../../components/label';
import { InputText } from '../../components/input/input-text';
import { MontInfo } from '../../components/texts/monteserrat/info';
import { InputTextArea } from '../../components/input/input-textarea';
import { useNavigate, useParams } from 'react-router-dom';
import { signUpLawyer } from '../../api/services/advogados';
import { SignUpLawyerResponse } from '../../api/services/advogados/singUpLawyer.interface';
import { validationEditarSchema } from './editar.validation';
import { InputPassword } from '../../components/input/input-password';
import { MontP } from '../../components/texts/monteserrat/p';
import { Switch } from '@radix-ui/react-switch';
import * as React from 'react';
import * as Toast from '@radix-ui/react-toast';
import { Button_blue } from '../../components/buttons/button-blue-icon';
import axios from 'axios';
import { GetLawyer } from '../../api/services/advogados/get-lawyers';

interface PropsAdvsList {
    id: number;
    nome: string;
    email: string;
    cnpj: string;
    historico: string  | null;
    areaDeAtuacao: string | null;
  } 


export default function EditarPerfil () {

    const { id } = useParams();
    const advs = useQuery('advs', GetLawyer);
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [cnpj, setCnpj] = useState('');
    const [descricao, setDecricao] = useState('');

    const timerRef = React.useRef(0);



    const [responseError, setResponseError] = useState('');
    const [validationFormError, setValidationFormError] = useState<ErrorsForm>({
      email: '',
      password: '',
      name: '',
      passwordConfirm: '',
    });

    const signUpLawyerMutation = useMutation(signUpLawyer, {
        onSuccess: (data: SignUpLawyerResponse) => {
          console.log(data);
        },
        onError: (error: ApiError) => {
          window.clearTimeout(timerRef.current);
          timerRef.current = window.setTimeout(() => {
            setOpen(true);
          }, 100);
          setResponseError(error.response?.data.message || 'Um erro inesperado ocorreu.');
        },
      });
    
      const validateForm = async (): Promise<boolean> => {
        try {
          await validationEditarSchema.validate(
            {
              name: name,
              email: email,
              password: password,
              passwordConfirm: passwordConfirm,
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
    
    
      async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
    
        const isValid = await validateForm();
    
        if (isValid) {
          console.log(descricao);
          signUpLawyerMutation.mutate({
            email: email,
            nome: name,
            cnpj: cnpjMask(cnpj),
            senha: password,
            historico: descricao ? descricao : null,
            areaDeAtuacao: null,
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
        
        <main className="bg-gray-200 p-48 min-h-screen">
        <DisplayH1>Meu Perfil</DisplayH1>
        
          <div className="bg-blue-300 ">
              

            <form className="flex flex-col gap-6 ">

                            <div className="flex w-full flex-col">
                            <Label forLabel="name" className="text-white">Name</Label>
                            <InputText className="bg-blue-300"onChange={setName} erro={false} placeholder="name" name="name" value={name} />
                            <MontInfo className="text-semantic-red">{validationFormError.name}</MontInfo>
                            </div>
                            <div className="flex w-full flex-col">
                            <Label forLabel="email">Email</Label>
                            <InputText onChange={setEmail} value={email} erro={false} placeholder="email" name="email" className="" />
                            <MontInfo className="text-semantic-red">{validationFormError.email}</MontInfo>
                            </div>
                            <div className="flex w-full flex-col">
                            <Label forLabel="password">Senha</Label>
                            <InputPassword
                                value={password}
                                onChange={setPassword}
                                erro={false}
                                placeholder="password"
                                name="password"
                            />
                            <MontInfo className="text-semantic-red">{validationFormError.password}</MontInfo>
                            </div>
                            <div className="flex w-full flex-col">
                            <Label forLabel="passwordConfirm">Confirmar a senha</Label>
                            <InputPassword
                                value={passwordConfirm}
                                onChange={setPasswordConfirm}
                                erro={false}
                                placeholder="password"
                                name="passwordConfirm"
                            />
                            <MontInfo className="text-semantic-red">{validationFormError.passwordConfirm}</MontInfo>
                            </div>



                            <div className="flex w-full flex-col">
                            <Label forLabel="historico">Descrição</Label>
                            <textarea
                                maxLength={200}
                                className=" rounded border-[1px] bg-gray-200 pl-4 pr-4 pt-2 font-mont text-gray-800 transition-all focus:outline-none focus:outline-offset-0 focus:outline-gray-400/50"
                                name="historico"
                                value={descricao}
                                onChange={(e) => setDecricao(e.target.value)}
                            ></textarea>
                            <MontInfo className="text-semantic-red">{validationFormError.historico}</MontInfo>
                            </div>
                            <div className="flex w-full flex-col">
                            <Label forLabel="cnpj">CNPJ</Label>
                            <InputText erro={false} placeholder="CNPJ" name="cnpj" value={cnpjMask(cnpj)} onChange={setCnpj} />
                            <MontInfo className="text-semantic-red">{validationFormError.cnpj}</MontInfo>
                            </div>
                            <Button_blue size="sm" title="Editar" type="submit" />
                        </form>
                        
                    
                    {/* Toast Error */}
                    <Toast.Provider swipeDirection="right">
                        <Toast.Root
                        className="data-[state=open]:animate-slideIn data-[state=closed]:animate-hide data-[swipe=end]:animate-swipeOut flex flex-col gap-x-[15px] rounded-md bg-semantic-red p-[15px] font-mont shadow-black data-[swipe=cancel]:translate-x-0 data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=cancel]:transition-[transform_200ms_ease-out]"

                        >
                        <Toast.Title className="mb-[5px] font-mont text-[15px] font-bold text-gray-200 [grid-area:_title]">
                            Infelizmente ocorreu um erro.
                        </Toast.Title>
                        <Toast.Description asChild>
                            <MontInfo className="text-[12px] text-white/80">{responseError}</MontInfo>
                        </Toast.Description>
                        </Toast.Root>
                        <Toast.Viewport className="fixed bottom-0 right-0 z-[2147483647] m-0 flex w-[390px] max-w-[100vw] list-none flex-col gap-[10px] p-[var(--viewport-padding)] outline-none [--viewport-padding:_25px]" />
                    </Toast.Provider>
                    




            </div>
            </main>
                    
                    
            
                            
      );
    };
    