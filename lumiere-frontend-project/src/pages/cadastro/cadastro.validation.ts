/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import * as Yup from 'yup';

export const validationCadastroSchemaFirst = Yup.object({
  name: Yup.string().required('Digite seu nome completo'),
  email: Yup.string()
    .matches(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/, 'Insira um email válido!')
    .required('Insira seu email.'),
  password: Yup.string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*[\]{}()?"\\,><':;|_~`=+-])[a-zA-Z\d!@#$%^&*[\]{}()?"\\,><':;|_~`=+-]{8,99}$/,
      'Precisa ter 8 caracteres, 1 em maiúsculo, 1 caractere especial e 1 número',
    )
    .required('Insira sua senha.'),
  passwordConfirm: Yup.string()
    .oneOf([Yup.ref('password')], 'As senhas precisam ser iguais.')
    .required('Por favor, reensira a sua senha.'),
  privacy: Yup.bool().oneOf([true], 'Para continuar é necessário aceitar nossos termos.'),
});

export const validationCadastroSecond = Yup.object({
  cnpj: Yup.string()
    .required('Digite seu CNPJ')
    .matches(/^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/, 'Insira um CNPJ válido.'),
  historico: Yup.string(),
});
