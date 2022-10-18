import React from 'react'
import Format from '../FormatoNumerico'
import { Card, Image, Label, Button} from 'semantic-ui-react'


function Product(props) {
  return(
    <Card style={{ marginTop: 15}} className="center">
      <Image size="small" style={{with: 100}} src={props.picture}/>
      <Card.Content>
        <Card.Header style={{fontSize: 15}}>{props.name}</Card.Header>
        <Card.Meta>
          <Format number={props.price}/>
        </Card.Meta>
        <Card.Description>
          <Label>{props.marca}</Label>
          <Label>{props.status} en stock</Label>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button
          basic
          compact
          color='blue'
          floated='right'
          onClick={props.onSaveProduct}
        >
          Agregar al carrito
        </Button>
      </Card.Content>
      <Card.Content extra>
        <Button.Group floated='right'>
          <Button
            compact
            onClick={props.onIncrementProduct}
            >+</Button>
          <Button
            compact
            onClick={props.onRemoveProduct}
            >-</Button>
        </Button.Group>
      </Card.Content>
    </Card>
  )
}

export default Product
