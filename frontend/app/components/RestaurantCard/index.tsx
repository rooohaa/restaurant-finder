import React from 'react';

import Link from 'next/link';
import { CardWrapper } from './style';

interface IProps {
   id: number;
   name: string;
   location: string;
   priceRange: string;
}

const RestaurantCard: React.FC<IProps> = ({
   id,
   name,
   location,
   priceRange,
}) => {
   return (
      <CardWrapper>
         <span className="res-id">#{id}</span>
         <span className="res-name">{name}</span>
         <span className="res-location">{location}</span>
         <div className="price-range">
            <span></span>
            <p>{priceRange} KZT</p>
         </div>

         <div className="controls">
            <button>
               <img src="/icons/pen-solid.svg" alt="Edit icon" />
            </button>

            <button>
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
