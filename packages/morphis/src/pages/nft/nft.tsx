import { LayoutMain } from '@layouts/layout_main'
import { ComingSoon } from '@components/coming_soon'

import { BottomMenuKeys } from '@components/bottom_menu'

import st from './nft.module.less'

export const NFT = () => {
  return (
    <LayoutMain activeMenu={BottomMenuKeys.NFT} showBottomMenu>
      <div className={st.nft}>
        <ComingSoon />
      </div>
    </LayoutMain>
  )
}
