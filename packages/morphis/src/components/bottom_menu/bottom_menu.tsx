import { Link } from 'react-router-dom'
import cl from 'classnames'

import { ReactComponent as Landing } from '@assets/landing.svg'
import { ReactComponent as Settings } from '@assets/settings.svg'
import { ReactComponent as NFT } from '@assets/nft.svg'
// import { ReactComponent as Discovery } from '@assets/discovery.svg'
import { ReactComponent as History } from '@assets/history.svg'

import st from './bottom_menu.module.less'

export enum BottomMenuKeys {
  LANDING = 'LANDING',
  SETTINGS = 'SETTINGS',
  NFT = 'NFT',
  // DISCOVERY = 'DISCOVERY',
  HISTORY = 'HISTORY',
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
          activeMenu === BottomMenuKeys.NFT && st.active,
        ])}
        to="/nft"
      >
        <NFT />
      </Link>
      <Link
        className={cl([
          st.linkButton,
          activeMenu === BottomMenuKeys.HISTORY && st.active,
        ])}
        to="/history"
      >
        <History />
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
