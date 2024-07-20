import React from 'react'
import server from '../../assets/server.jpeg';

const Blog5 = () => {
  return (
    <div className="flex flex-col sm:flex-row bg-pink-600 w-full">

        <div className="w-full sm:w-1/2 overflow-hidden text-left text-slate-100" id="first">
            <div className="text-3xl sm:text-3xl md:text-3xl lg:text-5xl xl:text-6xl ml-2 flex-shrink drop-shadow-lg">SDE INTERN</div>
            <div className="text-3xl sm:text-3xl md:text-3xl lg:text-5xl xl:text-6xl ml-2 flex-shrink drop-shadow-lg">@MAPSENSE</div>
        </div>

        <div className="w-full sm:w-1/2 p-4" id="second">
            <img src={server} alt="College" />
        </div> 
        
        <div className="w-full sm:w-1/2 overflow-hidden text-left text-slate-100" id="third">
            <p className="mb-4 backdrop-blur-md hover:backdrop-blur-lg font-bold drop-shadow-lg ml-2">
                Mapsense makes sense of Spatial Data.<br/>
                And I make software for them.
            </p>

            <p className="mb-4 backdrop-blur-md hover:backdrop-blur-lg font-bold drop-shadow-lg ml-2">
                Joined this small startup of 15 people.<br/><br/>
                Founder Google ka hai aur pichle start up ki exit $1 Million ki thi 
            </p>

            <p className="mb-4 backdrop-blur-md hover:backdrop-blur-lg font-bold drop-shadow-lg ml-2">
                I get to work on production here, while enjoying the comforts of my home :)
            </p>
        </div>
    </div>
  )
}

export default Blog5