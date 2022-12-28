import { configureStore } from '@reduxjs/toolkit'
import itemtSlice from './itemSlice' 
export const store = configureStore({
  reducer: {
    item:itemtSlice,
  },
})