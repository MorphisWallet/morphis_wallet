import cl from 'classnames'

import { LayoutMain } from '@layouts/layout_main'
import { Button } from '@components/button'
import { CoinItem, CoinItemType } from './components/coin_item'

import { BottomMenuKeys } from '@components/bottom_menu'

import { ReactComponent as Arrow } from '@assets/arrow_short_thin.svg'

import st from './landing.module.less'

const MOCK_BALANCE = 238470123.23
const MOCK_PROFIT = 238.53
const MOCK_PROFIT_PCT = 20.55

const MOCK_COINS: CoinItemType[] = [
  {
    name: 'sui',
    balance: 5231.23,
    price: 345.25,
    profit: 12.34,
  },
]

const commonButtonStyle = {
  minWidth: '40px',
  padding: '12px',
  width: '40px',
}

export const Landing = () => {
  return (
    <LayoutMain activeMenu={BottomMenuKeys.LANDING} showBottomMenu>
      <div className={st.landing}>
        <div className={st.overview}>
          <p className={st.balance}>
            <span className={st.dollar}>$</span>
            <span>{MOCK_BALANCE.toLocaleString()}</span>
          </p>
          <p className={cl([st.profit, MOCK_PROFIT > 0 ? st.pos : st.neg])}>
            {`+$${MOCK_PROFIT}`}
            <span className={st.bar} />
            {`+${MOCK_PROFIT_PCT}%`}
          </p>
          <div className={st.ops}>
            <div className={st.opContainer}>
              <Button sx={commonButtonStyle} variant="contained">
                <Arrow className={st.airdropArrow} />
              </Button>
              <span className={st.label}>Airdrop</span>
            </div>
            <div className={st.opContainer}>
              <Button sx={commonButtonStyle} variant="outlined">
                <Arrow />
              </Button>
              <span className={st.label}>Send</span>
            </div>
          </div>
        </div>
        <div className={st.coins}>
          {MOCK_COINS.map((coin: CoinItemType) => (
            <CoinItem key={coin.name} {...coin} />
          ))}
        </div>
      </div>
    </LayoutMain>
  )
}
