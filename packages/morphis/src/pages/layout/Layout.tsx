import type { ReactNode } from 'react'
import cln from 'classnames'

import st from './Layout.module.less'

type LayoutProps = {
  children: ReactNode | ReactNode[]
  className?: string
}

export const Layout = ({ children, className }: LayoutProps) => (
  <div className={cln([st.layout, className])}>{children}</div>
)
