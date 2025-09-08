import clsx from 'clsx';

const FilterButton = ({ label, icon, isActive, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={clsx('w-[112px] h-[96px] px-4 flex flex-col items-center justify-center gap-2 border rounded-xl cursor-pointer hover:border-button',
        isActive ? 'border-button' : 'border-gray-light')}
    >
      {icon}
      {label}
    </button>
  );
};

export default FilterButton;
