import './Header.css';



export default function Header() {
  return (
    <div className='navBar' >
        <div className='container'>
            <div className='navbarWrapper'>
                <div className='navbarLeftWrapper'>
                    <img className='Logo' src='https://images.mastersunion.link/uploads/25012026/v1/Asset22x.webp' alt="VoidFrame"/>
                    <h2 className='heading' > Void Frame</h2>
                </div>

                <div className='navbarCenterWrapper'>
                    <a className='navSubText'>Services</a>
                    <a className='navSubText'>Process</a>
                    <a className='navSubText'>Pricing</a>
                    <a className='navSubText'>FAQ</a>
                     
                  
                </div>

                <div className='navbarRightWrapper'>
                    <button className='roundedDarkBtn'>
                        Book Strategy Call
                        <img src="https://images.mastersunion.link/uploads/25012026/v1/Component2.svg" alt="Book Strategy Call"/>
                    </button>
                </div>


            </div>

        </div>
    </div>
  );
}
