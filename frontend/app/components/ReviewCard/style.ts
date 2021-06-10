import styled from 'styled-components';

export const ReviewCardWrap = styled.div`
   padding: 15px;
   border-radius: 5px;

   background-color: #1f203a;
   width: 370px;

   div.card-header {
      width: 100%;

      display: flex;
      align-items: center;
      justify-content: space-between;

      margin-bottom: 10px;
      padding-bottom: 10px;
      border-bottom: 1px solid #8a7acf;

      h5 {
         color: #fff;
         font-size: 15px;
         font-weight: 300;
         line-height: 17px;
      }
   }

   p {
      color: #fff;
      font-size: 14px;
      font-weight: 300;
      line-height: 19px;
   }
`;
