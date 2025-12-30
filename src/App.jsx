// componente pai 
import './App.css'
// importar os componente filhos ...
import FunctionalComponent from './components/FunctionalComponent';
import ClassComponent from './components/ClassComponent';

function App() {

  return (
    <>
      <div className="card">
        <h1>
          Meu primeiro componente ... !
        </h1>
        <FunctionalComponent />
        <ClassComponent />
        
      </div>
    </>
  )

}

export default App
