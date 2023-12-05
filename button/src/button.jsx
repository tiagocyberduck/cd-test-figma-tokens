import * as React from 'react';
const { useRef } = React;
import styles from './button.module.scss';

/**
  The Button component is used to trigger an action or event, such as submitting a form, opening a dialog, canceling an action, or performing a delete operation.
*/
export const Button = ({
  size = 'medium',
  primary = true,
  secondary = false,
  ...rest
}) => {
  const ref = useRef();
  const { children } = rest;

  return (
    <button
      ref={ref}
      className={`
      ${styles.button} ${styles[size]}
      ${secondary ? styles.secondary : ''}
      ${rest.isDisabled ? styles.disabled : ''}
      `}
    >
      {children}
    </button>
  );
};
