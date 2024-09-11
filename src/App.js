// import React, { useRef, useState } from 'react';
// import { motion } from 'framer-motion';
// import animatedImage from './assets/animation.png'; // Import the animated image
// import logoImage from './assets/logo.png'; // Import the logo image

// function App() {
//   const sectionsRef = useRef(null);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const handleGetStarted = () => {
//     if (sectionsRef.current) {
//       sectionsRef.current.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <div className="font-poppins">
//       <header className="bg-[#ffffff] text-white py-5 px-5 flex justify-between items-center sticky top-0 z-50 shadow-xl">
//         <div className="text-2xl font-bold">
//           <img src={logoImage} alt="Logo" className="h-17 px-4" /> {/* Logo image */}
//         </div>
//         <nav className="flex items-center space-x-4">
//           <button
//             onClick={toggleMenu}
//             className="block lg:hidden text-black focus:outline-none"
//           >
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h16m-7 6h7"
//               ></path>
//             </svg>
//           </button>
//           <ul
//             className={`${
//               isMenuOpen ? 'block' : 'hidden'
//             } lg:flex flex-col lg:flex-row lg:items-center space-y-4 lg:space-y-0 lg:space-x-6 text-center lg:text-left bg-white lg:bg-transparent w-full lg:w-auto absolute lg:static top-16 left-0 lg:left-auto lg:top-auto shadow-lg lg:shadow-none z-40`}
//           >
//             <li><a href="#dashboards" className="text-black hover:text-[#607AD6] px-4 py-2 block lg:inline-block">Dashboards</a></li>
//             <li><a href="#automation" className="text-black hover:text-[#607AD6] px-4 py-2 block lg:inline-block">Email Automation</a></li>
//             <li><a href="#rag" className="text-black hover:text-[#607AD6] px-4 py-2 block lg:inline-block">Rag Search</a></li>
//           </ul>
//         </nav>
//       </header>
//       <section className="hero bg-[#ffffff] text-white flex items-center relative" style={{ minHeight: '85vh', paddingTop: '10vh' }}>
//         <div className="container mx-auto flex flex-col lg:flex-row items-start justify-between px-6 md:px-10 lg:px-20">
//           <motion.div
//             initial={{ x: '-100vw' }}
//             animate={{ x: 0 }}
//             transition={{ duration: 1 }}
//             className="lg:mr-auto text-left lg:w-1/2 mb-5 lg:mb-0"
//           >
//             <h1 className="text-[#607AD6] text-4xl md:text-5xl lg:text-6xl font-bold mb-5 lg:whitespace-nowrap">Insights & Automation</h1>
//             <p className="text-black text-lg md:text-xl mb-5">Transforming data into actionable insights.</p>
//             <button onClick={handleGetStarted} className="bg-[#FFBA07] text-black px-5 py-2 rounded">Get Started</button>
//           </motion.div>
//           <motion.div
//             initial={{ x: '100vw' }}
//             animate={{ x: 0 }}
//             transition={{ duration: 1 }}
//             className="flex justify-center lg:justify-end lg:w-1/2"
//           >
//             <img src={animatedImage} alt="Data Analytics" className="max-w-xs md:max-w-sm lg:max-w-lg mx-auto lg:mx-0" />
//           </motion.div>
//         </div>
//       </section>
//       <motion.section
//         ref={sectionsRef}
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.5 }}
//         className="bg-[#607AD6] text-white py-16"
//       >
//         <div className="container mx-auto text-center px-6 md:px-10 lg:px-20">
//           <h2 className="text-3xl md:text-4xl font-medium text-white mb-16">The Benefits Of Insights And Automations Are Here</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             <div className="bg-[#ffffff] p-6 md:p-8 rounded-lg flex flex-col">
//               <div className="flex-grow">
//                 <h3 className="text-2xl font-bold text-black mb-4">Dashboards</h3>
//                 <p className="text-black mb-6">Unlock deep insights with our dashboards, offering real-time, detailed analytics for data-driven decisions. Visualize key metrics with customizable charts and graphs, tailored to your needs. Track performance, spot trends, and identify anomalies effortlessly.</p>
//               </div>
//               <a href="#" className="text-[#607AD6] hover:underline mt-auto">READ MORE</a>
//             </div>
//             <div className="bg-[#ffffff] p-6 md:p-8 rounded-lg flex flex-col">
//               <div className="flex-grow">
//                 <h3 className="text-2xl font-bold text-black mb-4">Email Automation</h3>
//                 <p className="text-black mb-6">Streamline your communication with automated email workflows that deliver personalized messages at the perfect time. Our email automation ensures consistent engagement by targeting the right audience with relevant content. </p>
//               </div>
//               <a href="#" className="text-[#607AD6] hover:underline mt-auto">READ MORE</a>
//             </div>
//             <div className="bg-[#ffffff] p-6 md:p-8 rounded-lg flex flex-col">
//               <div className="flex-grow">
//                 <h3 className="text-2xl font-bold text-black mb-4">Rag Search</h3>
//                 <p className="text-black mb-6">Experience intelligent conversations with our RAG-powered chatbot, delivering accurate and context-aware responses. Seamlessly blending data retrieval with AI, it ensures personalized and informed interactions. </p>
//               </div>
//               <a href="#" className="text-[#607AD6] hover:underline mt-auto">READ MORE</a>
//             </div>
//           </div>
//         </div>
//       </motion.section>
//     </div>
//   );
// }

// export default App;


// import React from "react";

// const App = () => {
//   return (
//     <div className="w-[210mm] h-[297mm] p-8 bg-white mx-auto border border-gray-300">
//       <div className="mb-4">
//         <h1 className="text-2xl font-bold">HILL LOGISTICS INC</h1>
//         <h2 className="text-lg">Collections Report</h2>
//         <p>All invoices older than 45 day(s) calculated from 04/04/2023</p>
//         <p>Terminal: <strong>ALL</strong> &nbsp; Company: <strong>ALL</strong></p>
//       </div>
      
//       <div className="border-t-2 border-black my-2"></div>
      
//       <div className="mb-4">
//         <div className="flex justify-between items-center mb-1">
//           <div>
//             <p className="font-bold">AIR DELIVERY EXPRESS</p>
//             <p>Phone: 1-817-416-1777 &nbsp; Fax: 1-817-416-4770</p>
//             <p>Email: <a href="mailto:adeap@airdeliveryexpress.com" className="text-blue-500">adeap@airdeliveryexpress.com</a></p>
//           </div>
//           <div className="text-right">
//             <p className="font-bold">AIR1011</p>
//             <p className="font-bold">LIT</p>
//           </div>
//         </div>
        
//         <table className="w-full text-sm">
//           <thead>
//             <tr className="border-b border-gray-300">
//               <th className="text-left">Date</th>
//               <th className="text-left">Invoice #</th>
//               <th className="text-left">ID#</th>
//               <th className="text-left">Comment</th>
//               <th className="text-right">Age (Days)</th>
//               <th className="text-right">Total</th>
//               <th className="text-right">Balance</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr className="border-b border-gray-200">
//               <td>01/27/2023</td>
//               <td>AIR1011-213</td>
//               <td>478071</td>
//               <td></td>
//               <td className="text-right">67</td>
//               <td className="text-right">$121.27</td>
//               <td className="text-right">$121.27</td>
//             </tr>
//             <tr className="border-b border-gray-200">
//               <td>02/02/2023</td>
//               <td>AIR1011-214</td>
//               <td>478302</td>
//               <td></td>
//               <td className="text-right">61</td>
//               <td className="text-right">$83.76</td>
//               <td className="text-right">$83.76</td>
//             </tr>
//           </tbody>
//         </table>
        
//         <div className="flex justify-end mt-2">
//           <p className="font-bold">Total for AIR DELIVERY EXPRESS: $205.03 &nbsp; $205.03</p>
//         </div>
//       </div>
      
//       <div className="border-t-2 border-black my-2"></div>
      
//       <div className="mb-4">
//         <div className="flex justify-between items-center mb-1">
//           <div>
//             <p className="font-bold">AIT W.W. LOGISTICS - LIT</p>
//             <p>Phone: 1-800-323-6649 X5986 &nbsp; Fax: 1-630-250-3453</p>
//             <p>Email: <a href="mailto:sherry.price@hilllogistics.com" className="text-blue-500">sherry.price@hilllogistics.com</a></p>
//           </div>
//           <div className="text-right">
//             <p className="font-bold">AIT1001</p>
//             <p className="font-bold">LIT</p>
//           </div>
//         </div>
        
//         <table className="w-full text-sm">
//           <thead>
//             <tr className="border-b border-gray-300">
//               <th className="text-left">Date</th>
//               <th className="text-left">Invoice #</th>
//               <th className="text-left">ID#</th>
//               <th className="text-left">Comment</th>
//               <th className="text-right">Age (Days)</th>
//               <th className="text-right">Total</th>
//               <th className="text-right">Balance</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr className="border-b border-gray-200">
//               <td>02/17/2023</td>
//               <td>AIT1001-11050</td>
//               <td>479289</td>
//               <td></td>
//               <td className="text-right">46</td>
//               <td className="text-right">$670.21</td>
//               <td className="text-right">$155.78</td>
//             </tr>
//           </tbody>
//         </table>
        
//         <div className="flex justify-end mt-2">
//           <p className="font-bold">Total for AIT W.W. LOGISTICS - LIT: $670.21 &nbsp; $155.78</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login'; // Import the Login component
import MainApp from './MainApp'; // Import the current App component as MainApp

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} /> {/* Default route goes to login */}
        <Route path="/app" element={<MainApp />} /> {/* Main app route after login */}
      </Routes>
    </Router>
  );
}

export default App;
