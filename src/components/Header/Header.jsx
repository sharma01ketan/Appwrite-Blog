// import React from 'react'
// import {Container, Logo, LogoutBtn} from '../index'
// import { Link } from 'react-router-dom'
// import {useSelector} from 'react-redux'
// import { useNavigate } from 'react-router-dom'

// function Header() {
//     const authStatus = useSelector((state) => state.auth.status)
//     const navigate = useNavigate()
    
//     const navItems = [
//         { name: 'Home', slug: "/", active: true },
//         { name: "Login", slug: "/login", active: !authStatus, },
//         { name: "Signup", slug: "/signup", active: !authStatus, },
//         { name: "All Posts", slug: "/all-posts", active: authStatus, },
//         { name: "Add Post", slug: "/add-post", active: authStatus, },
//     ]

//     return (
//         <header className='py-3 shadow w-full gradient-bg'>
//             <style>
//                 {`
//                 .gradient-bg {
//                     background: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0) 20%, rgba(0, 0, 0, 0) 80%, rgba(0, 0, 0, 0.5)),
//                                 linear-gradient(-45deg, #808080, #666600, #A9A9A9,#999900);
//                     background-size: 400% 400%;
//                     animation: gradient 15s ease infinite;
//                 }
//                 @keyframes gradient {
//                     0% { background-position: 0% 50%; }
//                     50% { background-position: 100% 50%; }
//                     100% { background-position: 0% 50%; }
//                 }
//                 `}
//             </style>
//             <Container>
//                 <nav className='flex flex-wrap items-center'>
//                     <div className='mr-4'>
//                         <Link to='/'>
//                             <Logo width='70px' />
//                         </Link>
//                     </div>
//                     <ul className='flex flex-wrap ml-auto items-center'>
//                         {navItems.map((item) => item.active ? (
//                             <li key={item.name} className="m-1">
//                                 <button 
//                                     onClick={() => navigate(item.slug)} 
//                                     className='inline-block px-6 py-2 m-[1px] duration-200 hover:rounded-2xl hover:text-black border-[1px] border-transparent hover:border-black hover:bg-yellow-50 font-sans'
//                                 >
//                                     {item.name}
//                                 </button>
//                             </li>
//                         ) : null)}
//                         {authStatus && (
//                             <li>
//                                 <LogoutBtn />
//                             </li>
//                         )}
//                     </ul>
//                 </nav>
//             </Container>
//         </header>
//     )
// }

// export default Header


// import React from 'react'
// import {Container, Logo, LogoutBtn} from '../index'
// import { Link } from 'react-router-dom'
// import {useSelector} from 'react-redux'
// import { useNavigate } from 'react-router-dom'

// function Header() {
//     const authStatus = useSelector((state) => state.auth.status)
//     const navigate = useNavigate()
    
//     const navItems = [
//         { name: 'Home', slug: "/", active: true },
//         { name: "Login", slug: "/login", active: !authStatus, },
//         { name: "Signup", slug: "/signup", active: !authStatus, },
//         { name: "All Posts", slug: "/all-posts", active: authStatus, },
//         { name: "Add Post", slug: "/add-post", active: authStatus, },
//     ]

//     return (
//         <header className='py-3 shadow w-full gradient-bg'>
//             <style>
//                 {`
//                 .gradient-bg {
//                     background: linear-gradient(-45deg, #808080, #666600, #A9A9A9,#999900);
//                     background-size: 400% 400%;
//                     animation: gradient 15s ease infinite;
//                 }
//                 @keyframes gradient {
//                     0% { background-position: 0% 50%; }
//                     50% { background-position: 100% 50%; }
//                     100% { background-position: 0% 50%; }
//                 }
//                 `}
//             </style>
//             <Container>
//                 <nav className='flex flex-wrap items-center'>
//                     <div className='mr-4'>
//                         <Link to='/'>
//                             <Logo width='70px' />
//                         </Link>
//                     </div>
//                     <ul className='flex flex-wrap ml-auto items-center'>
//                         {navItems.map((item) => item.active ? (
//                             <li key={item.name} className="m-1">
//                                 <button 
//                                     onClick={() => navigate(item.slug)} 
//                                     className='inline-block px-6 py-2 m-[1px] duration-200 hover:rounded-2xl hover:text-black border-[1px] border-transparent hover:border-black hover:bg-yellow-50 font-sans'
//                                 >
//                                     {item.name}
//                                 </button>
//                             </li>
//                         ) : null)}
//                         {authStatus && (
//                             <li>
//                                 <LogoutBtn />
//                             </li>
//                         )}
//                     </ul>
//                 </nav>
//             </Container>
//         </header>
//     )
// }

// export default Header



// import React from 'react'
// import {Container, Logo, LogoutBtn} from '../index'
// import { Link } from 'react-router-dom'
// import {useSelector} from 'react-redux'
// import { useNavigate } from 'react-router-dom'

// function Header() {
//   const authStatus = useSelector((state) => state.auth.status)
//   const navigate = useNavigate()

//   const navItems = [
//     {
//       name: 'Home',
//       slug: "/",
//       active: true
//     }, 
//     {
//       name: "Login",
//       slug: "/login",
//       active: !authStatus,
//   },
//   {
//       name: "Signup",
//       slug: "/signup",
//       active: !authStatus,
//   },
//   {
//       name: "All Posts",
//       slug: "/all-posts",
//       active: authStatus,
//   },
//   {
//       name: "Add Post",
//       slug: "/add-post",
//       active: authStatus,
//   },
//   ]


//   return (
//     <header className='py-3 shadow bg-white w-full'>
//       <Container>
//         <nav className='flex flex-wrap items-center'>
//           <div className='mr-4'>
//             <Link to='/'>
//               {/* <Logo width='70px'   /> */}
//               <div style={{ display: 'flex', alignItems: 'center' }}>
//                   <img src="/vite.svg" alt="Vite Logo" style={{ width: 70 }} />
//                   <span style={{ marginLeft: '10px' }}>Let's Blog</span>
//                   {/* <Logo width='70px'/> */}
//               </div>
//             </Link>
//           </div>
//           <ul className='flex flex-wrap ml-auto items-center'>
//             {navItems.map((item) => 
//             item.active ? (
//               <li key={item.name} className="m-1">
//                 <button
//                 onClick={() => navigate(item.slug)}
//                 className='inline-block px-6 py-2 m-[1px] duration-200 
//                 hover:rounded-2xl
//                 hover:text-black
//                 border-[1px] border-transparent
//                 hover:border-black
//                 hover:bg-yellow-50
//                 font-sans'
//                 >{item.name}</button>
//               </li>
//             ) : null
//             )}
//             {authStatus && (
//               <li>
//                 <LogoutBtn />
//               </li>
//             )}
//           </ul>
//         </nav>
//       </Container>
//     </header>
//   )
// }

// export default Header


import React from 'react'
import {Container, Logo, LogoutBtn} from '../index'
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Header() {
  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()

  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    }, 
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ]

  return (
    <header className='py-3 shadow bg-white w-full'>
      <Container>
        <nav className='flex flex-wrap items-center justify-between'>
          <div className='flex justify-center w-full md:w-auto md:mr-4'>
            <Link to='/'>
              <div className="flex items-center">
                <img src="/vite.svg" alt="Vite Logo" className="w-[70px]" />
                <span className="ml-2">Let's Blog</span>
              </div>
            </Link>
          </div>
          <ul className='flex flex-wrap justify-center w-full md:w-auto md:ml-auto items-center mt-4 md:mt-0'>
            {navItems.map((item) => 
            item.active ? (
              <li key={item.name} className="m-1">
                <button
                onClick={() => navigate(item.slug)}
                className='inline-block px-6 py-2 m-[1px] duration-200 
                hover:rounded-2xl
                hover:text-black
                border-[1px] border-transparent
                hover:border-black
                hover:bg-yellow-50
                font-sans'
                >{item.name}</button>
              </li>
            ) : null
            )}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  )
}

export default Header