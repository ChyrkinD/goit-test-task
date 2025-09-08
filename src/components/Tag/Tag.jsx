import clsx from 'clsx';

const Tag = ({
               className,
               label,
               icon,
             }) => {
  return (
    <button
      className={clsx(
        'pointer-events-none flex items-center justify-center font-medium py-3 px-[18px] rounded-full bg-badges',
        { 'justify-between gap-1': icon },
        className,
      )}
    >
      {icon && icon}
      {label}
    </button>
  );
};

export default Tag;
