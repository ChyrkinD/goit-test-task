import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectIsFavorite,
  toggleFavorite,
} from '../../redux/favoritesSlice.js';
import Tag from '../Tag/Tag.jsx';
import Button from '../Button/Button.jsx';
import clsx from 'clsx';
import {
  HeartIcon,
  StarIcon,
  MapIcon,
  WindIcon,
  ShowerIcon,
  CupIcon,
  TVIcon,
  RadioIcon,
  FridgeIcon,
  MicrowaveIcon,
  GasIcon,
  WaterIcon,
  DiagramIcon,
  PetrolIcon,
} from '../../assets/icons/icons.jsx';

const CamperItem = ({
  id,
  name,
  src,
  price,
  rating,
  reviews,
  location,
  description,
  features,
}) => {
  const dispatch = useDispatch();
  const isFavorite = useSelector(state => selectIsFavorite(state, id));

  return (
    <div className="p-6 border border-gray-light rounded-[20px] flex gap-6">
      <div className="w-[299px] h-[320px] overflow-hidden rounded-xl">
        <img
          src={src}
          alt={name}
          className='className="w-full h-full object-cover'
        />
      </div>
      <div className="flex-1">
        <div className="flex justify-between mb-2">
          <h2 className="text-2xl font-semibold">{name}</h2>
          <div className="flex justify-end gap-3 items-center">
            <p className="text-2xl font-semibold">&#x20AC;{`${price}.00`}</p>
            <HeartIcon
              className={clsx(
                'cursor-pointer',
                isFavorite ? 'fill-button' : 'fill-main'
              )}
              onClick={() => dispatch(toggleFavorite(id))}
            />
          </div>
        </div>
        <div className="flex gap-4 mb-6">
          <div className="flex gap-1 items-center">
            <StarIcon className="fill-rating" />
            <p>{`${rating}(${reviews} reviews)`}</p>
          </div>
          <div className="flex gap-1 items-center">
            <MapIcon className="fill-main" />
            <p>{location}</p>
          </div>
        </div>
        <p className="text-text mb-6 line-clamp-1">{description}</p>
        <div className="flex flex-wrap gap-2 mb-6 max-h-[104px] overflow-hidden">
          <Tag
            label={features.transmission}
            icon={<DiagramIcon className="fill-main" />}
          />
          <Tag
            label={features.engine}
            icon={<PetrolIcon className="fill-main" />}
          />
          {features.AC && (
            <Tag label="AC" icon={<WindIcon className="fill-main" />} />
          )}
          {features.bathroom && (
            <Tag label="bathroom" icon={<ShowerIcon className="fill-main" />} />
          )}
          {features.kitchen && (
            <Tag label="kitchen" icon={<CupIcon className="fill-main" />} />
          )}
          {features.TV && (
            <Tag
              label="TV"
              icon={<TVIcon width={20} height={20} className="fill-main" />}
            />
          )}
          {features.radio && (
            <Tag label="radio" icon={<RadioIcon className="fill-main" />} />
          )}
          {features.refrigerator && (
            <Tag
              label="refrigerator"
              icon={<FridgeIcon className="fill-main" />}
            />
          )}
          {features.microwave && (
            <Tag
              label="microwave"
              icon={<MicrowaveIcon className="stroke-main" />}
            />
          )}
          {features.gas && (
            <Tag label="gas" icon={<GasIcon className="stroke-main" />} />
          )}
          {features.water && (
            <Tag label="water" icon={<WaterIcon className="stroke-main" />} />
          )}
        </div>
        <Link to={`/catalog/${id}/features`} target="_blank">
          <Button label="Show more" className="w-[166px]" />
        </Link>
      </div>
    </div>
  );
};

export default CamperItem;
