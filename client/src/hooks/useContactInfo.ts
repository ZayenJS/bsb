import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { State } from '../store/reducers';

export const useContactInfo = () => {
  const [errors, setErrors] = useState({
    email: '',
    firstName: '',
    lastName: '',
    message: '',
  });
  const { email, firstName, lastName, message } = useSelector((state: State) => state.contact);

  useEffect(() => {
    if (email.touched) {
      if (!email.value)
        return setErrors((prevErrors) => ({ ...prevErrors, email: 'Ce champ est obligatoire.' }));

      if (!email.value.match(/[\w.-]+@\w+\.\w{2,}/g))
        return setErrors((prevErrors) => ({ ...prevErrors, email: "Cet email n'est pas valide." }));
    }

    return setErrors((prevErrors) => ({ ...prevErrors, email: '' }));
  }, [email.value, email.touched]);

  useEffect(() => {
    if (firstName.touched) {
      if (!firstName.value)
        return setErrors((prevErrors) => ({
          ...prevErrors,
          firstName: 'Ce champ est obligatoire.',
        }));

      if (firstName.value.match(/[\d\W]+/g))
        return setErrors((prevErrors) => ({
          ...prevErrors,
          firstName: 'Les chiffres et symboles sont interdits dans le prénom.',
        }));
    }

    return setErrors((prevErrors) => ({ ...prevErrors, firstName: '' }));
  }, [firstName.touched, firstName.value]);

  useEffect(() => {
    if (lastName.touched) {
      if (!lastName.value)
        return setErrors((prevErrors) => ({
          ...prevErrors,
          lastName: 'Ce champ est obligatoire.',
        }));

      if (lastName.value.match(/[\d\W]+/g))
        return setErrors((prevErrors) => ({
          ...prevErrors,
          lastName: 'Les chiffres et symboles sont interdits dans le nom.',
        }));
    }

    return setErrors((prevErrors) => ({ ...prevErrors, lastName: '' }));
  }, [lastName.touched, lastName.value]);

  useEffect(() => {
    if (!message.value && message.touched)
      return setErrors((prevErrors) => ({ ...prevErrors, message: 'Ce champ est obligatoire.' }));

    return setErrors((prevErrors) => ({ ...prevErrors, message: '' }));
  }, [message.touched, message.value]);

  return { errors };
};
