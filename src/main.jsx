import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Success from './compo/Success.jsx'
import Errors from './compo/Errors.jsx'
import { Provider } from 'react-redux'
import Store from './redux/store.js'
import Protected from './compo/Protected.jsx'
import Show from './compo/Show.jsx'
import Father from './compo/Father.jsx'
import ScrollToTop from './compo/ScrollToTop.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={Store}>
    <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<Father />}>

          <Route path='/' element={<App />} />
          <Route path='/:id' element={<Show />} />
          <Route path='*' element={<Errors />} />

          </Route>
          <Route path='/success' element={<Protected element={<Success />} />} />
          
        </Routes>
    </BrowserRouter>
    </Provider>
  </StrictMode>,
)
