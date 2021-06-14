import styled from 'styled-components';

export const RatingWrap = styled.div`
   display: flex;
   align-items: center;
   column-gap: 7px;

   div.stars {
      display: flex;
      align-items: center;
      column-gap: 3px;
   }

   img {
      width: 20px;
      height: 17px;
   }

   span {
      font-size: 17px;
      line-height: 19px;
      color: #d9e2ef;
   }
`;
