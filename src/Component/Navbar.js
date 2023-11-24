import React, { useState } from 'react'
import { FaTruck } from 'react-icons/fa';
import { BsFillBagHeartFill } from 'react-icons/bs';
import { PiShoppingBagOpenBold } from 'react-icons/pi';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { CiLogin} from 'react-icons/ci';
import {CiLogout} from 'react-icons/ci';
import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import './Navbar.css'

const Navbar = ({searchbtn}) => {
    const [Search, setSearch] = useState()
    const { loginWithRedirect, logout,  user, isAuthenticated } = useAuth0();
  return (
    <>
    <div className='free'>
           <div className='icon'>
            <FaTruck />
            </div>
            <p> Free shipping when shopping upto $500 </p>
    </div>
    <div className='main_header'>
        <div className='container'>
            <div className='logo'>
                <img src='./img/b7.png' alt='logo'></img>
            </div>
            <div className='search_box'>
                <input type='text' value={Search} placeholder='Search your product... ' autoComplete='off' onChange={(e) => setSearch(e.target.value)}></input>
                <button onClick={() => searchbtn (Search)}>Search</button>
            </div>
            <div className='icon'>
                {
                    isAuthenticated &&
                    (
                        <div className='account'>
                        <div className='user_icon'>
                        < AiOutlineUserAdd/>
                        </div>
                 <p>Hello,{user.name}</p>
                    </div>  
                    )
                }
                
                <div className='second_icon'>
                <Link to="/" className='link'><BsFillBagHeartFill /></Link>
                <Link to="/cart" className='link'><PiShoppingBagOpenBold  /></Link>
            </div>
            </div>
        </div>
    </div>
    <div className='header'>
        <div className='container'>
            <div className='Navbar'>

            <ul>
                <li>
                    <Link to='/' className='Link'>Home</Link>
                </li>
                <li>
                    <Link to='/product' className='Link'>Product</Link>
                </li>
                <li>
                    <Link to='/about' className='Link'>About</Link>
                </li>
                <li>
                    <Link to='/contact' className='Link'>Contact</Link>
                </li>
            </ul>
            </div>      
            <div className='auth'>
                {
                     isAuthenticated ?
                     <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}><CiLogout/></button>
                     :
                     <button onClick={() => loginWithRedirect()}><CiLogin/></button>
                }
               
                
            </div>
        </div>
    </div>

    </>
  )
}

export default Navbar