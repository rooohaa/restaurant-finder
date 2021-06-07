import React from 'react';

import { SpinnerWrap } from './style';

const Spinner: React.FC = () => {
   return (
      <SpinnerWrap>
         <div className="lds-ellipsis">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
         </div>
      </SpinnerWrap>
   );
};

export { Spinner };
