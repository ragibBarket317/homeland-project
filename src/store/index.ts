import { configureStore } from '@reduxjs/toolkit'
import uiReducer from './slicer/uiSlice'

export const store = configureStore({
  reducer: { ui: uiReducer },
})

export type RootState = ReturnType<typeof store.getState>
