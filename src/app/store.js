import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';
import carReducar from '../features/car/carSlice'

export const store = configureStore({
  reducer: {
    car: carReducar
  },
});
