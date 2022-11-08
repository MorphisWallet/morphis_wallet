import { DetailedHTMLProps } from 'react'
import cl from 'classnames'

import LogoIcon from '@assets/logo.svg'

import st from './logo.module.less'

type LogoProps = DetailedHTMLProps<
  React.ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
>

export const Logo = ({ className, ...restProps }: LogoProps) => (
  <img
    alt="logo"
    className={cl([st.logo, className])}
    height={55}
    src={LogoIcon}
    width={58}
    {...restProps}
  />
)
