import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Dash from './Projects/Dash.jsx'
import Carousel from './Projects/carousel.jsx'
import Placed from './Projects/Plathore.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Dash/>
    <Carousel/>
    <Placed/>
  </StrictMode>,
)
