import { FC, FormEvent, useState } from 'react';
import { ErrorMessage } from '../../constants';
import { useContactInfo } from '../../hooks/useContactInfo';
import { useFieldTouched } from '../../hooks/useFieldTouched';
import { useNotification } from '../../hooks/useNotification';
import { useSendMail } from '../../hooks/useSendMail';
import { MailStatus } from '../../models';
import Button from '../Button/Button';
import Field from '../Field/Field';
import Heading from '../Heading/Heading';
import Loader from '../Loader/Loader';
import Notification from '../Notification/Notification';
import OwnerInfos from '../OwnerInfos/OwnerInfos';
import Portal from '../Portal/Portal';

import classes from './LetsMeet.module.scss';

export interface LetsMeetProps {}

const LetsMeet: FC<LetsMeetProps> = ({ children }) => {
  const [state, setState] = useState({ loading: false });
  const { email, firstName, lastName, message, setError } = useContactInfo();
  const { sendMail, resetMail, mailStatus, notification } = useSendMail();
  const { resetNotification } = useNotification('contact');
  const { 1: touchFirstName } = useFieldTouched('firstName', 'contact');
  const { 1: touchLastName } = useFieldTouched('lastName', 'contact');
  const { 1: touchEmail } = useFieldTouched('email', 'contact');
  const { 1: touchMessage } = useFieldTouched('message', 'contact');

  const formSubmitHandler = (event: FormEvent) => {
    if (notification) return;
    event.preventDefault();
    let hasError = !!(email.error || firstName.error || lastName.error || message.error);

    if (!hasError) {
      for (const field of [email, firstName, lastName, email, message]) {
        const { value } = field;
        if (!value) {
          setError(field.name, ErrorMessage.EMPTY_FIELD);
          hasError = true;
        }
      }
    }

    if (hasError) {
      return;
    }

    sendMail();
    setState((prevState) => ({ ...prevState, loading: true }));
  };

  if (notification && state.loading) {
    setState((prevState) => ({ ...prevState, loading: false }));
    setTimeout(resetMail, 10);
  }

  const hasError = !!(email.error || firstName.error || lastName.error || message.error);

  return (
    <>
      <section id="message" className={classes.Container}>
        <header>
          <Heading tag="h3" uppercased>
            Rencontrons-nous !
          </Heading>
        </header>
        <main className={classes.Main}>{children}</main>
        <div className={classes.Footer_Container}>
          <footer className={classes.Footer}>
            <form onSubmit={formSubmitHandler}>
              <small>
                Les champs marqués d'un <span className={classes.Required}>*</span> sont
                obligatoires
              </small>
              <div className={classes.Input_Group}>
                <Field
                  id="firstName"
                  type="text"
                  name="firstName"
                  reducerName="contact"
                  className={classes.Field}
                  label="Prénom *"
                  placeholder=" "
                  errorMessage={firstName.error}
                  onBlur={touchFirstName}
                  autofocus
                />
                <Field
                  id="lastName"
                  type="text"
                  name="lastName"
                  reducerName="contact"
                  className={classes.Field}
                  label="Nom *"
                  placeholder=" "
                  errorMessage={lastName.error}
                  onBlur={touchLastName}
                />
              </div>
              <div className={classes.Input_Group}>
                <Field
                  id="email"
                  type="text"
                  name="email"
                  reducerName="contact"
                  className={classes.Field}
                  label="Email *"
                  placeholder=" "
                  errorMessage={email.error}
                  onBlur={touchEmail}
                />
              </div>
              <div className={classes.Input_Group}>
                <Field
                  id="message"
                  type="textarea"
                  name="message"
                  reducerName="contact"
                  className={classes.Field}
                  label="Message *"
                  placeholder=" "
                  errorMessage={message.error}
                  onBlur={touchMessage}
                />
              </div>
              <Button disabled={!!notification || hasError} className={classes.Button}>
                {state.loading ? (
                  <div className={classes.Loader}>
                    Envoi
                    <Loader type="dots" />
                  </div>
                ) : (
                  <span>Envoyer</span>
                )}
              </Button>
            </form>
            <div>
              <OwnerInfos displayName />
            </div>
          </footer>
        </div>
      </section>
      <Portal nointeraction animate mount={!!notification}>
        <Notification
          resetNotification={resetNotification}
          hasError={mailStatus === MailStatus.ERROR}>
          {notification}
        </Notification>
      </Portal>
    </>
  );
};

export default LetsMeet;
