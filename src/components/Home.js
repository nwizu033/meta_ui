import React from 'react';
import { ReactComponent as MetaLogo } from '../stag3images/metalogos.svg';
import { ReactComponent as MbtLogo } from '../stag3images/mbtokenlogoss.svg';
import { ReactComponent as OpenseaLogo } from '../stag3images/openseelogos.svg';
import { ReactComponent as StarsLogo } from '../stag3images/startslogo.svg';
import img3 from '../stag3images/image3.png';
import img4 from '../stag3images/image4.png';
import img5 from '../stag3images/image5.png';
import img6 from '../stag3images/image6.png';
import img7 from '../stag3images/image7.png';
import img8 from '../stag3images/image8.png';
import img9 from '../stag3images/image9.png';
import frame from '../stag3images/Frame.png';
import frame1 from '../stag3images/Frame1.png';
import frame2 from '../stag3images/Frame2.png';
import frame3 from '../stag3images/Frame3.png';
import frame4 from '../stag3images/Frame4.png';
import frame5 from '../stag3images/Frame5.png';
import frame6 from '../stag3images/Frame6.png';
import frame7 from '../stag3images/Frame7.png';

function Home() {
  return (
    <div className='home'>
        <div className='home-top'>
            <div className='top-left'>
                <h1>Rent a <span>Place</span> away from<br/><span>Home</span> in the <span>Metaverse</span></h1>
                <p>we provide you access to luxury and afffordable houses<br/>
                in the metaverse, get a chance to turn your <br/>
                imagination to reality at your comfort zone
                </p>
                <input type='text' placeholder='search for location'/>
                <button>Search</button>
            </div>
            <div className='top-right'>
                <div className='block1'>
                    <img src={img4}/>
                    <img src={img6}/>
                </div>
                <div className='block2'>
                    <img src={img3}/>
                    <img src={img5}/>
                </div>
            </div>
        </div>
        <div className='home-break'>
            <MbtLogo className='logos'/>
            <MetaLogo className='logos'/>
            <OpenseaLogo className='logos'/>
        </div>
        <div className='home-middle'>
            <h2>Inspiration for your adventure</h2>
            <div className='lines'>
                <div className='card'>
                    <img src={frame}/>
                    <div className='details-up'>
                        <p>Desert king</p>
                        <p className='bold'>1MBT per night</p>
                    </div>
                    <div className='details-down'>
                        <p>2345km away</p>
                        <p>available for 2weeks stay</p>
                    </div>
                    <StarsLogo/>
                </div>
                <div className='card'>
                    <img src={frame1}/>
                    <div className='details-up'>
                        <p>Desert king</p>
                        <p className='bold'>1MBT per night</p>
                    </div>
                    <div className='details-down'>
                        <p>2345km away</p>
                        <p>available for 2weeks stay</p>
                    </div>
                    <StarsLogo/>
                </div>
                <div className='card'>
                    <img src={frame2}/>
                    <div className='details-up'>
                        <p>Desert king</p>
                        <p className='bold'>1MBT per night</p>
                    </div>
                    <div className='details-down'>
                        <p>2345km away</p>
                        <p>available for 2weeks stay</p>
                    </div>
                    <StarsLogo/>
                </div>
                <div className='card'>
                    <img src={frame3}/>
                    <div className='details-up'>
                        <p>Desert king</p>
                        <p className='bold'>1MBT per night</p>
                    </div>
                    <div className='details-down'>
                        <p>2345km away</p>
                        <p>available for 2weeks stay</p>
                    </div>
                    <StarsLogo/>
                </div>
            </div>
            <div className='lines'>
            <div className='card'>
                    <img src={frame4}/>
                    <div className='details-up'>
                        <p>Desert king</p>
                        <p className='bold'>1MBT per night</p>
                    </div>
                    <div className='details-down'>
                        <p>2345km away</p>
                        <p>available for 2weeks stay</p>
                    </div>
                    <StarsLogo/>
                </div>
                <div className='card'>
                    <img src={frame5}/>
                    <div className='details-up'>
                        <p>Desert king</p>
                        <p className='bold'>1MBT per night</p>
                    </div>
                    <div className='details-down'>
                        <p>2345km away</p>
                        <p>available for 2weeks stay</p>
                    </div>
                    <StarsLogo/>
                </div>
                <div className='card'>
                    <img src={frame6}/>
                    <div className='details-up'>
                        <p>Desert king</p>
                        <p className='bold'>1MBT per night</p>
                    </div>
                    <div className='details-down'>
                        <p>2345km away</p>
                        <p>available for 2weeks stay</p>
                    </div>
                    <StarsLogo/>
                </div>
                <div className='card'>
                    <img src={frame7}/>
                    <div className='details-up'>
                        <p>Desert king</p>
                        <p className='bold'>1MBT per night</p>
                    </div>
                    <div className='details-down'>
                        <p>2345km away</p>
                        <p>available for 2weeks stay</p>
                    </div>
                    <StarsLogo/>
                </div>
            </div>
        </div>
        <div className='home-bottom'>
            <div className='bottom-left'>
                <h1>Metabnb NFTs</h1>
                <p>
                    Discover our NFT gift cards collection. Loyal <br/>
                    customers gets amazing gift cards which are <br/>
                    traded as NFTs. These NFTs gives our customer <br/>
                    access to loads of exclusive services.
                </p> <br/>
                <button>Learn more</button>
            </div>
            <div className='bottom-right'>
                <div className='img-container'>
                    <img src={img7} className='img1'/>
                    <img src={img9} className='img2'/>
                    <img src={img8} className='img3'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home