import React, { Component } from 'react';
import { Container, Grid, Header } from 'semantic-ui-react'
import Menu from '../Menu'
import ListaProducto from '../ListaProductos'
import ListaCarrito from '../ListaCarrito'
import Ordenar from '../Ordenar'
import style from './App.css'

//logos
import camiseta_tipo_polo from '../../images/camisa_polo.PNG';
import camiseta_atletico_madrid from '../../images/camiseta-atletico-madrid.png';
import camiseta_barcelona from '../../images/camiseta-barcelona.png';
import camiseta_antes from '../../images/camiseta-antes-partido.PNG';
import camiseta_de_entrenamiento from '../../images/camiseta-de-entrenamiento-real-madrid.PNG';
import camiseta_blanca_authentic_real_madrid from '../../images/camiseta-blanca-authentic-real-madrid.PNG';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      openOrder: false,
      total: 0,
      sum: 0,
      products: [
        {
          id: 1,
          name: 'Camiseta tipo polo para dama',
          picture: camiseta_tipo_polo,
          price: 123,
          datails: 'Compra Protegida, recibe el producto que esperabas o te devolvemos tu dinero.',
          marca: 'Adidas',
          status: 5,
        },
        {
          id: 2,
          name: 'Camiseta atletico Madrid',
          picture: camiseta_atletico_madrid,
          price: 390,
          datails: 'Compra Protegida, recibe el producto que esperabas o te devolvemos tu dinero.',
          marca: 'Adidas',
          status: 6,
        },
        {
          id: 3,
          name: 'Camiseta Barcelona',
          picture: camiseta_barcelona,
          price: 189,
          datails: 'Compra Protegida, recibe el producto que esperabas o te devolvemos tu dinero.',
          marca: 'Nike',
          status: 2,
        },
        {
          id: 4,
          name: 'Camiseta Barcelona antes del mundial',
          picture: camiseta_antes,
          price: 780,
          datails: 'Compra Protegida, recibe el producto que esperabas o te devolvemos tu dinero.',
          marca: 'Nike',
          status: 6,
        },
        {
          id: 5,
          name: 'Camiseta de entrenamiento real madrid',
          picture: camiseta_de_entrenamiento,
          price: 328,
          marca: 'Nike',
          status: 10,
        },
        {
          id: 6,
          name: 'Camiseta blanca autentico madrid',
          picture: camiseta_blanca_authentic_real_madrid,
          price: 2733,
          marca: 'Adidas',
          status: 4,
        }

        
      ],
      cart: [],
    }

    this.manejarGuardarProducto = this.manejarGuardarProducto.bind(this)
    this.manejarAñadirProducto = this.manejarAñadirProducto.bind(this)
    this.manejarRemoverProducto = this.manejarRemoverProducto.bind(this)
    this.manejarOrdenAbierta = this.manejarOrdenAbierta.bind(this)
    this.manejarCarrito = this.manejarCarrito.bind(this)
  }

  manejarCarrito() {
    this.setState({
      cart: [],
      sum: 0,
      total: 0
    });
  }

  sumaProductos(array) {
    var total = 0
    array.forEach(product => total += product.order)
    this.setState({total: total})
  }

  sumaTotal(array) {
    var sum = 0
    array.forEach(product => sum += product.total)
    this.setState({sum: sum})
  }

  manejarAñadirProducto(indexCart, indexProduct){
    var statusCopy = Object.assign({}, this.state);
    if (statusCopy.products[indexProduct].status !== 0) {
      statusCopy.cart[indexCart].total += statusCopy.cart[indexCart].price
      statusCopy.cart[indexCart].order += 1
      statusCopy.products[indexProduct].status -= 1
      this.setState(statusCopy)
      this.sumaProductos(statusCopy.cart)
      this.sumaTotal(statusCopy.cart)
    } else {
      alert('Producto inexistente')
    }
  }

  manejarRemoverProducto(productId) {
    let product = this.state.products.find(p => p.id === productId);
    let indexProduct = this.state.products.findIndex(x => x.id === product.id)
    let cart = this.state.cart.find(p => p.id === productId)
    let indexCart = this.state.cart.findIndex(x => x.id === cart.id)

    var statusCopy = Object.assign({}, this.state);
    if(statusCopy.cart[indexCart].total === statusCopy.cart[indexCart].price ){
      indexCart !== -1 && statusCopy.cart.splice( indexCart, 1 );
      this.setState(statusCopy)
      alert('El producto fue eliminado del carrito de compras')
    } else {
      statusCopy.cart[indexCart].total -= statusCopy.cart[indexCart].price
      statusCopy.products[indexProduct].status += 1
      statusCopy.cart[indexCart].order -= 1
      statusCopy.total -= 1
      statusCopy.sum -= statusCopy.cart[indexCart].price
      this.setState(statusCopy)
    }
  }

  manejarGuardarProducto(productId) {
    let product = this.state.products.find(p => p.id === productId);
    let indexProduct = this.state.products.findIndex(x => x.id === product.id)

    var productCart = {
      id: product.id,
      name: product.name,
      img: product.picture,
      price: product.price,
      order: 1,
      total: product.price
    }

    var exist = this.state.cart.find(p => p.id === productId)
    if (undefined !== exist && exist !== null) {
      let indexCart = this.state.cart.findIndex(x => x.id === exist.id)
      this.manejarAñadirProducto(indexCart, indexProduct)
    }else{
      var statusCopy = Object.assign({}, this.state);
      statusCopy.products[indexProduct].status -= 1
      this.sumaProductos(statusCopy.cart)
      this.sumaTotal(statusCopy.cart)
      this.setState({
        cart: this.state.cart.concat([productCart]),
        statusCopy
      })
    }
  }

  manejarOrdenAbierta(event) {
    event.preventDefault()
    this.setState({ openOrder: true })
  }

  renderOpenOrder() {
    if (this.state.openOrder) {
      return (
        <Ordenar
          sum={this.state.sum}
          onClearCart={this.manejarCarrito}
        />
      )
    }
  }

  render() {
    return (
      <Container className={style.root}>
        <Menu/>
        <Grid>
          <Grid.Column width={12}>
            <ListaProducto
              products={this.state.products}
              onSaveProduct={this.manejarGuardarProducto}
              onIncrementProduct={this.manejarGuardarProducto}
              onRemoveProduct={this.manejarRemoverProducto}
            />
          </Grid.Column>
          <Grid.Column width={4}>
            <ListaCarrito
              items={this.state.cart}
              total={this.state.total}
              onOpenOrder={this.manejarOrdenAbierta}
            />
            {this.renderOpenOrder()}
          </Grid.Column>
        </Grid>
      </Container>
    )
  }
}

export default App;
