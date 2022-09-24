import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import RandoContextProvider from "./store/RandoContextProvider.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
          <RandoContextProvider>
            <App />
          </RandoContextProvider>
  </React.StrictMode>
)
