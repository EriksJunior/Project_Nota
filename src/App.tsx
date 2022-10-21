import { AppRoutes } from "./routes"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navegation } from "./components/Navegation";


 function App(){
  return (
    <>
      <Navegation/>
      <AppRoutes />
    </>
  )
}

export default App