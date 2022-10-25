import React from 'react'
import { Segment, Grid } from 'semantic-ui-react'
import Product from '../Producto'


function ProductList(props) {
  return (
    <Segment>
      <Grid>
        <Grid.Row columns={3}>
          {props.products.map(p => {
            return (
              <Grid.Column>
                <Product
                  key={p.idproducto}
                  nombre={p.nombre}
                  picture={p.picture}
                  precio_venta={p.precio_venta}
                  marca={p.marca}
                  stock={p.stock}
                  onSaveProduct={() => props.onSaveProduct(p.idproducto)}
                  onIncrementProduct={() => props.onIncrementProduct(p.idproducto)}
                  onRemoveProduct={() => props.onRemoveProduct(p.idproducto)}
                />
              </Grid.Column>
            )
          })}
        </Grid.Row>
      </Grid>
    </Segment>
  )
}

export default ProductList
