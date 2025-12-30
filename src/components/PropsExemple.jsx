import React from 'react'

const PropsExemple = (props) => {
  return (
    <div>
      <h3>Usando props:</h3>
      <p>Olá, eu sou o {props.nome}.</p>
      <p>Eu tenho {props.idade} anos de idade.</p>
    </div>
  )
}

export default PropsExemple;