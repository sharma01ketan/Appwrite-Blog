
import React from 'react'
import collegeImage from '../../assets/college.jpg';

const Blog1 = () => {
  return (
    <div className="flex flex-col sm:flex-row w-full max-w-full overflow-hidden"
    style={{ 
      backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0) 20%, rgba(0, 0, 0, 0) 80%, rgba(0, 0, 0, 0.5)), url(${collegeImage})`, 
      backgroundSize: 'cover', 
      backgroundPosition: 'center' 
    }}> {/* Added gradient to the background image */}
      <div className="w-full sm:w-1/2 overflow-hidden text-left text-yellow-500">
        <div className="text-5xl sm:text-5xl md:text-5xl lg:text-7xl xl:text-8xl ml-2 flex-shrink drop-shadow-lg">MY</div>
        <div className="text-5xl sm:text-5xl md:text-5xl lg:text-7xl xl:text-8xl ml-2 flex-shrink drop-shadow-lg">ENGINEERING</div>
        <div className="text-5xl sm:text-5xl md:text-5xl lg:text-7xl xl:text-8xl ml-2 flex-shrink drop-shadow-lg">EXPERIENCE</div>
      </div>

      {/* Text content container */}
      <div className="w-full sm:w-1/2 p-4">
        
        <p className="mb-4 mt-28 font-bold backdrop-blur-md hover:backdrop-blur-lg"
        style={{ backgroundColor: 'rgba(255, 255, 0, 0.2)' }}>
          The boy that enrolled in NIT Srinagar four years ago has now 
          become a much more refined version of himself.
        </p>
        
        <p className="mb-4 backdrop-blur-md hover:backdrop-blur-lg font-bold" 
        style={{ backgroundColor: 'rgba(255, 255, 0, 0.2)' }}>
          I've sat in classes from 9 am to 5 pm, flunked them at times to visit the Mughal Gardens of Srinagar.
        </p>
        
        <p className="mb-4 backdrop-blur-md hover:backdrop-blur-lg font-bold"
        style={{ backgroundColor: 'rgba(255, 255, 0, 0.2)' }}>
          Sat grinding LeetCode in the library until midnight 
          when it was two degrees below zero outside, pushing myself to become the best version of me.
        </p>
        
        <p className="mb-4 backdrop-blur-md hover:backdrop-blur-lg font-bold "
        style={{ backgroundColor: 'rgba(255, 255, 0, 0.2)' }}>
          With so many learnings over the past few years, 
          I've had the time of my life.
        </p>
        <p className="mb-4 backdrop-blur-md hover:backdrop-blur-lg font-bold"
        style={{ backgroundColor: 'rgba(255, 255, 0, 0.2)' }}>
        :)
        </p>
        <br/><br/><br/><br/><br/><br/><br/><br/>
      </div>  
    </div>
  )
}

export default Blog1


// import React from 'react'
// import collegeImage from '../../assets/college.jpg';

// const Blog1 = () => {
//   return (
//     <div className="flex flex-col sm:flex-row w-full max-w-full overflow-hidden"
//     style={{ backgroundImage: `url(${collegeImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
//       <div className="w-full sm:w-1/2 overflow-hidden text-left text-yellow-500">
//         <div className="text-5xl sm:text-5xl md:text-5xl lg:text-7xl xl:text-8xl ml-2 flex-shrink drop-shadow-lg">MY</div>
//         <div className="text-5xl sm:text-5xl md:text-5xl lg:text-7xl xl:text-8xl ml-2 flex-shrink drop-shadow-lg">ENGINEERING</div>
//         <div className="text-5xl sm:text-5xl md:text-5xl lg:text-7xl xl:text-8xl ml-2 flex-shrink drop-shadow-lg">EXPERIENCE</div>
//       </div>

//       {/* Text content container */}
//       <div className="w-full sm:w-1/2 p-4">
        
//         <p className="mb-4 mt-28 font-bold backdrop-blur-md hover:backdrop-blur-lg"
//         style={{ backgroundColor: 'rgba(255, 255, 0, 0.2)' }}>
//           The boy that enrolled in NIT Srinagar four years ago has now 
//           become a much more refined version of himself.
//         </p>
        
//         <p className="mb-4 backdrop-blur-md hover:backdrop-blur-lg font-bold" 
//         style={{ backgroundColor: 'rgba(255, 255, 0, 0.2)' }}>
//           I've sat in classes from 9 am to 5 pm, flunked them at times to visit the Mughal Gardens of Srinagar.
//         </p>
        
//         <p className="mb-4 backdrop-blur-md hover:backdrop-blur-lg font-bold"
//         style={{ backgroundColor: 'rgba(255, 255, 0, 0.2)' }}>
//           Sat grinding LeetCode in the library until midnight 
//           when it was two degrees below zero outside, pushing myself to become the best version of me.
//         </p>
        
//         <p className="mb-4 backdrop-blur-md hover:backdrop-blur-lg font-bold "
//         style={{ backgroundColor: 'rgba(255, 255, 0, 0.2)' }}>
//           With so many learnings over the past few years, 
//           I've had the time of my life.
//         </p>
//         <p className="mb-4 backdrop-blur-md hover:backdrop-blur-lg font-bold"
//         style={{ backgroundColor: 'rgba(255, 255, 0, 0.2)' }}>
//         :)
//         </p>
//         <br/><br/><br/><br/><br/><br/><br/><br/>
//       </div>  
//     </div>
//   )
// }

// export default Blog1


