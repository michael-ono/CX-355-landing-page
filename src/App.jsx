import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import banner from './assets/cx 365.png';
import customerServiceGirl from './assets/customer-service-girl.png';
import Frame1 from './assets/Frame-1.png';
import Frame2 from './assets/Frame-2.png';
import Frame3 from './assets/Frame-3.png';
import Frame4 from './assets/Frame-4.png';


function App() {
  return (
    <React.Fragment >
      <div id='hero'>
        <Navbar />
        <div className=' container grid grid-cols-2 sm:grid grid-row'>
          <div className='container py-5 pl-8' id='hero-main'>
            <img src={banner}
              height={100}
              width={200}
              style={{ marginBottom: 20, marginTop: 40 }}
              alt=""
            />
            <h1 className='' id='crm-title' style={{ marginBottom: 20 }}>Multi <br /> Customer Relationship Management </h1>
            <h2 className='text-xl font-medium' id='mantra' >We are focused on the changing the way <br />people do work</h2>
            <button
              className='bg hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
              style={{ backgroundColor: '#004581', marginTop: 10 }}
            >
              Get Started
            </button>
          </div>

          <div className='align-bottom justify-end object-bottom h-fit' id='hero-service-girl'>
            <img
              src={customerServiceGirl}
              alt="customer service girl"
              height={450}
              width={450}
              style={{ marginTop: 26 }}
              className='align-bottom'
            />
          </div>

        </div>
      </div>

      <div id='work-with-us' className='mb-20'>
        <h1 className='text-white font-bold text-center text-4xl' id='title-work-with-us'>Why Work With Us?</h1>
        <div >
          <ul className='flex flex-row items-center space-x-8 ml-6' id='ul-work-with-us'>
            <li><img src={Frame1} alt="" width={200} height={200} /></li>
            <li><img src={Frame2} alt="" width={200} height={200} /></li>
            <li><img src={Frame3} alt="" width={200} height={200} /></li>
            <li><img src={Frame4} alt="" width={200} height={200} /></li>
          </ul>
        </div>
      </div>

      <div id='crm-help' className='container' >
        <h1 className='text-xl font-bold text-center mb-10'>Here's how our CRM can help you</h1>

        <div className='self-center justify-center justify-self-center flex-row items-center ml-24' > {/*style={{alignContent: 'center', justifyContent: 'center'}}*/}
          <div>
            <h1 className='text-white middle none font-bold center py-3 px-6 w-3/4 rounded-lg mb-4 text-center' style={{ backgroundColor: '#018ABD' }}>Increase your lead-to-deal</h1>
            <h1 className='text-white font-bold py-2 px-4 rounded mb-4 text-center min-w-max w-3/4' style={{ backgroundColor: '#018ABD' }}>Get a 360 degree view of your business</h1>
            <h1 className='text-white font-bold py-2 px-4 rounded mb-4 text-center w-3/4' style={{ backgroundColor: '#018ABD' }}>Get a 360 degree view of your business</h1>
            <h1 className='text-white font-bold py-2 px-4 rounded mb-4 text-center w-3/4' style={{ backgroundColor: '#018ABD' }}>Quickly get to see your next-best actions</h1>
            <h1 className='text-white font-bold py-2 px-4 rounded text-center w-3/4' style={{ backgroundColor: '#018ABD' }}>Take your business with you everywhere you go</h1>
          </div>
        </div>
      </div>

      <div id='our-products' className='mt-12'>
        <div className='grid grid-cols-3 space-x-8'>

          <div class="flex justify-center">
            <div class="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
              <h5 class="text-gray-900 text-xl leading-tight font-medium mb-2">Unified Sales platform</h5>
              <p class="text-gray-700 text-base mb-4">
                To increase your sales success rate, we help you create a sales procedure.
              </p>
            </div>
          </div>

          <div class="flex justify-center">
            <div class="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
              <h5 class="text-gray-900 text-xl leading-tight font-medium mb-2">All in one suite</h5>
              <p class="text-gray-700 text-base mb-4">
                We offer you all the tools necessary for the management and growth of your business.
              </p>
            </div>
          </div>


          <div class="flex justify-center">
            <div class="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
              <h5 class="text-gray-900 text-xl leading-tight font-medium mb-2">Help Desk management</h5>
              <p class="text-gray-700 text-base mb-4">
                We offer you smart automations and prompt customer support with our live chat service.
              </p>
            </div>
          </div>

        </div>
      </div>
    </React.Fragment>
  )
}

export default App;

// style={{ backgroundColor: "black" }}