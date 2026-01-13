import React, { useContext } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import arrow_icon from '../../assets/arrow_icon.png'
import { CoinContext } from '../../context/Coincontext'
import { Link } from 'react-router-dom'


const Navbar = () => {

    const {setCurrency} = useContext(CoinContext);

    const currencyHandler = (e) =>{
        switch(e.target.value){
            case 'usd':
                setCurrency({name:'usd', symbol:'$'})
                break;
            case 'euro':
                setCurrency({name:'eur', symbol:'€'})
                break;
            case 'ngn':
                setCurrency({name:'ngn', symbol:'₦'})
                break;
            default:
                setCurrency({name:'usd', symbol:'$'})
        }
    }

  return (
    <nav className='navbar'>
        <div className='left-side'>
            <Link to={'/'}>
            <img src={logo} alt="" className='logo'/>
            </Link>
           
            <ul>
                <Link to={'/'}><li>Home</li></Link>
                <li>Features</li>
                <li>Pricing</li>
                <li>Blog</li>
            </ul>
        </div>

        <div className='right-side'>
            <select onChange={currencyHandler}>
                <option value="usd">USD</option>
                <option value="euro">EURO</option>
                <option value="ngn">NGN</option>
            </select>

            <button>
                sign up
                <img src={arrow_icon} alt="" />
            </button>
        </div>
    </nav>
  )
}

export default Navbar