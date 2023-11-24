
import React from 'react'
import { FaInstagram } from 'react-icons/fa';
import {  FaFacebookF  } from 'react-icons/fa';
import { BsTwitter } from 'react-icons/bs';
import { BsYoutube } from 'react-icons/bs';
import './footer.css'
const Footer = () => {
  return (
    <>
    <div className='footer'>
        <div className='container'>
            <div className='about'>
                <div className='logo'>
                    <img src='./img/b7.png' alt='logo'></img>
                </div>
                <div className='detail'>
                    <p>We deliver the best feetwear with success</p>
                    <div className='icon'>
                        <li><FaFacebookF /></li>
                        <li><FaInstagram /></li>
                        <li><BsTwitter /></li>
                        <li><BsYoutube /></li>
                    </div>
                </div>
            </div>
            <div className='account'>
                <h3>My Account</h3>
                <ul>
                    <li>Account</li>
                    <li>Order</li>
                    <li>Cart</li>
                    <li>shipping</li>
                    <li>return</li>
                </ul>
            </div>
            <div className='page'>
                <h3>Pages</h3>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Terms & Condition</li>
                </ul>
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer