import { createSlice } from '@reduxjs/toolkit'

export const slice = createSlice({
  name: 'leaf',
  initialState: {
    id: 'id teste'
  },
  reducers: {
    changeLeaf(state, { payload }) {
      return { ...state, id: payload }
    }
  }
})

export const { changeLeaf } = slice.actions

export const selectCliente = (state: any) => state.id

export default slice.reducer