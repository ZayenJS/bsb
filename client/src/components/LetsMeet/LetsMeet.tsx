import { FC, FormEvent, useState } from 'react';
import { useContactInfo } from '../../hooks/useContactInfo';
import { useFieldTouched } from '../../hooks/useFieldTouched';
import { useSendMail } from '../../hooks/useSendMail';
import { MailStatus } from '../../models';
import Button from '../Button/Button';
import Field from '../Field/Field';
import Heading from '../Heading/Heading';
import Loader from '../Loader/Loader';
import OwnerInfos from '../OwnerInfos/OwnerInfos';

import classes from './LetsMeet.module.scss';

export interface LetsMeetProps {}

const LetsMeet: FC<LetsMeetProps> = ({ children }) => {
  const [state, setState] = useState({ loading: false });
  const { errors } = useContactInfo();
  const { sendMail, resetMail, mailStatus, notification } = useSendMail();

  const [firstNameTouched, touchFirstName] = useFieldTouched('firstName', 'contact');
  const [lastNameTouched, touchLastName] = useFieldTouched('lastName', 'contact');
  const [emailTouched, touchEmail] = useFieldTouched('email', 'contact');
  const [messageTouched, touchMessage] = useFieldTouched('message', 'contact');

  const formSubmitHandler = (event: FormEvent) => {
    event.preventDefault();
    const hasError = !!Object.values(errors).filter((el) => el !== '').length;

    if (hasError) {
      return;
    }

    sendMail();
    setState((prevState) => ({ ...prevState, loading: true }));
  };

  if (mailStatus !== MailStatus.NOT_SENT && state.loading) {
    setState((prevState) => ({ ...prevState, loading: false }));
    setTimeout(resetMail, 1000);
  }

  return (
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
              Les champs marqués d'un <span className={classes.Required}>*</span> sont obligatoires
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
                errorMessage={firstNameTouched ? errors.firstName : ''}
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
                errorMessage={lastNameTouched ? errors.lastName : ''}
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
                errorMessage={emailTouched ? errors.email : ''}
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
                errorMessage={messageTouched ? errors.message : ''}
                onBlur={touchMessage}
              />
            </div>
            <Button className={classes.Button}>
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
  );
};

export default LetsMeet;
