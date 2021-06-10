import React, { useState } from 'react';

import { TRestaurantsData } from 'store/reducers/restaurantsReducer';
import { Header, ModalForm } from 'app/components';
import { RestaurantsSection } from './RestaurantsSection';

import { MainSection } from './style';

const MainPage: React.FC = () => {
   const [formActive, setFormActive] = useState<boolean>(false);
   const [activeRestaurant, setActiveRestaurant] =
      useState<TRestaurantsData | null>(null);

   return (
      <MainSection>
         <Header onFormOpen={() => setFormActive(true)} />
         <RestaurantsSection
            onEditAction={(rest: TRestaurantsData) => setActiveRestaurant(rest)}
         />
         {activeRestaurant && (
            <ModalForm
               restaurantInitValues={activeRestaurant}
               onClose={() => {
                  setActiveRestaurant(null);
               }}
            />
         )}
         {formActive && <ModalForm onClose={() => setFormActive(false)} />}
      </MainSection>
   );
};

export { MainPage };
