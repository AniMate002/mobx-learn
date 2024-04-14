import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { spy } from 'mobx'

spy(ev => {
  if(ev.type === 'action'){
    console.log("EVENT ACTION USING SPY: ", ev)
  }
})

ReactDOM.createRoot(document.getElementById('root')!).render(
    <App />
)
