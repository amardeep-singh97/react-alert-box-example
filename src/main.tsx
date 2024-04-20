import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { AlertContextProvider } from './AlertBoxWithContext/context.tsx'
import AlertBoxWithContext from './AlertBoxWithContext/index.tsx'
import AlertBox from './AlertBox/index.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AlertContextProvider>
      <div>
        <AlertBoxWithContext/>
        <AlertBox/>
        <App />
      </div>
    </AlertContextProvider>
  </React.StrictMode>,
)
