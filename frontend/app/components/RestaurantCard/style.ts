import styled from 'styled-components';

const CardWrapper = styled.li`
   width: 100%;
   background-color: #1f203a;

   padding: 30px;
   border-radius: 7px;
   box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

   display: flex;
   align-items: center;
   justify-content: space-between;

   span.res-id {
      color: #fff;
      font-size: 15px;
      line-height: 17px;
   }

   span.res-name,
   span.res-location {
      color: #9092ab;
      font-size: 15px;
      line-height: 17px;
   }

   div.price-range {
      display: flex;
      align-items: center;
      column-gap: 7px;

      padding: 10px 15px;

      border-radius: 5px;
      background-color: rgba(28, 96, 91, 0.2);

      span {
         display: block;
         width: 6px;
         height: 6px;
         background-color: #43c69f;
         border-radius: 50%;
      }

      p {
         font-size: 14px;
         line-height: 16px;
         color: #43c69f;
      }
   }

   a {
      cursor: pointer;
      width: 30px;
      height: 35px;

      border: none;
      background-color: transparent;

      display: flex;
      align-items: center;
      justify-content: center;

      img {
         width: 17px;
         height: 17px;
         transform: rotate(270deg);
         transition: transform 0.3s ease-out;
      }

      &:hover {
         img {
            transform: rotate(270deg) translateY(3px);
         }
      }
   }

   div.controls {
      display: flex;
      align-items: center;
      column-gap: 10px;

      button {
         width: 35px;
         height: 35px;

         display: flex;
         align-items: center;
         justify-content: center;

         background-color: inherit;
         border: none;
         border-radius: 50%;

         transition: background-color 0.3s ease-out;

         &:hover {
            background-color: rgba(108, 85, 208, 0.3);
         }

         img {
            width: 13px;
            height: 13px;
            object-fit: cover;
         }
      }
   }
`;

export { CardWrapper };
