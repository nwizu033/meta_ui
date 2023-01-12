import React from 'react'
import Metamask from '../stag3images/metwallet.png'
import WalletConnect from '../stag3images/wallconxt.png'
import { ReactComponent as Arrow } from '../stag3images/arrow.svg';
import ReactDOM  from 'react-dom';

export default function Modal({open, children, onClose}) {
    if(!open) return null;
  return ReactDOM.createPortal(
    <>
   
    <div className='modal'>
        <div className='modal-container'>
            <div className='connect-walletx'>
                <p>Connect Wallet</p>
                <p onClick={onClose} className='hoverr'>X</p>
            </div>
            <div className='walletss'>
                <p>Choose your preferred wallet:</p>
                <div className='wallet-line'>
                    <img src={Metamask}/>
                    <Arrow/>
                    
    
                </div>
                <div className='wallet-line'>
                    <img src={WalletConnect}/>
                    <Arrow/>
                   
                </div>
            </div>
        </div>

    </div>
    </>,
    document.getElementById('portal')
  )
}
