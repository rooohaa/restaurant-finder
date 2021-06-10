import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
   addRestaurantAsync,
   updateRestaurantAsync,
   TRestaurantsData,
} from 'store/reducers/restaurantsReducer';

import { Formik, Field, Form } from 'formik';
import * as yup from 'yup';

import { ModalOverlay } from './style';

interface InitFormState {
   name: string;
   location: string;
   price_range: string;
}

interface IProps {
   onClose: () => void;
   restaurantInitValues?: TRestaurantsData;
}

const ModalForm: React.FC<IProps> = ({ onClose, restaurantInitValues }) => {
   const [success, setSuccess] = useState<boolean>(false);
   const [error, setError] = useState<boolean>(false);

   const dispatch = useDispatch();

   const initialValues: InitFormState = {
      name: restaurantInitValues ? restaurantInitValues.name : '',
      location: restaurantInitValues ? restaurantInitValues.location : '',
      price_range: restaurantInitValues ? restaurantInitValues.price_range : '',
   };

   const validationSchema = yup.object().shape({
      name: yup.string().required('Name should not be empty'),
      location: yup.string().required('Location should not be empty'),
      price_range: yup.string().required('Price should not be empty'),
   });

   return (
      <ModalOverlay>
         <div className="modal-wrap">
            <h4>Fill out the form</h4>

            <Formik
               initialValues={initialValues}
               onSubmit={(values: InitFormState, { resetForm }) => {
                  const { name, location, price_range } = values;

                  if (restaurantInitValues) {
                     const data = {
                        id: restaurantInitValues.id,
                        name,
                        location,
                        price_range,
                     };
                     dispatch(updateRestaurantAsync(data));
                  } else {
                     const newRestaurant = { name, location, price_range };
                     dispatch(addRestaurantAsync(newRestaurant));
                  }

                  setSuccess(true);
                  resetForm();

                  setTimeout(() => setSuccess(false), 2000);
               }}
               validateOnBlur={true}
               validationSchema={validationSchema}
            >
               {({ errors, touched, isValid }) => (
                  <Form>
                     <div className="form-control">
                        <label htmlFor="name">Restaurant Name</label>
                        <Field
                           type="text"
                           name="name"
                           id="name"
                           placeholder="Name"
                        />
                        {errors.name && touched.name && (
                           <span className="error">{errors.name}</span>
                        )}
                     </div>

                     <div className="form-control">
                        <label htmlFor="location">Location</label>
                        <Field
                           type="text"
                           name="location"
                           id="location"
                           placeholder="Location"
                        />
                        {errors.location && touched.location && (
                           <span className="error">{errors.location}</span>
                        )}
                     </div>

                     <div className="form-control">
                        <label htmlFor="priceRange">Price range</label>
                        <Field
                           type="text"
                           name="price_range"
                           id="priceRange"
                           placeholder="ex: 2000-10000"
                        />
                        {errors.price_range && touched.price_range && (
                           <span className="error">{errors.price_range}</span>
                        )}
                     </div>

                     {!error && success && (
                        <div className="message success-message">
                           Form successfully submitted!
                        </div>
                     )}

                     {!success && error && (
                        <div className="message error-message">
                           Server error. Please, try again later.
                        </div>
                     )}

                     <button type="submit" disabled={!isValid}>
                        Submit
                     </button>
                  </Form>
               )}
            </Formik>

            <button className="exit-btn" onClick={onClose}>
               &times;
            </button>
         </div>
      </ModalOverlay>
   );
};

export { ModalForm };
