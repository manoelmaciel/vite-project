// componente pai 
import './App.css'
// importar o componente filho ...
import FunctionalComponent from './components/FunctionalComponent'
function App() {

  return (
    <>
      <div className="card">
        <h1>
          Meu primeiro componente ... !
        </h1>
        <FunctionalComponent />
        
      </div>
    </>
  )

}

export default App
