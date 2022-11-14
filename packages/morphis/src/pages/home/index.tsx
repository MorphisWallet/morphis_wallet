// Copyright (c) Mysten Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

import { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { of, filter, switchMap, from, defer, repeat } from 'rxjs'

import { LayoutMain } from '@layouts/layout_main'
import { Loading } from '@components/loading'

import {
  useInitializedGuard,
  useAppDispatch,
  useLockedGuard,
} from '@core/hooks'
import { fetchAllOwnedAndRequiredObjects } from '@core/slices/sui-objects'
import { usePageView } from '@shared/utils'

const POLL_SUI_OBJECTS_INTERVAL = 4000

interface HomeProps {
  disableNavigation?: boolean
  limitToPopUpSize?: boolean
}

export const Home = ({ limitToPopUpSize = true }: HomeProps) => {
  const dispatch = useAppDispatch()
  const initChecking = useInitializedGuard(true)
  const lockedChecking = useLockedGuard(false)
  usePageView()

  const [visibility, setVisibility] = useState(
    document?.visibilityState || null
  )

  const guardChecking = initChecking || lockedChecking

  useEffect(() => {
    const callback = () => {
      setVisibility(document.visibilityState)
    }
    callback()
    document.addEventListener('visibilitychange', callback)
    return () => {
      document.removeEventListener('visibilitychange', callback)
    }
  }, [])

  useEffect(() => {
    const sub = of(guardChecking || visibility === 'hidden')
      .pipe(
        filter((paused) => !paused),
        switchMap(() =>
          defer(() => from(dispatch(fetchAllOwnedAndRequiredObjects()))).pipe(
            repeat({ delay: POLL_SUI_OBJECTS_INTERVAL })
          )
        )
      )
      .subscribe()
    return () => sub.unsubscribe()
  }, [guardChecking, visibility, dispatch])

  return (
    <LayoutMain limitToPopUpSize={limitToPopUpSize}>
      <Loading loading={guardChecking}>
        <Outlet />
      </Loading>
    </LayoutMain>
  )
}
