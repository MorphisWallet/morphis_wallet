import cl from 'classnames'

import st from './coin_item.module.less'

export type CoinItemType = {
  name: string
  balance: number
  price: number
  profit: number
}

type CoinItemProps = CoinItemType & {
  className?: string
}

export const CoinItem = ({ name, balance, price, profit }: CoinItemProps) => {
  const url = new URL(`/src/assets/${name}.svg`, import.meta.url).href

  return (
    <div className={st.container}>
      <div
        className={st.icon}
        style={{
          backgroundImage: `url(${url})`,
        }}
      />
      <div className={st.info}>
        <div className={st.row}>
          <span className={st.name}>{name}</span>
          <span className={st.price}>{`$${price.toLocaleString()}`}</span>
        </div>
        <div className={st.row}>
          <span className={st.balance}>{balance.toLocaleString()}</span>
          <span className={cl([st.profit, profit > 0 ? st.pos : st.neg])}>
            {`$${profit.toLocaleString()}`}
          </span>
        </div>
      </div>
    </div>
  )
}
