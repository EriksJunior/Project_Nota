import React from 'react'
import { BrowserRouter } from "react-router-dom";
import ReactDOM from 'react-dom/client'

import App from './App'
import GlobalStyle from './styles'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
        <App />
      <GlobalStyle />
    </BrowserRouter>
  </React.StrictMode>
)
