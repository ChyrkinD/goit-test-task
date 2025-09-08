import { useDispatch, useSelector } from 'react-redux';
import { useParams, Outlet } from 'react-router-dom';
import {
  selectError,
  selectIsLoading,
  selectSelectedItem,
} from '../../redux/campersSlice';
import { useEffect, Suspense } from 'react';
import { fetchCamperDetails } from '../../redux/campersOps';
import TabNavigation from '../../components/TabNavigation/TabNavigation.jsx';
import BookForm from '../../components/BookForm/BookForm.jsx';
import Loader from '../../components/Loader/Loader';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import { StarIcon, MapIcon } from '../../assets/icons/icons.jsx';

export default function CatalogItem() {
  const dispatch = useDispatch();
  const { camperId } = useParams();
  const item = useSelector(selectSelectedItem);
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectError);

  useEffect(() => {
    if (!camperId) return;
    dispatch(fetchCamperDetails({ camperId }));
  }, [camperId, dispatch]);

  if (isLoading) return <Loader />;
  if (isError)
    return (
      <ErrorMessage text="Whoops, something went wrong! Please try again!" />
    );
  if (!item) return <ErrorMessage text="Item not found!" />;

  return (
    <div className="w-full max-w-[1440px] mx-auto py-12 px-16">
      <h2 className="text-2xl font-semibold mb-2">{item.name}</h2>
      <div className="flex gap-4 mb-4">
        <div className="flex gap-1 items-center">
          <StarIcon className="fill-rating" />
          <p>{`${item.rating}(${item.reviews.length} reviews)`}</p>
        </div>
        <div className="flex gap-1 items-center">
          <MapIcon className="fill-main" />
          <p>{item.location}</p>
        </div>
      </div>
      <p className="text-2xl font-semibold mb-7">
        &#x20AC;{`${item.price}.00`}
      </p>
      <div className="flex gap-12 mb-7">
        {item.gallery.map(({ original }, index) => (
          <div
            key={index}
            className="w-[292px] h-[312px] overflow-hidden rounded-xl relative border border-gray-light"
          >
            <img
              src={original}
              alt={item.name}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
      <p className="text-text mb-[60px]">{item.description}</p>

      <TabNavigation />

      <div className="grid grid-cols-2 gap-10">
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
        <BookForm />
      </div>
    </div>
  );
}
