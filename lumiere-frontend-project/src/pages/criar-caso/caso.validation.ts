import * as Yup from 'yup';

export const createCaseSchema = Yup.object().shape({
  titulo: Yup.string()
    .matches(/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/, 'Escreva apenas caracteres maiúsculos ou minúsculos')
    .required('Digite um título para o caso'),

  descricao: Yup.string().required('Digite uma descricao para o caso'),

  nomecliente: Yup.string().email('Padrão email').required('Digite o nome do cliente do caso'),
});
