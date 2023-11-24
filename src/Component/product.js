import React from 'react'
import { BsCart4} from 'react-icons/bs';
import { BsEye} from 'react-icons/bs';
import { AiFillHeart, AiOutlineCloseCircle } from 'react-icons/ai';
import { useAuth0 } from "@auth0/auth0-react";
import Productdetail from './productdetail'
import './product.css'
const Product = ({Product, setProduct, detail, view, close, setClose, addtocart}) => {

  const { loginWithRedirect, isAuthenticated } = useAuth0();
  const filtterproduct = (product) =>
  {
    const update = Productdetail.filter((x) =>
    {
     return x.Cat === product;
    })
    setProduct(update);
  }
  const AllProducts = () =>
  {
    setProduct(Productdetail)
  }
  return (
    <> 
    {
      close ?
      < div className='product_detail'>
      <div className='container'>
      <button onClick={() => setClose(false)} className='closebtn'><AiOutlineCloseCircle /></button>
        {
          detail.map((curElm) =>
          {
              return(
                <div className='productbox'>
                  <div className='img-box'>
                    <img src={curElm.Img} alt={curElm.Title}></img>
                </div>
                <div className='detail'>
                 <h4>{curElm.Cat}</h4> 
                 <h2>{curElm.Title}</h2>
                 <p>A day of pure Football</p>
                 <h3>{curElm.Price}</h3> 
                 <button>Add to Cart</button>
                </div>
                </div>
              )
          })
        }
        <div className='productbox'></div>
      </div>
      </div> :null
    }
   
    < div className='products'>
         <h3># Products</h3>
         <p>Home . Products</p>
        <div className='container'>
            <div className='filter'>
                <div className='categories'>
                    <h3>categories</h3>
                    <ul>
                      <li onClick={() => AllProducts ()}>All Products</li>
                        <li onClick={() => filtterproduct ("soccer Balls")}>soccer Balls</li>
                        <li onClick={() => filtterproduct ("Soccer boots")}>Soccer boots</li>
                        <li onClick={() => filtterproduct ("Soccer Socks")}>Soccer Socks</li>
                        <li onClick={() => filtterproduct ("shimguards")}>shimguards</li>
                        <li onClick={() => filtterproduct ("Soccer Water Box")}>Soccer Water Box</li>
                    </ul>
                </div>
            </div>
            <div className='productbox'>
                <div className='contact'>
                    {
                    detail.map((curElm) => 
                      
                      {
                        return(
                            <>
                            
                            <div className='box' key={curElm.id}>
                            <div className='img_box'>
                                <img src={curElm.Img} alt={curElm.Title}></img>
                                <div className='icon'>
                                  {
                                    isAuthenticated ?
                                    <li onClick={() => addtocart (curElm)}><BsCart4/></li>
                                    :
                                    <li onClick={() => loginWithRedirect()}><BsCart4/></li>

                                  }
                                   <li onClick={() => view (curElm)}> <BsEye/></li>
                                    <li> <AiFillHeart/></li>
                           </div>
                            </div>
                            <div className='detail'>
                                <p>{curElm.Cat}</p>
                                <h3>{curElm.Title}</h3>
                                <h4>{curElm.Price}</h4>
                            </div>

                          </div>
                        
                            </>
                        )
                      })  
                    }
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Product