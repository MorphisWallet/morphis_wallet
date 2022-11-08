import type { ReactNode } from 'react'
import cl from 'classnames'

import st from './layout_login.module.less'

type LayoutLoginProps = {
  header?: ReactNode | ReactNode[]
  children: ReactNode | ReactNode[]
  footer?: ReactNode | ReactNode[]
  className?: string
}

export const LayoutLogin = ({
  header,
  children,
  footer,
  className,
}: LayoutLoginProps) => (
  <div
    className={cl([st.layout, !header && !footer && st.mainOnly, className])}
  >
    {header && <div className={st.header}>{header}</div>}
    <div className={st.main}>{children}</div>
    {footer && <div className={st.footer}>{footer}</div>}
  </div>
)
