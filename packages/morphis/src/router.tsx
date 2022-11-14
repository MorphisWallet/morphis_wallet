import { createBrowserRouter } from 'react-router-dom'

import { Home } from '@pages/home'
import { Locked } from '@pages/locked'
import { Initialize } from '@pages/initialize'
import { NFT } from '@pages/nft'
import { History } from '@pages/history'

export default createBrowserRouter([
  {
    path: '/*',
    element: <Home />,
    children: [
      {
        path: 'nft',
        element: <NFT />,
      },
      {
        path: 'history',
        element: <History />,
      },
    ],
  },
  {
    path: 'locked',
    element: <Locked />,
  },
  {
    path: '/initialize',
    element: <Initialize />,
  },
])
