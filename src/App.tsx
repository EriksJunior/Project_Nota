import { useContext } from 'react'
import { GlobalContext } from './shared/context/global/global'


import { AppRoutes } from "./routes"
import 'bootstrap/dist/css/bootstrap.min.css';
import { PageNavegation } from "./page/Navigation";
import { Loading } from './shared/components/Loading'


import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const { loading } = useContext(GlobalContext) as { loading: any }

  return (
    <>
      {loading &&
          <Loading />
        }
      <PageNavegation visible />
      <AppRoutes />
      <ToastContainer theme="dark"/>
    </>
  )
}

export default App