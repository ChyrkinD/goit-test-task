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
  AlcoveIcon,
  FullIcon,
  VanIcon,
} from '../../assets/icons/icons.jsx';

export const vehicleEquipmentConfig = [
  { id: 'AC', label: 'AC', icon: <WindIcon className="fill-main" /> },
  {
    id: 'automatic',
    label: 'Automatic',
    icon: <DiagramIcon className="fill-main" />,
  },
  { id: 'kitchen', label: 'Kitchen', icon: <CupIcon className="fill-main" /> },
  { id: 'TV', label: 'TV', icon: <TVIcon className="fill-main" /> },
  {
    id: 'bathroom',
    label: 'Bathroom',
    icon: <ShowerIcon className="fill-main" />,
  },
];

export const vehicleTypeConfig = [
  { id: 'panelTruck', label: 'Van', icon: <VanIcon className="fill-main" /> },
  {
    id: 'fullyIntegrated',
    label: 'Fully Integrated',
    icon: <FullIcon className="fill-main" />,
  },
  { id: 'alcove', label: 'Alcove', icon: <AlcoveIcon className="fill-main" /> },
];
