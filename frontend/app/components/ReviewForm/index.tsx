import React from 'react';

import { useDispatch } from 'react-redux';
import { postReviewAsync } from 'store/reducers/reviewsReducer';
import { Form, Formik, Field } from 'formik';
import * as yup from 'yup';

import { Container } from 'app/sc/Container';
import { FormSection } from './style';

import { useRouter } from 'next/router';

interface InitFormState {
   name: string;
   review: string;
   rating: number;
}

const ReviewForm: React.FC = () => {
   const { query } = useRouter();
   const dispatch = useDispatch();

   const initialValues: InitFormState = {
      name: '',
      review: '',
      rating: 0,
   };

   const validationSchema = yup.object().shape({
      name: yup.string().required('Name should not be empty'),
      review: yup.string().required('Review should not be empty'),
      rating: yup
         .number()
         .required('Rating should not be empty')
         .lessThan(6, 'Rating must be between 0 and 5')
         .moreThan(-1, 'Rating must be between 0 and 5'),
   });

   return (
      <FormSection>
         <Container>
            <Formik
               initialValues={initialValues}
               validationSchema={validationSchema}
               validateOnBlur={true}
               onSubmit={(values: InitFormState, { resetForm }) => {
                  const { name, rating, review } = values;

                  const formData = {
                     name,
                     rating,
                     review,
                     restaurant_id: +query.id,
                  };

                  dispatch(postReviewAsync(formData));
                  resetForm();
               }}
            >
               {({ errors, touched, isValid }) => (
                  <Form>
                     <div className="form-row">
                        <div className="form-control">
                           <label htmlFor="name">Name</label>
                           <Field
                              name="name"
                              type="text"
                              id="name"
                              placeholder="Name"
                           />
                           {errors.name && touched.name && (
                              <span className="error">{errors.name}</span>
                           )}
                        </div>

                        <div className="form-control">
                           <label htmlFor="rating">Rating</label>
                           <Field
                              name="rating"
                              type="number"
                              id="rating"
                              placeholder="Rating"
                           />
                           {errors.rating && touched.rating && (
                              <span className="error">{errors.rating}</span>
                           )}
                        </div>
                     </div>

                     <div className="form-row">
                        <div className="form-control">
                           <label htmlFor="review">Review</label>
                           <Field
                              name="review"
                              id="review"
                              placeholder="Review"
                           />
                           {errors.review && touched.review && (
                              <span className="error">{errors.review}</span>
                           )}
                        </div>
                     </div>

                     <button type="submit" disabled={!isValid}>
                        Submit
                     </button>
                  </Form>
               )}
            </Formik>
         </Container>
      </FormSection>
   );
};

export { ReviewForm };
