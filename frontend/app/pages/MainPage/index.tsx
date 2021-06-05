import React from 'react';

import { Header } from 'app/components';
import { MainSection } from './style';

const MainPage: React.FC = () => {
   return (
      <MainSection>
         <Header restaurantCount={12} />
      </MainSection>
   );
};

export { MainPage };
