import React from 'react';
import { useDispatch } from 'react-redux';
import {
   deleteRestaurantAsync,
   TRestaurantsData,
} from 'store/reducers/restaurantsReducer';

import Link from 'next/link';
import { CardWrapper } from './style';

interface IProps {
   id: number;
   name: string;
   location: string;
   price_range: string;
   onEdit: (rest: TRestaurantsData) => void;
}

const RestaurantCard: React.FC<IProps> = ({
   id,
   name,
   location,
   price_range,
   onEdit,
}) => {
   const dispatch = useDispatch();

   const handleDelete = () => {
      dispatch(deleteRestaurantAsync(id));
   };

   return (
      <CardWrapper>
         <span className="res-id">#{id}</span>
         <span className="res-name">{name}</span>
         <span className="res-location">{location}</span>
         <div className="price-range">
            <span></span>
            <p>{price_range} KZT</p>
         </div>

         <div className="controls">
            <button onClick={() => onEdit({ id, name, location, price_range })}>
               <img src="/icons/pen-solid.svg" alt="Edit icon" />
            </button>

            <button onClick={handleDelete}>
               <img src="/icons/times-solid.svg" alt="Delete icon" />
            </button>

            <Link href={`/${id}`}>
               <a>
                  <img src="/icons/arrow-down.svg" alt="Arrow down" />
               </a>
            </Link>
         </div>
      </CardWrapper>
   );
};

export { RestaurantCard };
