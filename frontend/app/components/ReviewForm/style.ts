import styled from 'styled-components';

export const FormSection = styled.section`
   padding: 30px 0;

   form {
      width: 100%;

      display: flex;
      flex-direction: column;
      row-gap: 15px;

      div.form-row {
         width: 100%;

         display: flex;
         align-items: center;
         justify-content: center;
         column-gap: 15px;

         div.form-control {
            width: 100%;
            display: flex;
            flex-direction: column;
            row-gap: 7px;

            label {
               color: #d9e2ef;
               font-size: 14px;
               line-height: 17px;
            }

            span.error {
               font-size: 14px;
               line-height: 16px;
               color: #df4759;
            }

            input,
            textarea {
               outline: none;
               padding: 10px;
               border-radius: 4px;
               border: none;
               background-color: #1f213a;
               color: #fff;

               &::placeholder {
                  color: #aaa;
                  font-family: 'Rubik', sans-serif;
               }

               &:focus {
                  border: 1px solid #735fdd;
               }
            }

            textarea {
               height: 70px;
               resize: none;
            }
         }
      }

      button[type='submit'] {
         width: 90px;
         padding: 8px 0;

         background-color: #17a2b8;
         color: #fff;
         border: none;
         border-radius: 3px;
      }
   }
`;
