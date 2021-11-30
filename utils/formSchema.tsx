import valid from 'card-validator';
import * as Yup from 'yup';

export const validationSchema = Yup.object({

  // email: Yup.string().email('Vyplňte správný e-mail').required('Vyplňte e-mail'),
  // phone: Yup.string().required('Vyplňte telefonní číslo'),
  
  cardNumber: Yup.string()
    .when('deliveryType', {
      is: '1',
      then: Yup.string().test(
        'test-number',
        'Neplatné číslo karty',
        value => valid.number(value).isValid
      ).required('Vyplňte číslo karty')
    }),
  expiration: Yup.string()
    .when('deliveryType', {
      is: '1',
      then: Yup.string().required('Vyplňte datum expirace karty')
    }),
  cvv: Yup.string()
    .when('deliveryType', {
      is: '1',
      then: Yup.string().required('Vyplňte číslo CVV')
    }),
  deliveryDay: Yup.string().required('Vyberte den dodání'),
  deliveryTime: Yup.string().required('Vyberte čas, kdy k vám má kurýr přijet'),
  gps: Yup.string().required('Vyplňte doručovací adresu'),
});
