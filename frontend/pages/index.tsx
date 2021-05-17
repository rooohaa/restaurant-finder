import React from 'react';
import styled from 'styled-components';

const Heading = styled.h1`
   color: green;
   font-size: 45px;
`;

const MainPage: React.FC = () => {
   return <Heading>hello world</Heading>;
};

export default MainPage;
