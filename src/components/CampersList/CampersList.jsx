import { useDispatch, useSelector } from 'react-redux';
import {
  selectCampers,
  selectIsLoading,
  selectTotal,
} from '../../redux/campersSlice.js';
import CamperItem from '../CamperItem/CamperItem.jsx';
import Loader from '../Loader/Loader.jsx';
import Button from '../Button/Button.jsx';
import { fetchCampers } from '../../redux/campersOps.js';

const CampersList = () => {
  const dispatch = useDispatch();
  const filteredCampers = useSelector(selectCampers);
  const total = useSelector(selectTotal);
  const isLoading = useSelector(selectIsLoading);

  const contactCards = filteredCampers.map(
    ({
      id,
      name,
      gallery,
      price,
      rating,
      reviews,
      location,
      description,
      AC,
      bathroom,
      kitchen,
      TV,
      radio,
      refrigerator,
      microwave,
      gas,
      water,
      transmission,
      engine,
    }) => (
      <li key={id}>
        <CamperItem
          id={id}
          src={gallery[0].original}
          name={name}
          price={price}
          rating={rating}
          reviews={reviews.length}
          location={location}
          description={description}
          features={{
            AC,
            bathroom,
            kitchen,
            TV,
            radio,
            refrigerator,
            microwave,
            gas,
            water,
            transmission,
            engine,
          }}
        />
      </li>
    )
  );

  return (
    <>
      <ul className="flex flex-col gap-8">{contactCards}</ul>
      {isLoading && <Loader />}
      {total > filteredCampers.length && !isLoading && (
        <Button
          label="Load more"
          styleType="secondary"
          className="w-[145px] block !mt-10 !mx-auto"
          onClick={() => dispatch(fetchCampers({ loadMoreType: true }))}
        />
      )}
    </>
  );
};

export default CampersList;
