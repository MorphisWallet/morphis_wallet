import { ReactComponent as ComingSoonBg } from '@assets/coming_soon.svg'

import st from './coming_soon.module.less'

export const ComingSoon = () => (
  <>
    <ComingSoonBg className={st.pic} />
    <p className={st.text}>COMING</p>
    <p className={st.text}>SOON</p>
  </>
)
