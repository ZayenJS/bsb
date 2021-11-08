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
    if (!email)
      return setErrors((prevErrors) => ({ ...prevErrors, email: 'Ce champ est obligatoire.' }));

    if (!email.match(/[\w.-]+@\w+\.\w{2,}/g))
      return setErrors((prevErrors) => ({ ...prevErrors, email: "Cet email n'est pas valide." }));

    return setErrors((prevErrors) => ({ ...prevErrors, email: '' }));
  }, [email]);

  useEffect(() => {
    if (!firstName)
      return setErrors((prevErrors) => ({ ...prevErrors, firstName: 'Ce champ est obligatoire.' }));

    if (firstName.match(/[\d\W]+/g))
      return setErrors((prevErrors) => ({
        ...prevErrors,
        firstName: 'Les chiffres et symboles sont interdits dans le prénom.',
      }));

    return setErrors((prevErrors) => ({ ...prevErrors, firstName: '' }));
  }, [firstName]);

  useEffect(() => {
    if (!lastName)
      return setErrors((prevErrors) => ({ ...prevErrors, lastName: 'Ce champ est obligatoire.' }));

    if (lastName.match(/[\d\W]+/g))
      return setErrors((prevErrors) => ({
        ...prevErrors,
        lastName: 'Les chiffres et symboles sont interdits dans le nom.',
      }));
    return setErrors((prevErrors) => ({ ...prevErrors, lastName: '' }));
  }, [lastName]);

  useEffect(() => {
    if (!message)
      return setErrors((prevErrors) => ({ ...prevErrors, message: 'Ce champ est obligatoire.' }));
    return setErrors((prevErrors) => ({ ...prevErrors, message: '' }));
  }, [message]);

  return { errors };
};
