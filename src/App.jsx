// componente pai 
import './App.css'
// importar os componente filhos ...
import FunctionalComponent from './components/FunctionalComponent';
import ClassComponent from './components/ClassComponent';
import PropsExemple from './components/PropsExemple';

function App() {

  return (
    <>
      <div className="card">
        <h1>
          Meu primeiro componente ... !
        </h1>
        <FunctionalComponent />
        <ClassComponent />
        <PropsExemple nome="Maciel" idade={17}/>
        
      </div>
    </>
  )

}

export default App
