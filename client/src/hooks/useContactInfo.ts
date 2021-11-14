import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ErrorMessage } from '../constants';
import { setFieldError } from '../store/actions';
import { State } from '../store/reducers';

export const useContactInfo = () => {
  const { email, firstName, lastName, message } = useSelector((state: State) => state.contact);
  const dispatch = useDispatch();

  useEffect(() => {
    if (email.touched) {
      if (!email.value) {
        dispatch(
          setFieldError({
            reducerName: 'contact',
            name: 'email',
            errorMessage: ErrorMessage.EMPTY_FIELD,
          }),
        );
        return;
      }
      if (!email.value.match(/[\w.-]+@\w+\.\w{2,}/g)) {
        dispatch(
          setFieldError({
            reducerName: 'contact',
            name: 'email',
            errorMessage: "Cet email n'est pas valide.",
          }),
        );
        return;
      }
    }

    if (email.value)
      dispatch(setFieldError({ reducerName: 'contact', name: 'email', errorMessage: '' }));
  }, [dispatch, email.value, email.touched]);

  useEffect(() => {
    if (firstName.touched) {
      if (!firstName.value) {
        dispatch(
          setFieldError({
            reducerName: 'contact',
            name: 'firstName',
            errorMessage: ErrorMessage.EMPTY_FIELD,
          }),
        );
        return;
      }
      if (firstName.value.match(/[\d\W]+/g)) {
        dispatch(
          setFieldError({
            reducerName: 'contact',
            name: 'firstName',
            errorMessage: ErrorMessage.INVALID_FIRSTNAME,
          }),
        );
        return;
      }
    }

    if (firstName.value)
      dispatch(setFieldError({ reducerName: 'contact', name: 'firstName', errorMessage: '' }));
  }, [dispatch, firstName.touched, firstName.value]);

  useEffect(() => {
    if (lastName.touched) {
      if (!lastName.value) {
        dispatch(
          setFieldError({
            reducerName: 'contact',
            name: 'lastName',
            errorMessage: ErrorMessage.EMPTY_FIELD,
          }),
        );
        return;
      }
      if (lastName.value.match(/[\d\W]+/g)) {
        dispatch(
          setFieldError({
            reducerName: 'contact',
            name: '',
            errorMessage: ErrorMessage.INVALID_LASTNAME,
          }),
        );
        return;
      }
    }

    if (lastName.error && lastName.value)
      dispatch(setFieldError({ reducerName: 'contact', name: 'lastName', errorMessage: '' }));
  }, [dispatch, lastName.touched, lastName.value, lastName.error]);

  useEffect(() => {
    if (!message.value && message.touched) {
      dispatch(
        setFieldError({
          reducerName: 'contact',
          name: 'message',
          errorMessage: ErrorMessage.EMPTY_FIELD,
        }),
      );
      return;
    }

    if (message.error && message.value)
      dispatch(setFieldError({ reducerName: 'contact', name: 'message', errorMessage: '' }));
  }, [dispatch, message.touched, message.value, message.error]);

  return {
    email: {
      ...email,
      name: 'email',
    },
    message: {
      ...message,
      name: 'message',
    },
    firstName: {
      ...firstName,
      name: 'firstName',
    },
    lastName: {
      ...lastName,
      name: 'lastName',
    },
    setError: (name: string, errorMessage: string) =>
      dispatch(setFieldError({ reducerName: 'contact', name, errorMessage })),
  };
};
