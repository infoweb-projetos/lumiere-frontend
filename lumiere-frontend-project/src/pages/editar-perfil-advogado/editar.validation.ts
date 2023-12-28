import * as Yup from 'yup';

export const validationEditarSchemaLaywer = Yup.object({
  name: Yup.string().required('Digite seu nome completo'),
  email: Yup.string()
    .matches(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/, 'Insira um email válido!')
    .required('Insira seu email.'),


  cnpj: Yup.string()
    .required('Digite seu CNPJ')
    .matches(/^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/, 'Insira um CNPJ válido.'),
  historico: Yup.string(),
});

export const validationEditarSchemaCliente = Yup.object({
  name: Yup.string().required('Digite seu nome completo'),
  email: Yup.string()
    .matches(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/, 'Insira um email válido!')
    .required('Insira seu email.'),

});
