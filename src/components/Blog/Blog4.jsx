import React from 'react'
import server from '../../assets/ml.jpg';

const Blog4 = () => {
  return (
    <div className="flex flex-col sm:flex-row bg-sky-600 w-full">
        
        <div className="w-full sm:w-1/2 overflow-hidden text-left text-white">
            <div className="text-5xl sm:text-5xl md:text-5xl lg:text-7xl xl:text-8xl ml-2 flex-shrink drop-shadow-lg">ML & FL</div>
            <div className="text-5xl sm:text-5xl md:text-5xl lg:text-7xl xl:text-8xl ml-2 flex-shrink drop-shadow-lg">@IITJ</div>

            {/* <p className="mb-4 mt-6 backdrop-blur-md hover:backdrop-blur-lg font-bold drop-shadow-lg ml-2">
                Cold E-mailed <a href="https://www.linkedin.com/in/shaifu-gupta-5911a29b/?originalSubdomain=in" 
                target="_blank" rel="noopener noreferrer" 
                className='underline'>
                Dr. Shaifu Gupta Ma'am 
                </a>&nbsp;for an internship.
            </p> */}

            <p className="mb-4 backdrop-blur-md hover:backdrop-blur-lg font-bold drop-shadow-lg ml-2">
                After using Chat GPT for completing college assignments.<br/>
                Machine Learning peaked my interests.
            </p>

            <p className="mb-4 backdrop-blur-md hover:backdrop-blur-lg font-bold drop-shadow-lg ml-2">
                Went to IIT Jammu again. 
            </p>

            <p className="mb-4 backdrop-blur-md hover:backdrop-blur-lg font-bold drop-shadow-lg ml-2">
                Worked on Federated Learning algorithms, Transformers and what not.
            </p>

            <p className="mb-4 backdrop-blur-md hover:backdrop-blur-lg font-bold drop-shadow-lg ml-2">
                Implemented too many research papers for my UG Level brain to handle.
            </p>

            <p className="mb-4 backdrop-blur-md hover:backdrop-blur-lg font-bold drop-shadow-lg ml-2">
            Learned a lot and decided that academia and I will not be getting along in the near future.
            <br/><br/>
            Off to coding again.
            </p>
        </div>

        <div className="w-full sm:w-1/2 p-4">
            <img src={server} alt="College" />
        </div> 

    </div>
  )
}

export default Blog4
