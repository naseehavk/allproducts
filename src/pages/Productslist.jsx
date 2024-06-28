import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Productslist() {
const [product,setProducts]=useState([])


  const fetchData=async()=>{
   const data = await fetch('https://fakestoreapi.com/products')
    data.json().then(data=>setProducts(data))
  }

  // const fetchData=()=>{
  //   fetch('https://fakestoreapi.com/products').then(data=>data.json())
  //   .then(data=>setProducts(data))
  // }
  
  // cannot use fetch is a  asynchronus method so we cant directly call in a use effect 
useEffect( ()=>{
  fetchData()
},[])
console.log(product);

return (
    <div>
       {/* <Container> */}
      <Row>
        <Col className='  d-flex align-items-center mt-5'  lg={8} >
        {/* <img className='w-100' src="https://media.istockphoto.com/id/2039797439/photo/shop-online-best-deals-e-commerce-mobile-app-3d-illustration-concept.jpg?s=612x612&w=0&k=20&c=JEfUnq2RMAv6TSWWR9Ni_XoYtbs00V0yirbdzSbVOiU=" alt="" /> */}
                <h1 className='text-white p-5' ><span className='wel text-center '>Welcome</span> <br />
                to Your One-Stop E-Cart </h1>

        </Col>
        <Col className='  d-flex align-items-center  '   lg={4}>
        {/* <h1 className='text-white' >Welcome to your shopping world </h1> */}
        <img className='w-100' src="" alt="" />

          
        </Col>
      </Row>
      
    {/* </Container> */}
    {product.length>0 ?
    <div className='p-3 m-3'>
<Row>
{
  product.map(i=>(
    <Col lg={3} md={4} sm={6}>
       <Card className=' bg-secondary border border-rounded shadow ' style={{ width: '18rem' }}>
      <Card.Img style={{height:'300px'}} variant="top" src={i.image} />
      <Card.Body>
        <Card.Title>{i.title.length>35?i.title.slice(0,40)+"...":
          i.title}</Card.Title>
        <Card.Text>
          {i.category}
          <br/>
          <h5>${i.price}</h5>
          <br/>
          <b>Rating:<span className={i.rating.rate >4 ?'text-success':i.rating.rate > 3?'text-warning':'text-danger'}>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-regular fa-star-half-stroke"></i>
            <i class="fa-regular fa-star-half-stroke"></i>
            <i class="fa-regular fa-star-half-stroke"></i>
         </span>
          </b>
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </Col>
  ))
}

</Row>
</div>
:
<div className='text-center p-4'>
<i class="fa-solid fa-spinner fa-spin fa-4x"></i>
</div>
}
<hr />
    </div>
  )
}

export default Productslist
