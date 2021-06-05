import styled from 'styled-components';

const SelectWrap = styled.div`
   cursor: pointer;

   width: 140px;

   border: 1px solid #1f213a;
   border-radius: 20px;

   div.active-elem,
   li {
      height: 42px;
      padding: 10px 12px;
   }

   div.active-elem {
      display: flex;
      align-items: center;
      justify-content: space-between;

      width: 100%;

      span {
         color: #fff;
         font-size: 14px;
         line-height: 16px;
      }

      img {
         width: 15px;
         height: 15px;
         transition: transform 0.3s ease;

         user-select: none;

         &.open {
            transform: rotate(180deg);
         }
      }
   }

   ul {
      display: none;
      flex-direction: column;

      &.list-active {
         display: flex;
      }

      li {
         color: #fff;
         font-size: 14px;
         line-height: 16px;

         display: flex;
         align-items: center;
         justify-content: flex-start;

         transition: background-color 0.3s ease;

         &.item-active {
            background-color: #7c5df9;
         }

         &:hover {
            background-color: #7c5df9;
         }

         &:last-child {
            border-bottom-left-radius: 20px;
            border-bottom-right-radius: 20px;
         }
      }
   }
`;

export { SelectWrap };
