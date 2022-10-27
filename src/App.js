/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <MDBContainer className="my-5">

      <MDBCard>
        <MDBRow className='g-0'>

          <MDBCol md='6'>
         
          </MDBCol>

          <MDBCol md='6'>
            <MDBCardBody className='d-flex flex-column'>

              <div className='d-flex flex-row mt-2'>
             
                <MDBIcon fas icon="cubes fa-3x me-3" style={{ color: '#ff6219' }}/>
                <span className="h1 fw-bold mb-0">Recuperar Contraseña</span>
              
               
              </div>
              <h4>
                    <b>Tienda</b> Online
                    <MDBCardImage src={logo_tienda} alt="login form" className='rounded-start w-50'/>
                </h4>

              <h5 className="fw-normal my-4 pb-3" style={{letterSpacing: '1px'}}></h5>

                <MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg"/>
               

              <MDBBtn className="mb-4 px-5" color='dark' size='lg'>Recuperar</MDBBtn>
             
              <p className="mb-5 pb-lg-2" style={{color: '#393f81'}}>No tengo una cuenta? <a href="#!" style={{color: '#393f81'}}>Registrarse aquí</a></p>

              <div className='d-flex flex-row justify-content-start'>
              
              </div>

            </MDBCardBody>
        
          </MDBCol>

        </MDBRow>
      </MDBCard>

    </MDBContainer>

  );
}

export default App;*/

import { useReducer } from "react";
import { TYPES } from "../actions/shoppingAction";
import {
  shoppingInitialState,
  shoppingReducer,
} from "../reducers/shoppingReducer";
import CartItem from "./CartItem";
import ProductItem from "./ProductItem";

const ShoppingCart = () => {
  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);

  const { products, cart } = state;

  const addToCart = (id) => {
    //console.log(id);
    dispatch({ type: TYPES.ADD_TO_CART, payload: id });
  };

  const delFromCart = (id, all = false) => {
    //console.log(id, all);
    if (all) {
      dispatch({ type: TYPES.REMOVE_ALL_FROM_CART, payload: id });
    } else {
      dispatch({ type: TYPES.REMOVE_ONE_FROM_CART, payload: id });
    }
  };

  const clearCart = () => {
    dispatch({ type: TYPES.CLEAR_CART });
  };

  return (
    <div>
      <h2>Carrito de Compras</h2>
      <h3>Articulos</h3>
      <article className="box grid-responsive">
        {products.map((product) => (
          <ProductItem key={product.id} data={product} addToCart={addToCart} />
        ))}
      </article>
      <h3>Carrito</h3>
      <article className="box">
        <button onClick={clearCart}>Limpiar Carrito</button>
        {cart.map((item, index) => (
          <CartItem key={index} data={item} delFromCart={delFromCart} />
        ))}
      </article>
    </div>
  );
};

export default ShoppingCart;