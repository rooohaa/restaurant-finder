import React, { useState } from 'react';

import { Header, ModalForm } from 'app/components';
import { RestaurantsSection } from './RestaurantsSection';

import { MainSection } from './style';

const MainPage: React.FC = () => {
   const [formActive, setFormActive] = useState<boolean>(false);

   return (
      <MainSection>
         <Header onFormOpen={() => setFormActive(true)} />
         <RestaurantsSection />
         {formActive && <ModalForm onClose={() => setFormActive(false)} />}
      </MainSection>
   );
};

export { MainPage };
