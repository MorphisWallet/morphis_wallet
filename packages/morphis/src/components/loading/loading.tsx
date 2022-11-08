import CircularProgress from '@mui/material/CircularProgress'

import st from './loading.module.less'

export const Loading = () => {
  return (
    <div className={st.loading}>
      <CircularProgress />
    </div>
  )
}
