import {useState, useEffect} from 'react'
import { Button, Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { ADD } from '../store/CartSlice';
import { getProducts } from '../store/ProductSlice';
import { RootState } from '../store';
interface Response{
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: [rate: number, count: number]
}

const Product = () => {
    const dispatch = useDispatch()
    const {data: products, status} = useSelector((state: RootState)=> state.products)
    useEffect(()=>{
        dispatch(getProducts())
    },[])

    if(status === 'Loading'){
        return <p>Loading...</p>
    }
    if(status === 'error'){
        return <p>error</p>
    }

 const addToCart = (product:Response) =>{
    dispatch(ADD(product))
 }

    const cards = products.map(product=> (
        <div className="col-md-3" style={{marginBottom: '10px'}} key={product.id}>
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
                        <Button variant="primary" onClick={()=> addToCart(product)}>Add To Cart</Button>
                    </Card.Footer>
                </Card.Body>

            </Card>
        </div>
    ))

  return (
    <>
    <h1 className="text-center">Product Dashboard</h1>
      <div className="row">
        {cards}
      </div>
    </>
  )
}

export default Product
