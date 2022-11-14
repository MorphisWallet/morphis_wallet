import cl from 'classnames'

import CircularProgress from '@mui/material/CircularProgress'

import st from './loading.module.less'

type LoadingProps = {
  loading: boolean
  className?: string
  children?: React.ReactNode | React.ReactNode[]
}

export const Loading = ({ loading, children, className }: LoadingProps) => {
  if (loading) {
    return (
      <div className={cl([st.loading, className])}>
        <CircularProgress />
      </div>
    )
  }

  return children ? <>{children}</> : null
}
