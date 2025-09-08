import clsx from 'clsx';

const variantStyle = {
  primary: 'bg-button hover:bg-button-hover text-white ',
  secondary: 'border border-gray-light hover:border-button-hover',
};

const Button = ({ label, className, styleType = 'primary', type = 'button', ...rest }) => {
  const classesBasedOnProps = clsx(
    'font-medium h-[56px] cursor-pointer rounded-full transition ease-out delay-150',
    variantStyle[styleType],
  );

  return (
    <button
      type={type}
      className={clsx(classesBasedOnProps, className)}
      {...rest}
    >
      {label}
    </button>
  )
};

export default Button;
