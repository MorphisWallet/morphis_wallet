// Copyright (c) Mysten Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

import cl from 'classnames'

import { Loading } from '@components/loading'
import { useAppSelector, useFullscreenGuard } from '@core/hooks'
import { getNavIsVisible } from '@core/slices/app'

import type { ReactNode } from 'react'

import st from './layout_main.module.less'

export type LayoutMainProps = {
  limitToPopUpSize?: boolean
  forceFullscreen?: boolean
  children: ReactNode | ReactNode[]
  className?: string
}

export const LayoutMain = ({
  limitToPopUpSize = false,
  forceFullscreen = false,
  children,
  className,
}: LayoutMainProps) => {
  const guardLoading = useFullscreenGuard(forceFullscreen)
  const isNavVisible = useAppSelector(getNavIsVisible)

  return (
    <Loading loading={guardLoading}>
      <div
        className={cl(
          st.container,
          className,
          limitToPopUpSize ? st.forcedPopupSize : st.dynamicSize,
          {
            [st.navHidden]: !isNavVisible,
          }
        )}
      >
        {children}
      </div>
    </Loading>
  )
}
