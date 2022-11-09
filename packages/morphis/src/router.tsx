import { createBrowserRouter } from 'react-router-dom'

import { Welcome } from '@pages/welcome'
import { Create } from '@pages/create'
import { Done } from '@pages/create/pages/done'
import { Unlock } from '@pages/unlock'
import { Landing } from '@pages/landing'
import { NFT } from '@pages/nft'
import { History } from '@pages/history'
import { Settings } from '@pages/settings'

export default createBrowserRouter([
  {
    path: '/',
    element: <Welcome />,
  },
  {
    path: 'create',
    element: <Create />,
  },
  {
    path: 'create/done',
    element: <Done />,
  },
  {
    path: 'unlock',
    element: <Unlock />,
  },
  {
    path: 'landing',
    element: <Landing />,
  },
  {
    path: 'nft',
    element: <NFT />,
  },
  {
    path: 'history',
    element: <History />,
  },
  {
    path: 'settings',
    element: <Settings />,
  },
])
