import React, { useState } from 'react';

import { Header, ModalForm } from 'app/components';
import { MainSection } from './style';

const MainPage: React.FC = () => {
   const [formActive, setFormActive] = useState<boolean>(false);

   return (
      <MainSection>
         <Header restaurantCount={12} onFormOpen={() => setFormActive(true)} />
         {formActive && <ModalForm onClose={() => setFormActive(false)} />}
      </MainSection>
   );
};

export { MainPage };
