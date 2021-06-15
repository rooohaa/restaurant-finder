import styled from 'styled-components';

const ModalOverlay = styled.div`
   position: fixed;
   top: 0;
   bottom: 0;
   right: 0;
   left: 0;
   background-color: rgba(0, 0, 0, 0.6);

   display: flex;
   align-items: center;
   justify-content: center;

   div.modal-wrap {
      background-color: #141625;
      border-radius: 5px;
      padding: 15px 20px;

      position: relative;

      width: 400px;
      animation: slide 0.4s ease-in;

      h4 {
         color: #503db2;
         font-size: 18px;
         line-height: 19px;

         margin-bottom: 15px;
      }

      div.form-control {
         display: flex;
         flex-direction: column;
         align-items: flex-start;
         row-gap: 7px;

         label {
            color: #828397;
            font-size: 14px;
            line-height: 16px;
         }

         input {
            background-color: #1f213a;
            border: none;
            padding: 10px;
            border-radius: 5px;
            outline: none;

            width: 100%;
            color: #fff;

            &:focus {
               border: 1px solid #735fdd;
            }
         }

         span.error {
            font-size: 14px;
            line-height: 16px;
            color: #df4759;
         }
      }

      div.message {
         border-radius: 5px;
         padding: 10px;

         font-size: 14px;
         line-height: 16px;

         &.error-message {
            background-color: rgba(187, 118, 20, 0.2);
            color: #f79202;
         }
      }

      form {
         display: flex;
         flex-direction: column;
         row-gap: 17px;
      }

      button[type='submit'] {
         background-color: #735fdd;
         padding: 10px 0;
         border: none;
         color: #fff;
         border-radius: 5px;
         transition: background-color 0.4s ease-out;

         &:disabled {
            background-color: #8d7af0;
            cursor: not-allowed;
         }

         &:active {
            background-color: #816cf5;
         }
      }

      button.exit-btn {
         position: absolute;
         top: 10px;
         right: 10px;

         width: 25px;
         height: 25px;

         font-size: 27px;

         display: flex;
         align-items: center;
         justify-content: center;

         background-color: transparent;
         border: none;
         color: #aaa;
      }
   }

   @keyframes slide {
      from {
         opacity: 0;
         transform: scale(0.5);
      }
      to {
         opacity: 1;
         transform: translateY(1);
      }
   }
`;

export { ModalOverlay };
