import clsx from 'clsx';
import { StarIcon } from '../../assets/icons/icons.jsx';

const StarsRating = ({ rating = 0 }) => {
  const stars = [1, 2, 3, 4, 5];

  return (
    <div className="flex gap-1">
      {stars.map((star, index) => (
        <StarIcon
          key={index}
          className={clsx(index < rating ? 'fill-rating' : 'fill-badges')}
        />
      ))}
    </div>
  );
};

export default StarsRating;
