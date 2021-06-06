import { Container } from 'app/sc/Container';
import styled from 'styled-components';

const HeaderWrap = styled.header`
   height: 175px;
   ${Container} {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
   }

   div.logo-wrap {
      h1 {
         color: #fff;
         font-weight: 500;
         font-size: 32px;
         letter-spacing: 1px;
         line-height: 36px;
         margin-bottom: 5px;
      }

      p {
         color: #d3d6e7;
         font-size: 15px;
         font-weight: 300;
         line-height: 19px;
      }
   }

   div.controls {
      display: flex;
      align-items: flex-start;
      column-gap: 40px;

      button {
         padding: 6px 15px 6px 6px;
         height: 42px;

         border: none;
         border-radius: 20px;

         background-color: #7c5dfa;
         display: flex;
         align-items: center;
         column-gap: 17px;

         transition: background-color 0.3s ease-out;

         &:hover {
            background-color: #6443f0;
         }

         div {
            width: 30px;
            height: 100%;
            background-color: #fff;
            border-radius: 100%;

            display: flex;
            align-items: center;
            justify-content: center;

            img {
               width: 15px;
               height: 15px;
            }
         }

         span {
            color: #fff;
            font-weight: 400;
            font-size: 13px;
            line-height: 15px;
         }
      }
   }
`;

export { HeaderWrap };
