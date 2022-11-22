import { AppType } from '@src/types/app'

export const getFromLocationSearch = (search: string) => {
  if (/type=popup/.test(search)) {
    return AppType.popup
  }
  return AppType.fullscreen
}
