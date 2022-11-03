import type { ReactNode } from 'react'
import cln from 'classnames'

import st from './Layout.module.less'

type LayoutProps = {
  children: ReactNode | ReactNode[]
  className?: string
}

export function Layout({ children, className }: LayoutProps) {
  return <div className={cln([st.layout, className])}>{children}</div>
}
