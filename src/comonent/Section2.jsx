import React from 'react'
import bg2 from '../image/bg2.jpg'
import logo from '../image/logo2.png'

const Section2 = () => {
  return (
    <>
    <div className=' flex w-full h-screen '>
        <div className='h-full w-1/2  bg-slate-400 p-9 justify-center items-center flex-col' >
            <div className=' flex justify-center items-center flex-col'>
                <img src={logo} alt={logo} className='w-32 border-2 border-black' />
                <h1>ABOUT DRONE</h1>
                <p>A drone is an unmanned aerial vehicle (UAV) equipped with cameras, sensors, GPS and other technology.
                     They can be operated remotely or autonomously, and used for various applications such as aerial photography, inspection, delivery, search and rescue, military operations, etc.
                      Advances in technology have made drones increasingly accessible, versatile, and popular.
                </p>
                <h1>
                Types of drones
                </h1>
                <ul>
                  <li>
                    Consumer drones: used for recreation and hobby purposes.
                  </li>
                  <li>
                    Photography and videography drones: equipped with cameras for aerial footage.
                  </li>
                  <li>
                    Industrial drones: used for inspections, mapping, and surveying.
                  </li>
                  <li>
                    Delivery drones: used for the delivery of goods and packages.
                  </li>
                  <li>
                    Military drones: used by armed forces for reconnaissance and surveillance purposes.
                  </li>
                </ul>
            </div>

        </div>
        <div className='h-full w-1/2' style={{backgroundImage: `url(${bg2})`,
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundSize: "cover"
    }}>
            jojjo
        </div>
    </div>
    </>
  )
}

export default Section2