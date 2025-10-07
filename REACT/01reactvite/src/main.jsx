import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import Mee from './App.jsx'


const link = (<h1><a href= "http://amazon.in" target= '_blank'>OPEN AMAZON</a></h1>)

createRoot(document.getElementById('root')).render(
    // <Mee/>
    // <Mee/>
    link
)
