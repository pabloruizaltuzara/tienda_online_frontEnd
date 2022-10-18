import React, { Component } from 'react'
import { Segment, Input } from 'semantic-ui-react'
import SearchForm from '../FormularioBusqueda'

class Navegacion extends Component {

  render() {
    return(
      <Segment textAlign='right' clearing style={{ marginTop: 15}}>
        <SearchForm/>
      </Segment>
    )
  }
}

export default Navegacion;
