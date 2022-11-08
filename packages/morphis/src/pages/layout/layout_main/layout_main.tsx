import type { ReactNode } from 'react'
import cl from 'classnames'

import st from './layout_main.module.less'

type LayoutMainProps = {
  children: ReactNode | ReactNode[]
  showBottomMenu?: boolean
  className?: string
}

export const LayoutMain = ({ className }: LayoutMainProps) => {
  return <div className={cl([st.layout, className])}></div>
}
