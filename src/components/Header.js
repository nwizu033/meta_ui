import {React, useState} from 'react'
import logo from '../stag3images/logogroup.png';
import { Link} from 'react-router-dom';
import Modal from './Modal';
function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState('menu');
  const [toggleIcon, setToggleIcon] = useState('toggler');

  const toggle = () => {
    active === 'menu' ? setActive('menu active') 
    : setActive('menu');

    toggleIcon === 'toggler' ? setToggleIcon('toggler toggle')
    : setToggleIcon('toggler');
  }
  return (
    <header>
        <div className='logo'>
            <img src={logo}/>
        </div>
        <div className={active}>
        <ul>
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to='/placetostay'>Place to stay</Link></li>
            <li>NFTs</li>
            <li>Community</li>
        </ul>
        <button onClick={() => setIsOpen(true)}>Connect wallet</button>
        </div>
        <div className={toggleIcon} onClick={toggle}>
          <div className='t1'></div>
          <div className='t2'></div>
          <div className='t3'></div>
        </div>
        <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        </Modal>
    </header>
  )
}

export default Header