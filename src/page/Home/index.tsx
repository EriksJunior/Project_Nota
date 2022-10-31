import { Leaf } from '../../shared/components/Leaf'
import { LeafProvider } from '../../shared/context/leaf/leaf'

export function Home() {
  return (
    <div>
      <LeafProvider>
        <Leaf />
      </LeafProvider>
    </div>
  )
}