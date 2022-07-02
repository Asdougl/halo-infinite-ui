import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'

type Input = 'keyboard' | 'gamepad'

export interface InputState {
  input: Input
}

const initialState: InputState = {
  input: 'keyboard',
}

export const inputSlice = createSlice({
  name: 'input',
  initialState,
  reducers: {
    setInput: (state, action: PayloadAction<Input>) => {
      state.input = action.payload
    },
  },
})

export const { setInput } = inputSlice.actions

export const selectInput = (state: RootState) => state.input.input

export default inputSlice.reducer
