import { ChangeEvent, FC, FocusEvent, useRef, useState } from 'react';
import { useChangeValue } from '../../hooks/useChangeValue';
import { State } from '../../store/reducers';

import classes from './Field.module.scss';

// import { FieldPropsFromRedux } from '../../containers/components/Field/Field';

export interface FieldProps {
  id?: string;
  className?: string;
  label?: string;
  onKeyUp?: React.KeyboardEventHandler<HTMLInputElement>;
  maxLength?: number;
  placeholder?: string;
  reducerName?: keyof State;
  name: string;
  value?: string;
  autofocus?: boolean;
  errorMessage?: string;
  type?: 'text' | 'password' | 'email' | 'number' | 'url' | 'textarea';
  min?: string;
  max?: string;
  onChange?: (event: ChangeEvent) => void;
  onBlur?: (event: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const Field: FC<FieldProps> = ({
  id,
  label,
  className = '',
  type = 'text',
  onKeyUp,
  name,
  value,
  reducerName,
  onChange,
  onBlur,
  placeholder,
  maxLength,
  errorMessage = '',
  min,
  max,
}) => {
  const changeValue = useChangeValue(name);

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (onChange) return onChange(event);

    if (reducerName) return changeValue(reducerName, event.target.value);
  };

  const onBlurHandler = (event: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (onBlur) onBlur(event);
  };

  let input;
  switch (type) {
    case 'textarea':
      input = (
        <>
          <textarea
            name={name}
            maxLength={maxLength}
            id={id}
            placeholder={placeholder}
            value={value}
            onBlur={onBlurHandler}
            className={errorMessage ? classes.Error : ''}
            onChange={onChangeHandler}></textarea>
          <label htmlFor={id}>{label}</label>
        </>
      );
      break;
    case 'number':
      input = (
        <>
          <input
            name={name}
            type={type}
            id={id}
            placeholder={placeholder}
            onKeyUp={onKeyUp}
            value={value}
            onChange={onChangeHandler}
            min={min}
            max={max}
            onBlur={onBlurHandler}
            className={errorMessage ? classes.Error : ''}
          />
          <label htmlFor={id}>{label}</label>
        </>
      );
      break;
    default:
      input = (
        <>
          <input
            autoComplete="off"
            name={name}
            type={type}
            id={id}
            placeholder={placeholder}
            onKeyUp={onKeyUp}
            value={value}
            onChange={onChangeHandler}
            onBlur={onBlurHandler}
            className={errorMessage ? classes.Error : ''}
          />
          <label htmlFor={id}>{label}</label>
        </>
      );
  }

  return (
    <div className={`${classes.Container} ${className ?? ''} ${errorMessage ? classes.Error : ''}`}>
      <div>{input}</div>
      {errorMessage && <span className={classes.Error}>{errorMessage}</span>}
    </div>
  );
};

export default Field;
