import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../store"
import { Card, Button } from "react-bootstrap"
import { REMOVE } from "../store/CartSlice"


const Cart = () => {
    const products = useSelector((state: RootState)=> state.cart)

    const dispatch = useDispatch()

    const removeToCart = (id:number) =>{
        dispatch(REMOVE(id))
    }

    const cards = products.map(product=> (
        <div className="col-md-12" style={{marginBottom: '10px'}} key={product.id}>
            <Card className='h-100'>
                <div className="text-center">
                    <Card.Img variant='top' src={product.image} style={{width: '100px', height: '130p'}}/>
                </div>
                <Card.Body>
                    <Card.Title>
                        {product.title}
                    </Card.Title>
                    <Card.Text>
                        INR: {product.price}
                    </Card.Text>
                    <Card.Footer style={{background: 'white'}}>
                        <Button variant="danger"  onClick={()=> removeToCart(product.id)}>Remove Item</Button>
                    </Card.Footer>
                </Card.Body>

            </Card>
        </div>
    ))
  return (
    <div>
        <h1 className="text-center">Cart</h1>
     <div className="row">
        {cards}
     </div>
    </div>
  )
}

export default Cart

