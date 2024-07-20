import React from 'react'
import server from '../../assets/server.jpeg';

const Blog2 = () => {
  return (
    <div className="flex flex-col sm:flex-row bg-rose-700 w-full"
    // style={{ backgroundImage: `url(${server})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
        
        <div className="w-full sm:w-1/2 p-4">
        <img src={server} alt="College" />
      </div> 
        
      <div className="w-full sm:w-1/2 overflow-hidden text-left text-white">
        <div className="text-5xl sm:text-5xl md:text-5xl lg:text-7xl xl:text-8xl ml-2 flex-shrink drop-shadow-lg">DevOps</div>
        <div className="text-5xl sm:text-5xl md:text-5xl lg:text-7xl xl:text-8xl ml-2 flex-shrink drop-shadow-lg">@DRDO</div>

        <p className="mb-4 mt-6 backdrop-blur-md hover:backdrop-blur-lg font-bold drop-shadow-lg ml-2">
            Cold E-mailed <a href="https://www.linkedin.com/in/shaifu-gupta-5911a29b/?originalSubdomain=in" 
            target="_blank" rel="noopener noreferrer" 
            className='underline'>
            Dr. Shaifu Gupta Ma'am 
            </a>&nbsp;for an internship.
        </p>

        <p className="mb-4 backdrop-blur-md hover:backdrop-blur-lg font-bold drop-shadow-lg ml-2">
            Got selected for a "TOP SECRET PROJECT", came to know it's for DRDO on the day of joining.
        </p>

        <p className="mb-4 backdrop-blur-md hover:backdrop-blur-lg font-bold drop-shadow-lg ml-2">
            Did everything DevOps, most notably; Made a Highly Available Kubernetes Cluster from scratch on in house Dell Servers [Image Related].
        </p>

        <p className="mb-4 backdrop-blur-md hover:backdrop-blur-lg font-bold drop-shadow-lg ml-2">
            Half of the team left midway and so learned and implemented Cybersecurity related work too :)
        </p>

        <p className="mb-4 backdrop-blur-md hover:backdrop-blur-lg font-bold drop-shadow-lg ml-2">
            Had to work till 4am kabhi kabhi, kyuki kal DRDO ke saath meeting hai !
        </p>
        

      </div>

    </div>
  )
}

export default Blog2
