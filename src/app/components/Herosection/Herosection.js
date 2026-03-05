import React from 'react'
import './Herosection.css';


const Herosection = () => {
  return (
    <div>
        <section className='heroSection'>
            <div className='container'>
                <div className='heroSectionWrapper'>
                    <div className='heroTag'>
                        <div className='purpleDot'></div>
                        <p className='heroTagText'>Accepting new ambitious partners</p>
                    </div>
                    <div className='heroTextWrapper'>
                        <h1 className='HeroText'>We build brands that look <br/>
                       <span className='expensiveSpan'>expensive </span>   and sell <span className='smarterSpan'>smarter.</span></h1>
<p className='HeroSubText'>Premium web design, development, branding, SEO & content — built to <br/>
convert attention into revenue without the fluff.</p>

                    </div>

                    <div className='btnWrapper'>
                        <button className='darkBtn'>Book Free Strategy Call</button>
                        <button className='whiteBtn'>See Services  <img src='https://images.mastersunion.link/uploads/25012026/v2/Component2.svg'/> </button>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Herosection