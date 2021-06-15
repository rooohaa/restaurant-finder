import styled from 'styled-components';
import { Container } from 'app/sc/Container';

export const InfoWrapper = styled.div`
   ${Container} {
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
   }

   a.back-link {
      position: absolute;
      left: 0;
      top: 0;
      display: flex;
      align-items: center;
      column-gap: 10px;

      span {
         color: #17a2b8;
      }

      img {
         width: 17px;
         height: 17px;
         object-fit: cover;
      }
   }

   div.info {
      display: flex;
      flex-direction: column;
      align-items: center;
      row-gap: 15px;
   }

   h3 {
      color: #d9e2ef;
      font-size: 38px;
      line-height: 42px;
   }

   div.icon-wrap {
      display: flex;
      align-items: center;
      column-gap: 10px;

      img {
         width: 15px;
         height: 15px;
         object-fit: cover;
      }

      span {
         font-size: 17px;
         line-height: 21px;
         color: #c6d3e6;
         font-weight: 300;
      }
   }
`;
