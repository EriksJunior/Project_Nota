import { useContext } from 'react'
import { GlobalContext } from '../../shared/context/global/global'

import { Leaf } from '../../shared/components/Leaf'
import { Navegation } from '../../shared/components/Navegation'
import { LeafProvider } from '../../shared/context/leaf/leaf'
import { Loading } from '../../shared/components/Loading'

export function Home() {
  const { loading } = useContext(GlobalContext) as { loading: any }

  return (
    <div>
      <Navegation />
      <LeafProvider>
        {loading &&
          <Loading />
        }
        <Leaf />
      </LeafProvider>
    </div>
  )
}