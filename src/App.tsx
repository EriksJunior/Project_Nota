import { AppRoutes } from "./routes"
import 'bootstrap/dist/css/bootstrap.min.css';
import { PageNavegation } from "./page/Navigation";


import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <PageNavegation />
      <AppRoutes />
      <ToastContainer theme="dark"/>
    </>
  )
}

export default App