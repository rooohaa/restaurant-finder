import { TRestaurantsData } from 'store/reducers/restaurantsReducer';

const sortRestaurants = (
   restaurants: TRestaurantsData[],
   sortProp: string
): TRestaurantsData[] => {
   switch (sortProp) {
      case 'name':
         return [...restaurants].sort((a, b) => a.name.localeCompare(b.name));
      case 'location':
         return [...restaurants].sort((a, b) =>
            a.location.localeCompare(b.location)
         );
      case 'price':
         return [...restaurants].sort((a, b) => {
            const startPriceA = +a.price_range.split('-')[0];
            const startPriceB = +b.price_range.split('-')[0];

            if (startPriceA > startPriceB) {
               return 1;
            } else if (startPriceB > startPriceA) {
               return -1;
            } else {
               return 0;
            }
         });
      default:
         return restaurants;
   }
};

export { sortRestaurants };
