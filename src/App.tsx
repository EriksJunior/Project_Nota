 import { AppRoutes } from "./routes"
 import { ClientModal } from "./components/Cliente"
import { Leaf } from "./components/Leaf"
import 'bootstrap/dist/css/bootstrap.min.css';
 function App(){
  return (
    <>
      <AppRoutes />
      <ClientModal/>
      <Leaf/>
    </>
  )
}

export default App