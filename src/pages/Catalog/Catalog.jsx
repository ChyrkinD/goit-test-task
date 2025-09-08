import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCampers } from '../../redux/campersOps';
import Filters from '../../components/Filters/Filters.jsx';
import CampersList from '../../components/CampersList/CampersList.jsx';

export default function Catalog() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCampers({ loadMoreType: false }));
  }, [dispatch]);

  return (
    <div className="w-full max-w-[1440px] mx-auto py-12 px-16 flex gap-16">
      <Filters />
      <div className="flex-1">
        <CampersList />
      </div>
    </div>
  );
}
