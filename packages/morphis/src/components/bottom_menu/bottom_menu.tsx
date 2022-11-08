import { Link } from 'react-router-dom'
import cl from 'classnames'

import { ReactComponent as Landing } from '@assets/landing.svg'
import { ReactComponent as Settings } from '@assets/settings.svg'

import st from './bottom_menu.module.less'

export enum BottomMenuKeys {
  LANDING = 'LANDING',
  SETTINGS = 'SETTINGS',
}

type BottomMenuProps = {
  activeMenu: BottomMenuKeys
}

export const BottomMenu = ({ activeMenu }: BottomMenuProps) => {
  return (
    <footer className={st.footer}>
      <Link
        className={cl([
          st.linkButton,
          activeMenu === BottomMenuKeys.LANDING && st.active,
        ])}
        to="/landing"
      >
        <Landing />
      </Link>
      <Link
        className={cl([
          st.linkButton,
          activeMenu === BottomMenuKeys.SETTINGS && st.active,
        ])}
        to="/settings"
      >
        <Settings />
      </Link>
    </footer>
  )
}
