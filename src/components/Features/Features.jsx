import { useSelector } from 'react-redux';
import Tag from '../Tag/Tag.jsx';
import { selectSelectedItem } from '../../redux/campersSlice.js';
import {
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

const Features = () => {
  const camper = useSelector(selectSelectedItem);
  return (
    <div className="bg-inputs py-11 px-[52px] rounded-xl">
      <div className="flex flex-wrap gap-2 mb-[100px] overflow-hidden">
        <Tag
          label={camper.transmission}
          icon={<DiagramIcon className="fill-main" />}
        />
        <Tag
          label={camper.engine}
          icon={<PetrolIcon className="fill-main" />}
        />
        {camper.AC && (
          <Tag label="AC" icon={<WindIcon className="fill-main" />} />
        )}
        {camper.bathroom && (
          <Tag label="bathroom" icon={<ShowerIcon className="fill-main" />} />
        )}
        {camper.kitchen && (
          <Tag label="kitchen" icon={<CupIcon className="fill-main" />} />
        )}
        {camper.TV && (
          <Tag
            label="TV"
            icon={<TVIcon width={20} height={20} className="fill-main" />}
          />
        )}
        {camper.radio && (
          <Tag label="radio" icon={<RadioIcon className="fill-main" />} />
        )}
        {camper.refrigerator && (
          <Tag
            label="refrigerator"
            icon={<FridgeIcon className="fill-main" />}
          />
        )}
        {camper.microwave && (
          <Tag
            label="microwave"
            icon={<MicrowaveIcon className="stroke-main" />}
          />
        )}
        {camper.gas && (
          <Tag label="gas" icon={<GasIcon className="stroke-main" />} />
        )}
        {camper.water && (
          <Tag label="water" icon={<WaterIcon className="stroke-main" />} />
        )}
      </div>
      <h3 className="font-semibold text-xl mb-6">Vehicle details</h3>
      <hr className="text-gray-light mb-6" />
      <div className="flex justify-between mb-4">
        <p>Form</p>
        <p className="capitalize">{camper.form}</p>
      </div>
      <div className="flex justify-between mb-4">
        <p>Width</p>
        <p>{camper.width}</p>
      </div>
      <div className="flex justify-between mb-4">
        <p>Height</p>
        <p>{camper.height}</p>
      </div>
      <div className="flex justify-between mb-4">
        <p>Tank</p>
        <p>{camper.tank}</p>
      </div>
      <div className="flex justify-between">
        <p>Consumption</p>
        <p>{camper.consumption}</p>
      </div>
    </div>
  );
};

export default Features;
