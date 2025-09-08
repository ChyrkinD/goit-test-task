import { useSelector } from 'react-redux';
import { selectSelectedItem } from '../../redux/campersSlice.js';
import StarsRating from '../StarsRating/StarsRating.jsx';

const Reviews = () => {
  const camper = useSelector(selectSelectedItem);

  return (
    <ul className="flex flex-col gap-11 pt-3">
      {camper.reviews.map(
        ({ reviewer_name, reviewer_rating, comment }, index) => (
          <li key={index}>
            <div className="flex gap-4 items-center mb-4">
              <div className="w-[60px] h-[60px] bg-badges rounded-full capitalize flex justify-center items-center text-button font-semibold text-2xl">
                {reviewer_name[0]}
              </div>
              <div>
                <p className="mb-1">{reviewer_name}</p>
                <StarsRating rating={reviewer_rating} />
              </div>
            </div>
            <p>{comment}</p>
          </li>
        )
      )}
    </ul>
  );
};

export default Reviews;
