import type { RootState, AppDispatch } from '@core/store'

export const thunkExtras = {}

type ThunkExtras = typeof thunkExtras

export interface AppThunkConfig {
  extra: ThunkExtras
  state: RootState
  dispatch: AppDispatch
}
