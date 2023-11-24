import React, {useState} from 'react'
import Navbar from './Component/Navbar'
import Rout from './Component/rout';
import {BrowserRouter} from 'react-router-dom';
import Footer from './Component/footer';
import Productdetail from './Component/productdetail';
import Cart from './Component/cart';
const App = () => {
  //add to cart
  const [cart, setCart] = useState([])
  //product Detail
  const [close, setClose] = useState(false)
const [detail, setDetail] = useState([])
  //filter product
  const [Product, setProduct] = useState(Productdetail)
  const searchbtn = (Product) =>
  {
    const change = Productdetail.filter((x) =>
    {
      return x.Cat === Product
    })
    setProduct(change)
  }
  //product detail
  const view = (product) =>
  {
    setDetail([{...product}])
    setClose(true)
  }


 //add to cart
  const addtocart = (product) =>
  {
     
  const exit = cart.find((x) =>
  {
    return x.id === Product.id
  })
   if(exit)
   {
    alert("This Product is already added to cart")
   }
   else
   {
      setCart([...cart, {...product, qty:1}])
      alert("product is added to cart")
   }
  }
  console.log(cart)
  return (
    <>
    <BrowserRouter>
  <Navbar searchbtn={searchbtn}/> 
  <Rout product={Product} setProduct={setProduct} detail={detail} view={view} close={close} setClose={setClose} cart={cart} setCart={setCart} addtocart={addtocart}/> 
  <Footer />
  </BrowserRouter>
    </>
  )
}

export default App