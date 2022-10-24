import { AppRoutes } from "./routes"
import 'bootstrap/dist/css/bootstrap.min.css';
import { PageNavegation } from "./page/Navigation";

function App() {
  return (
    <>
      <PageNavegation />
      <AppRoutes />
    </>
  )
}

export default App