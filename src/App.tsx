import './App.css'
import Tablazat from './components/Tablazat'
import { KonyvProvider } from './contexts/KonyvContext'
import Urlap from './components/Urlap'

function App() {

  return (
    <>
      <header>
        <h1>Könyvesbolt admin felület</h1>
      </header>
      <KonyvProvider>
        <Urlap />
        <Tablazat />
      </KonyvProvider>
      <footer>
        <p>&copy; Készitette: Fóti Dávid</p>
      </footer>
    </>
  )
}

export default App
