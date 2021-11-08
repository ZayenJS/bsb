import { FC, FormEvent, useState } from 'react';
import { useContactInfo } from '../../hooks/useContactInfo';
import Button from '../Button/Button';
import Field from '../Field/Field';
import Heading from '../Heading/Heading';
import Loader from '../Loader/Loader';

import classes from './LetsMeet.module.scss';

export interface LetsMeetProps {}

const LetsMeet: FC<LetsMeetProps> = ({ children }) => {
  const [state, setState] = useState({ loading: false });
  const { errors } = useContactInfo();

  const formSubmitHandler = (event: FormEvent) => {
    event.preventDefault();
    const hasError = !!Object.values(errors).filter((el) => el !== '').length;

    if (hasError) {
      return;
    }

    setState((prevState) => ({ ...prevState, loading: true }));

    // TODO: replace with real api response
    setTimeout(() => {
      setState((prevState) => ({ ...prevState, loading: false }));
    }, 1500);
  };

  return (
    <section id="message" className={classes.Container}>
      <header>
        <Heading tag="h3" uppercased>
          Rencontrons-nous !
        </Heading>
      </header>
      <main>{children}</main>
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
                errorMessage={errors.firstName}
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
                errorMessage={errors.lastName}
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
                errorMessage={errors.email}
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
                errorMessage={errors.message}
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
            <address>
              <p>Mme Olivia PAUL</p>
              <div>
                <span>15 rue de la mare aux moines</span>
                <span>91350 GRIGNY</span>
              </div>
              <span>+33(0)6 46 35 90 24</span>
            </address>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default LetsMeet;
