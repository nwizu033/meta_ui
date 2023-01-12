import React from 'react'
import { ReactComponent as FooterLogo } from '../stag3images/footerlogo.svg';
import { ReactComponent as FacebookLogo } from '../stag3images/facebook.svg';
import { ReactComponent as InstagramLogo } from '../stag3images/instagram.svg';
import { ReactComponent as TwitterLogo } from '../stag3images/twitter.svg';

function Footer() {
  return (
    <footer>
      <div className='logo-part'>
        <FooterLogo/>
        <div className='socials'>
          <FacebookLogo/>
          <InstagramLogo/>
          <TwitterLogo/>
        </div>
        <div className='copyright'>
          <p>&copy;  2022 Metabnb</p>
        </div>
      </div>
      <div className='footer-rest'>
      <ul>
        <li className='bigger'>Community</li>
        <li>NFT</li>
        <li>Tokens</li>
        <li>Landlords</li>
        <li>Discord</li>
      </ul>
      <ul>
        <li className='bigger'>Places</li>
        <li>Castle</li>
        <li>Farms</li>
        <li>Beach</li>
        <li>Learn more</li>
      </ul>
      <ul>
        <li className='bigger'>About us</li>
        <li>Road map</li>
        <li>Creators</li>
        <li>Career</li>
        <li>Contact us</li>
      </ul>
      </div>
      
    </footer>
  )
}

export default Footer