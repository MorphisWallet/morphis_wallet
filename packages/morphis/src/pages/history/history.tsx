import { LayoutMain } from '@layouts/layout_main'
import { ComingSoon } from '@components/coming_soon'

import { BottomMenuKeys } from '@components/bottom_menu'

import st from './history.module.less'

export const History = () => {
  return (
    <LayoutMain activeMenu={BottomMenuKeys.HISTORY} showBottomMenu>
      <div className={st.history}>
        <ComingSoon />
      </div>
    </LayoutMain>
  )
}
