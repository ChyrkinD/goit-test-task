import css from './ErrorMessage.module.css';

const ErrorMessage = ({ text }) => {
  return <p className={css.text}>{text}</p>;
};

export default ErrorMessage;
