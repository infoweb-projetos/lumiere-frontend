import * as Yup from 'yup';

export const validationLoginSchema = Yup.object().shape({
  email: Yup.string()
    .matches(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/, 'Insira um email válido!')
    .required('Insira seu email.'),
  password: Yup.string().required('Insira sua senha.'),
});
