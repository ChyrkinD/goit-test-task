import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';

export default function Hero() {
  const navigate = useNavigate();

  return (
    <div className="bg-[url(/Hero.png)] bg-cover bg-center flex-1">
      <div className="max-w-[1440px] mx-auto pl-16 py-[260px]">
        <h1 className="text-inputs text-5xl/8 mb-4 font-semibold">
          Campers of your dreams
        </h1>
        <p className="text-inputs text-2xl font-semibold mb-10">
          You can find everything you want in our catalog
        </p>
        <Button
          label="View Now"
          className="w-[173px]"
          onClick={() => navigate('/catalog')}
        />
      </div>
    </div>
  );
}
