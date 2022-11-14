// Copyright (c) Mysten Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

import { Outlet, useLocation } from 'react-router-dom'

import { Loading } from '@components/loading'
import { useInitializedGuard } from '@core/hooks'
// import { LayoutMain } from '@layouts/layout_main'

// import st from './initializePage.module.less'

export const Initialize = () => {
  const { pathname } = useLocation()
  const checkingInitialized = useInitializedGuard(
    /^\/initialize\/backup(-imported)?(\/)?$/.test(pathname)
  )

  return (
    <Loading loading={checkingInitialized}>
      <Outlet />
    </Loading>
  )
}
