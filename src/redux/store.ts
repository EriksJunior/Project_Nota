import { configureStore } from '@reduxjs/toolkit'
import clienteReducer from './leafSlice'

export default configureStore({
  reducer: {
    id: clienteReducer
  }
})