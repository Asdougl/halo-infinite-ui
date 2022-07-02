import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'

export interface BattlePassState {
  level: number
  season: number
  progress: number
  premium: boolean
}

const initialState: BattlePassState = {
  level: 32,
  season: 2,
  progress: 0.1,
  premium: true,
}

export const inputSlice = createSlice({
  name: 'input',
  initialState,
  reducers: {
    setLevel: (state, action: PayloadAction<number>) => {
      state.level = action.payload
    },
    setProgress: (state, action: PayloadAction<number>) => {
      state.progress = action.payload
    },
  },
})

export const { setLevel, setProgress } = inputSlice.actions

export const selectBattlePass = (state: RootState) => state.battlepass

export default inputSlice.reducer
