import React from 'react'

const PropsExemple = ({nome, idade}) => {
  return (
    <div>
      <h3>Usando props:</h3>
      <p>Olá, eu sou o {nome}.</p>
      <p>Eu tenho {idade} anos de idade.</p>
    </div>
  )
}

export default PropsExemple;