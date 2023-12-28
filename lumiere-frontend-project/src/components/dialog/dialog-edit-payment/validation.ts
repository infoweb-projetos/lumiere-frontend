import * as Yup from 'yup';

export const validationCardSchema = Yup.object().shape({
  numberCard: Yup.string()
    .matches(/\b\d{4}[\s-]?\d{4}[\s-]?\d{4}[\s-]?\d{4}\b/, 'Insira um número de cartão válido!')
    .required('Insira o número do cartão.'),
  dateEnd: Yup.string()
    .matches(/^\d{2}\/\d{2}$/, 'Insira a expiração.')
    .required('Insira a expiração.'),
  cvc: Yup.string()
    .matches(/^\d{3}$/, 'Insira um código CVC válido.')
    .required('Insira o código CVC.'),
  name: Yup.string().required('Insira o nome no cartão.'),
});
