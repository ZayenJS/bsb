import { FC, FormEvent } from 'react';
import Button from '../Button/Button';
import Field from '../Field/Field';
import Heading from '../Heading/Heading';

import classes from './LetsMeet.module.scss';

export interface LetsMeetProps {}

const LetsMeet: FC<LetsMeetProps> = ({ children }) => {
  const formSubmitHandler = (event: FormEvent) => {
    event.preventDefault();
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
              />
            </div>
            <Button>Envoyer</Button>
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
