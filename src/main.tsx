import React from 'react'
import { BrowserRouter } from "react-router-dom";
import ReactDOM from 'react-dom/client'

import App from './App'
import GlobalStyle from './styles'

import { GlobalProvider } from './shared/context/global/global'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalProvider>
        <App />
      </GlobalProvider>
      <GlobalStyle />
    </BrowserRouter>
  </React.StrictMode>
)
