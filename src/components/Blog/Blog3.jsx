import React from 'react'
import server from '../../assets/leetcode.jpg';

const Blog3 = () => {
  return (
    <div className="w-full">
        <div className="flex flex-col sm:flex-row bg-lime-400 justify-evenly items-center">
        <div>
            <br/>
            <p className='font-bold lg:text-4xl md:text-3xl sm:text-2xl text-xl text-slate-800 drop-shadow-3xl'>
              Did a bit of&nbsp; 
            <a href="https://leetcode.com/u/sharma01ketan/" target="_blank" 
            rel="noopener noreferrer" className='underline lg:text-4xl md:text-3xl sm:text-2xl text-xl'>
            DSA
            </a>
            </p>
        </div>
            <div className="w-full sm:w-1/2 md:w-2/3 lg:w-3/4 p-4">
                <img src={server} alt="College" className="w-full h-auto object-cover" />
            </div> 
        </div>
    </div>
  )
}

export default Blog3


// import React from 'react'
// import server from '../../assets/leetcode.jpg';

// const Blog3 = () => {
//   return (
//     <div className="flex flex-col sm:flex-row bg-lime-400 justify-center">
//         <div className="w-full sm:w-1/2 p-4">
//             <img src={server} alt="College" />
//         </div> 
//     </div>
//   )
// }

// export default Blog3



// import React from 'react'
// import server from '../../assets/leetcode.jpg';

// const Blog3 = () => {
//   return (
//     <div className="flex flex-col sm:flex-row bg-lime-400"
//     // style={{ backgroundImage: `url(${server})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
//     >
        
//         <div className="w-full sm:w-1/2 p-4">
//         <img src={server} alt="College" />
//       </div> 
        
//       <div className="w-full sm:w-1/2 overflow-hidden text-left text-white">
//         {/* <div className="text-5xl sm:text-5xl md:text-5xl lg:text-7xl xl:text-8xl ml-2 flex-shrink drop-shadow-lg">DevOps</div>
//         <div className="text-5xl sm:text-5xl md:text-5xl lg:text-7xl xl:text-8xl ml-2 flex-shrink drop-shadow-lg">@DRDO</div> */}

//         {/* <p className="mb-4 mt-6 backdrop-blur-md hover:backdrop-blur-lg font-bold">
//             Cold E-mailed <a href="https://www.linkedin.com/in/shaifu-gupta-5911a29b/?originalSubdomain=in" 
//             target="_blank" rel="noopener noreferrer" 
//             className='underline'>
//             Dr. Shaifu Gupta Ma'am 
//             </a>&nbsp;for an internship.
//         </p>

//         <p className="mb-4 backdrop-blur-md hover:backdrop-blur-lg font-bold">
//             Got selected on a "TOP SECRET PROJECT", got to know it's for DRDO on the day of joining.
//         </p>

//         <p className="mb-4 backdrop-blur-md hover:backdrop-blur-lg font-bold">
//             Did everything DevOps, most notably; made a Highly Available Kubernetes Cluster from scratch on in house Dell Servers [Image Related].
//         </p>

//         <p className="mb-4 backdrop-blur-md hover:backdrop-blur-lg font-bold">
//             Half of the team left midway and so learned and implemented Cybersecurity related work too :)
//         </p>

//         <p className="mb-4 backdrop-blur-md hover:backdrop-blur-lg font-bold">
//             Had to work till 4am kabhi kabhi, kyuki kal DRDO ke saath meeting hai !
//         </p> */}
        

//       </div>

//     </div>
//   )
// }

// export default Blog3

