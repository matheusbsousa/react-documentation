import {useState} from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Painel from './components/Painel/Painel'
import PainelPrincipal from './components/Painel/PainelPrincipal'

function App() {
    const [count, setCount] = useState(0)

    return (
        <div className="App">
            <PainelPrincipal></PainelPrincipal>
        </div>
    )
}

export default App
