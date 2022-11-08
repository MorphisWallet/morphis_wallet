import type { ReactNode } from 'react'
import cl from 'classnames'

import { BottomMenu, BottomMenuKeys } from '@components/bottom_menu'
import { Logo } from '@components/logo'

import st from './layout_main.module.less'

type LayoutMainProps = {
  children: ReactNode | ReactNode[]
  showBottomMenu?: boolean
  className?: string
  activeMenu: BottomMenuKeys
}

export const LayoutMain = ({
  className,
  children,
  showBottomMenu,
  activeMenu,
}: LayoutMainProps) => {
  return (
    <div className={cl([st.layout, className])}>
      <header className={st.header}>
        <Logo className={st.logo} height={24} width={24} />
        <div className={st.account}>
          <span>test_account</span>
          <span>(0x12348888888eeee)</span>
        </div>
        <div className={st.env}>Devnet</div>
      </header>
      {children}
      {showBottomMenu && <BottomMenu activeMenu={activeMenu} />}
    </div>
  )
}
