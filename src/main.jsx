import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { DataProvider } from './Component/DataProvider/DataProvider.jsx'
import { reducer, initialState } from './Component/Utilities/reducer.js'
// import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DataProvider initialState={initialState} reducer={reducer}>
      {/* <BrowserRouter> */}
        {/* <App /> */}
      {/* </BrowserRouter> */}
      <App />

    </DataProvider>
  </StrictMode>,
)
