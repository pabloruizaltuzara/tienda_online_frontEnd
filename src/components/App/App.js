import React, { Component } from 'react';
//import axios from "axios";

//import { Header, Input } from 'semantic-ui-react'
import { Container, Grid } from 'semantic-ui-react'
import Menu from '../Menu'
import ListaProducto from '../ListaProductos'
import ListaCarrito from '../ListaCarrito'
import Ordenar from '../Ordenar'
import style from './App.css'

//logos
import camiseta_tipo_polo from '../../images/camisa_polo.jpg';
import camiseta_atletico_madrid from '../../images/camiseta-atletico-madrid.png';
import camiseta_barcelona from '../../images/camiseta-barcelona.png';
import camiseta_antes from '../../images/camiseta-antes-partido.jpg';
import camiseta_de_entrenamiento from '../../images/camiseta-de-entrenamiento-real-madrid.jpg';
import camiseta_blanca_authentic_real_madrid from '../../images/camiseta-blanca-authentic-real-madrid.jpg';


//http://localhost/apiVentaonline-main/index.php/Producto/list'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      openOrder: false,
      total: 0,
      sum: 0,
      products: [
        {
          idproducto: 1,
          nombre: 'Camiseta tipo polo para dama',
          picture: camiseta_tipo_polo,
          precio_venta: 123,
          descripcion: 'Compra Protegida, recibe el producto que esperabas o te devolvemos tu dinero.',
          marca: 'Adidas',
          stock: 5,
        },
        {
          idproducto: 2,
          nombre: 'Camiseta atletico Madrid',
          picture: camiseta_atletico_madrid,
          precio_venta: 390,
          descripcion: 'Compra Protegida, recibe el producto que esperabas o te devolvemos tu dinero.',
          marca: 'Adidas',
          stock: 6,
        },
        {
          idproducto: 3,
          nombre: 'Camiseta Barcelona',
          picture: camiseta_barcelona,
          precio_venta: 189,
          descripcion: 'Compra Protegida, recibe el producto que esperabas o te devolvemos tu dinero.',
          marca: 'Nike',
          stock: 2,
        },
        {
          idproducto: 4,
          nombre: 'Camiseta Barcelona antes del mundial',
          picture: camiseta_antes,
          precio_venta: 780,
          descripcion: 'Compra Protegida, recibe el producto que esperabas o te devolvemos tu dinero.',
          marca: 'Nike',
          stock: 6,
        },
        {
          idproducto: 5,
          nombre: 'Camiseta de entrenamiento real madrid',
          picture: camiseta_de_entrenamiento,
          precio_venta: 328,
          marca: 'Nike',
          stock: 10,
        },
        {
          idproducto: 6,
          nombre: 'Camiseta blanca autentico madrid',
          picture: camiseta_blanca_authentic_real_madrid,
          precio_venta: 2733,
          marca: 'Adidas',
          stock: 4,
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
    if (statusCopy.products[indexProduct].stock !== 0) {
      statusCopy.cart[indexCart].total += statusCopy.cart[indexCart].precio_venta
      statusCopy.cart[indexCart].order += 1
      statusCopy.products[indexProduct].stock -= 1
      this.setState(statusCopy)
      this.sumaProductos(statusCopy.cart)
      this.sumaTotal(statusCopy.cart)
    } else {
      alert('Producto inexistente')
    }
  }

  manejarRemoverProducto(productId) {
    let product = this.state.products.find(p => p.idproducto === productId);
    let indexProduct = this.state.products.findIndex(x => x.idproducto === product.idproducto)
    let cart = this.state.cart.find(p => p.idproducto === productId)
    let indexCart = this.state.cart.findIndex(x => x.idproducto === cart.idproducto)

    var statusCopy = Object.assign({}, this.state);
    if(statusCopy.cart[indexCart].total === statusCopy.cart[indexCart].precio_venta ){
      indexCart !== -1 && statusCopy.cart.splice( indexCart, 1 );
      this.setState(statusCopy)
      alert('El producto fue eliminado del carrito de compras')
    } else {
      statusCopy.cart[indexCart].total -= statusCopy.cart[indexCart].precio_venta
      statusCopy.products[indexProduct].stock += 1
      statusCopy.cart[indexCart].order -= 1
      statusCopy.total -= 1
      statusCopy.sum -= statusCopy.cart[indexCart].precio_venta
      this.setState(statusCopy)
    }
  }

  manejarGuardarProducto(productId) {
    let product = this.state.products.find(p => p.idproducto === productId);
    let indexProduct = this.state.products.findIndex(x => x.idproducto === product.idproducto)

    var productCart = {
      idproducto: product.idproducto,
      nombre: product.nombre,
      img: product.picture,
      precio_venta: product.precio_venta,
      order: 1,
      total: product.precio_venta
    }

    var exist = this.state.cart.find(p => p.idproducto === productId)
    if (undefined !== exist && exist !== null) {
      let indexCart = this.state.cart.findIndex(x => x.idproducto === exist.idproducto)
      this.manejarAñadirProducto(indexCart, indexProduct)
    }else{
      var statusCopy = Object.assign({}, this.state);
      statusCopy.products[indexProduct].stock -= 1
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
