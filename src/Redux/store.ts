import { configureStore } from '@reduxjs/toolkit'
import hotelReducer from './hotels/hotelSlice'

export const store = configureStore({
  reducer: {
    hotels: hotelReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch