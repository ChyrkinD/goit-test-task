import { useDispatch, useSelector } from 'react-redux';
import {
  selectLocation,
  selectVehicleEquipment,
  selectVehicleType,
  setLocation,
  setVehicleType,
  toggleVehicleEquipment,
} from '../../redux/filtersSlice';
import {
  vehicleEquipmentConfig,
  vehicleTypeConfig,
} from './filters.config.jsx';
import { fetchCampers } from '../../redux/campersOps.js';
import FilterButton from '../FilterButton/FilterButton.jsx';
import Button from '../Button/Button.jsx';
import { MapIcon } from '../../assets/icons/icons.jsx';
import clsx from 'clsx';

export default function Filters() {
  const dispatch = useDispatch();
  const location = useSelector(selectLocation);
  const vehicleType = useSelector(selectVehicleType);
  const vehicleEquipment = useSelector(selectVehicleEquipment);

  const handleLocationChange = event => {
    dispatch(setLocation(event.target.value));
  };

  return (
    <div className="w-[360px]">
      <label htmlFor="location" className="text-gray">
        Location
      </label>
      <div className="relative mb-10">
        <input
          id="location"
          className="bg-inputs h-[56px] p-[18px] pl-[46px] rounded-xl outline-none w-full"
          type="text"
          placeholder="City"
          value={location}
          onChange={handleLocationChange}
        />
        <MapIcon
          className={clsx(
            'absolute top-1/2 -translate-y-1/2 left-[18px]',
            location.length ? 'fill-main' : 'fill-gray'
          )}
        />
      </div>
      <p className="text-text mb-8">Filters</p>
      <p className="font-semibold text-xl mb-6">Vehicle equipment</p>
      <hr className="text-gray-light mb-6" />
      <div className="grid grid-cols-3 gap-x-3 gap-y-2 mb-8">
        {vehicleEquipmentConfig.map(({ id, label, icon }) => (
          <FilterButton
            key={id}
            label={label}
            icon={icon}
            isActive={vehicleEquipment[id]}
            onClick={() => dispatch(toggleVehicleEquipment(id))}
          />
        ))}
      </div>

      <p className="font-semibold text-xl mb-6">Vehicle type</p>
      <hr className="text-gray-light mb-6" />
      <div className="grid grid-cols-3 gap-x-3 gap-y-2 mb-8">
        {vehicleTypeConfig.map(({ id, label, icon }) => (
          <FilterButton
            key={id}
            label={label}
            icon={icon}
            isActive={vehicleType === id}
            onClick={() => dispatch(setVehicleType(id))}
          />
        ))}
      </div>
      <Button
        label="Search"
        className="w-[166px]"
        onClick={() => dispatch(fetchCampers({ loadMoreType: false }))}
      />
    </div>
  );
}
