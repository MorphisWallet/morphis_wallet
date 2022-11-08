import { LayoutMain } from '@layouts/layout_main'
import { Button } from '@components/button'

import { BottomMenuKeys } from '@components/bottom_menu'

import { ReactComponent as ArrowLong } from '@assets/arrow_long.svg'

import st from './settings.module.less'

const commonButtonStyle = {
  borderRadius: '4px',
  fontSize: '13px',
  fontWeight: 500,
  height: '48px',

  justifyContent: 'space-between',
}

export const Settings = () => {
  return (
    <LayoutMain activeMenu={BottomMenuKeys.SETTINGS} showBottomMenu>
      <div className={st.settings}>
        <div className={st.content}>
          <p className={st.title}>Settings</p>
          <Button
            sx={{
              ...commonButtonStyle,
              marginBottom: '8px',
            }}
            variant="outlined"
          >
            General
            <ArrowLong />
          </Button>
          <Button
            sx={{
              ...commonButtonStyle,
              marginBottom: '8px',
            }}
            variant="outlined"
          >
            Security and Privacy
            <ArrowLong />
          </Button>
          <Button
            disabled
            sx={{
              ...commonButtonStyle,
              marginBottom: '8px',
            }}
            variant="outlined"
          >
            <span>
              <span className={st.black}>Notifications</span>&nbsp;Coming soon
            </span>
            <ArrowLong />
          </Button>
        </div>
        <Button variant="outlined">Log out</Button>
      </div>
    </LayoutMain>
  )
}
