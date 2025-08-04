// import React from 'react'
// import { motion } from 'framer-motion'
// import Profile from "../assets/manish.jpg"

// const IntroSection = ({ activeSection }) => {
//   return (
//     <div className="Hero w-full min-h-[400px] pt-20 mb-16 relative overflow-hidden">
//       {/* Animated background elements */}
//       <motion.div
//         className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-gray-900/40 to-orange-900/20 rounded-2xl"
//         animate={{
//           background: [
//             'linear-gradient(135deg, rgba(88, 28, 135, 0.2), rgba(17, 24, 39, 0.4), rgba(194, 65, 12, 0.2))',
//             'linear-gradient(135deg, rgba(29, 78, 216, 0.2), rgba(88, 28, 135, 0.4), rgba(17, 24, 39, 0.2))',
//             'linear-gradient(135deg, rgba(194, 65, 12, 0.2), rgba(29, 78, 216, 0.4), rgba(88, 28, 135, 0.2))',
//             'linear-gradient(135deg, rgba(88, 28, 135, 0.2), rgba(17, 24, 39, 0.4), rgba(194, 65, 12, 0.2))'
//           ]
//         }}
//         transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
//       />

//       {/* Floating particles */}
//       <div className="absolute inset-0 pointer-events-none">
//         {[...Array(6)].map((_, i) => (
//           <motion.div
//             key={i}
//             className="absolute w-1 h-1 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full opacity-60"
//             style={{
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//             }}
//             animate={{
//               y: [0, -20, 0],
//               x: [0, 10, 0],
//               opacity: [0.6, 1, 0.6],
//               scale: [1, 1.5, 1]
//             }}
//             transition={{
//               duration: 3 + Math.random() * 2,
//               repeat: Infinity,
//               ease: "easeInOut",
//               delay: Math.random() * 2
//             }}
//           />
//         ))}
//       </div>

//       {/* Main content container */}
//       <div className="relative backdrop-blur-sm bg-gray-900/60 border border-gray-700/50 rounded-2xl flex flex-col lg:flex-row justify-between items-center gap-6 sm:gap-8 lg:gap-12 p-6 sm:p-8 md:p-10 lg:p-12 shadow-2xl">

//         {/* Info Section */}
//         <motion.div 
//           className="Info text-center lg:text-left order-2 lg:order-1 flex-1"
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//         >
//       <motion.h1 
//   className='text-white font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-3 sm:mb-4 leading-tight flex flex-wrap items-center gap-x-2'
//   initial={{ opacity: 0, y: 20 }}
//   animate={{ opacity: 1, y: 0 }}
//   transition={{ duration: 0.6, delay: 0.2 }}
// >
//   <span className="whitespace-nowrap">I'm</span>
//   <motion.span
//     className='bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 bg-clip-text text-transparent inline-block overflow-hidden whitespace-nowrap 
//                text-[22px] sm:text-[28px] md:text-[34px] lg:text-[40px] xl:text-[48px] leading-[1.2] max-w-full'
//     style={{
//       width: '15ch',
//       animation: 'typingAnim 3s steps(15) infinite',
//       display: 'inline-block',
//       verticalAlign: 'middle',
//     }}
//     whileHover={{ 
//       scale: 1.05,
//       textShadow: "0 0 20px rgba(251, 146, 60, 0.5)"
//     }}
//     transition={{ duration: 0.3 }}
//   >
//     Manish Prajapat
//   </motion.span>
// </motion.h1>


//           <motion.div
//             className="relative sm:mb-5"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.4 }}
//           >
//             <h2 className='text-gray-300 text-sm sm:text-base md:text-lg font-medium tracking-[0.2em]'>
//               I AM A FULL STACK DEVELOPER
//             </h2>
//           </motion.div>

//           <motion.p 
//             className='text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl mb-8 sm:mb-10 leading-relaxed max-w-2xl'
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.6 }}
//           >
//             {activeSection === 'about' && 'Passionate about creating web applications with modern technologies and bringing ideas to life through code.'}
//             {activeSection === 'portfolio' && 'Check out my learning projects and experiments that showcase my journey in web development.'}
//             {activeSection === 'contact' && 'Get in touch to discuss opportunities and let\'s build something amazing together.'}
//             {!activeSection && 'Passionate about creating web applications with modern technologies and bringing ideas to life through code.'}
//           </motion.p>

//           <motion.a
//             href="Manishprajapat resume.pdf"
//             target="_blank"
//             rel="noopener noreferrer"
//             className='inline-block relative group'
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.8 }}
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-pink-500 rounded-lg blur-lg opacity-30 group-hover:opacity-60 transition-opacity duration-300"></div>
//             <div className="relative bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-lg font-semibold tracking-wide shadow-lg hover:shadow-xl transition-all duration-300 border border-orange-400/50">
//               View Resume
//               <motion.span
//                 className="inline-block ml-2"
//                 animate={{ x: [0, 5, 0] }}
//                 transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
//               >
//                 →
//               </motion.span>
//             </div>
//           </motion.a>
//         </motion.div>

//         {/* Profile Section */}
//         <motion.div 
//           className="Profile text-center order-1 lg:order-2 flex-shrink-0"
//           initial={{ opacity: 0, x: 50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
//         >
//           <motion.div
//             className="relative mb-6 sm:mb-8"
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.4 }}
//           >
//             <div className="relative inline-block">
//               <p className="text-gray-300 text-xs sm:text-sm font-medium px-10 py-3 bg-gray-800/60 backdrop-blur-sm rounded-full border border-gray-600/50 shadow-lg">
//                 <span className="relative">
//                   <motion.span
//                     className="absolute -left-5 top-1/2 -translate-y-1/2 w-3 h-3 bg-green-500 rounded-full"
//                     animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }}
//                     transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
//                   />
//                   <motion.span
//                     className="absolute -left-5 top-1/2 -translate-y-1/2 w-3 h-3 bg-green-400 rounded-full"
//                     animate={{ scale: [1, 1.8, 1], opacity: [0.4, 0, 0.4] }}
//                     transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
//                   />
//                   AVAILABLE FOR JOB
//                 </span>
//               </p>
//             </div>
//           </motion.div>

//           <motion.div 
//             className="relative group"
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.8, delay: 0.6 }}
//             whileHover={{ scale: 1.05 }}
//           >
//             {/* Animated ring around profile */}
//             <motion.div
//               className="absolute inset-0 rounded-full"
//               animate={{ rotate: 360 }}
//               transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
//             >
//               <div className="w-full h-full rounded-full bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 p-1 opacity-70">
//                 <div className="w-full h-full rounded-full bg-gray-900"></div>
//               </div>
//             </motion.div>

//             {/* Pulsing glow effect */}
//             <motion.div
//               className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-400 to-pink-500 opacity-30 blur-xl"
//               animate={{
//                 scale: [1, 1.2, 1],
//                 opacity: [0.3, 0.6, 0.3]
//               }}
//               transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
//             />

//             <div className="relative z-10 rotate-10">
//               <img
//                 src={Profile}
//                 alt="Tanmay Shukla's Profile"
//                 className='relative z-10 border-4 border-gray-700 rounded-full h-[120px] w-[120px] sm:h-[160px] sm:w-[160px] md:h-[200px] md:w-[200px] lg:h-[240px] lg:w-[240px] object-cover mx-auto shadow-2xl transition-all duration-300 group-hover:border-orange-400'
//               />
//             </div>
//           </motion.div>
//         </motion.div>
//       </div>

//       {/* Typing animation style */}
//       <>
//         <style>
//           {`
//             @keyframes typingAnim {
//               0% {
//                 width: 0ch;
//               }
//               100% {
//                 width: 15ch;
//               }
//             }
//           `}
//         </style>
//       </>
//     </div>
//   )
// }

// export default IntroSection








import React from 'react'
import { motion } from 'framer-motion'
import Profile from "../assets/manish.jpg"

const IntroSection = ({ activeSection }) => {
  return (
    <div className="Hero w-full min-h-[400px] pt-20 mb-16 relative overflow-hidden">
      {/* Enhanced animated background elements */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-gray-900/40 to-orange-900/20 rounded-2xl"
        animate={{
          background: [
            'linear-gradient(135deg, rgba(88, 28, 135, 0.2), rgba(17, 24, 39, 0.4), rgba(194, 65, 12, 0.2))',
            'linear-gradient(135deg, rgba(29, 78, 216, 0.2), rgba(88, 28, 135, 0.4), rgba(17, 24, 39, 0.2))',
            'linear-gradient(135deg, rgba(194, 65, 12, 0.2), rgba(29, 78, 216, 0.4), rgba(88, 28, 135, 0.2))',
            'linear-gradient(135deg, rgba(88, 28, 135, 0.2), rgba(17, 24, 39, 0.4), rgba(194, 65, 12, 0.2))'
          ]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Enhanced floating particles with more variety */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full opacity-70 ${
              i % 3 === 0 ? 'w-2 h-2 bg-gradient-to-r from-orange-400 to-pink-500' :
              i % 3 === 1 ? 'w-1.5 h-1.5 bg-gradient-to-r from-blue-400 to-purple-500' :
              'w-1 h-1 bg-gradient-to-r from-pink-400 to-red-500'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 15, -10, 0],
              opacity: [0.4, 1, 0.4],
              scale: [1, 1.8, 1],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 3
            }}
          />
        ))}
      </div>

      {/* Main content container with enhanced backdrop */}
      <motion.div 
        className="relative backdrop-blur-sm bg-gray-900/60 border border-gray-700/50 rounded-2xl flex flex-col lg:flex-row justify-between items-center gap-6 sm:gap-8 lg:gap-12 p-6 sm:p-8 md:p-10 lg:p-12 shadow-2xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >

        {/* Info Section with staggered animations */}
        <motion.div 
          className="Info text-center lg:text-left order-2 lg:order-1 flex-1"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >
      <motion.h1 
  className='text-white font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-3 sm:mb-4 leading-tight flex flex-wrap items-center gap-x-2'
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.4 }}
>
  <motion.span 
    className="whitespace-nowrap"
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6, delay: 0.6 }}
  >
    I'm
  </motion.span>
  <motion.span
    className='bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 bg-clip-text text-transparent inline-block overflow-hidden whitespace-nowrap 
               text-[22px] sm:text-[28px] md:text-[34px] lg:text-[40px] xl:text-[48px] leading-[1.2] max-w-full'
    style={{
      width: '15ch',
      animation: 'smoothTyping 5s steps(15) infinite',
      display: 'inline-block',
    }}
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8, delay: 0.8 }}
    whileHover={{ 
      scale: 1.08,
      textShadow: "0 0 30px rgba(251, 146, 60, 0.8)"
    }}
  >
    Manish Prajapat
  </motion.span>
</motion.h1>

          <motion.div
            className="relative sm:mb-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <motion.h2 
              className='text-gray-300 text-sm sm:text-base md:text-lg font-medium tracking-[0.2em]'
              animate={{
                opacity: [0.8, 1, 0.8],
                letterSpacing: ['0.2em', '0.25em', '0.2em']
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              I AM A FULL STACK DEVELOPER
            </motion.h2>
          </motion.div>

          <motion.p 
            className='text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl mb-8 sm:mb-10 leading-relaxed max-w-2xl'
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            {activeSection === 'about' && 'Passionate about creating web applications with modern technologies and bringing ideas to life through code.'}
            {activeSection === 'portfolio' && 'Check out my learning projects and experiments that showcase my journey in web development.'}
            {activeSection === 'contact' && 'Get in touch to discuss opportunities and let\'s build something amazing together.'}
            {!activeSection && 'Passionate about creating web applications with modern technologies and bringing ideas to life through code.'}
          </motion.p>

          <motion.a
            href="Manishprajapat resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className='inline-block relative group'
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.4 }}
            whileHover={{ scale: 1.08, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-orange-400 to-pink-500 rounded-lg blur-lg opacity-30 group-hover:opacity-70 transition-opacity duration-500"
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="relative bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-lg font-semibold tracking-wide shadow-xl hover:shadow-2xl transition-all duration-500 border border-orange-400/50">
              View Resume
              <motion.span
                className="inline-block ml-2"
                animate={{ 
                  x: [0, 8, 0],
                  rotate: [0, 15, 0]
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                →
              </motion.span>
            </div>
          </motion.a>
        </motion.div>

        {/* Enhanced Profile Section */}
        <motion.div 
          className="Profile text-center order-1 lg:order-2 flex-shrink-0"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
        >
          <motion.div
            className="relative mb-6 sm:mb-8"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="relative inline-block">
              <motion.p 
                className="text-gray-300 text-xs sm:text-sm font-medium px-10 py-3 bg-gray-800/60 backdrop-blur-sm rounded-full border border-gray-600/50 shadow-lg"
                animate={{
                  borderColor: [
                    'rgba(107, 114, 128, 0.5)', 
                    'rgba(34, 197, 94, 0.3)', 
                    'rgba(107, 114, 128, 0.5)'
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <span className="relative">
                  <motion.span
                    className="absolute -left-5 top-1/2 -translate-y-1/2 w-3 h-3 bg-green-500 rounded-full"
                    animate={{ 
                      scale: [1, 1.4, 1], 
                      opacity: [0.8, 1, 0.8],
                      boxShadow: [
                        '0 0 0 0 rgba(34, 197, 94, 0.3)',
                        '0 0 0 8px rgba(34, 197, 94, 0)',
                        '0 0 0 0 rgba(34, 197, 94, 0.3)'
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <motion.span
                    className="absolute -left-5 top-1/2 -translate-y-1/2 w-3 h-3 bg-green-400 rounded-full"
                    animate={{ 
                      scale: [1, 2.2, 1], 
                      opacity: [0.4, 0, 0.4] 
                    }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  />
                  AVAILABLE FOR JOB
                </span>
              </motion.p>
            </div>
          </motion.div>

          <motion.div 
            className="relative group"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.8, type: "spring", bounce: 0.3 }}
            whileHover={{ scale: 1.08, rotate: 2 }}
          >
            {/* Enhanced animated ring around profile */}
            <motion.div
              className="absolute inset-0 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            >
              <motion.div 
              

                animate={{
                  background: [
                    'linear-gradient(0deg, #f97316, #ec4899, #8b5cf6)',
                    'linear-gradient(120deg, #ec4899, #8b5cf6, #f97316)',
                    'linear-gradient(240deg, #8b5cf6, #f97316, #ec4899)',
                    'linear-gradient(360deg, #f97316, #ec4899, #8b5cf6)'
                  ]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="w-full h-full rounded-full bg-gray-900"></div>
              </motion.div>
            </motion.div>

            {/* Enhanced pulsing glow effect */}
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-400 to-pink-500 opacity-40 blur-xl"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.7, 0.3],
                rotate: [0, 180, 360]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />

            <motion.div 
              className="relative z-10"
              animate={{
                rotate: [8, 12, 8]
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <motion.img
                src={Profile}
                alt="Manish Prajapat's Profile"
                className='relative z-10 border-4 border-gray-700 rounded-full h-[120px] w-[120px] sm:h-[160px] sm:w-[160px] md:h-[200px] md:w-[200px] lg:h-[240px] lg:w-[240px] object-cover mx-auto shadow-2xl transition-all duration-500 group-hover:border-orange-400'
                whileHover={{
                  boxShadow: "0 0 50px rgba(251, 146, 60, 0.5)"
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Enhanced CSS animations */}
      <>
        <style>
          {`
            @keyframes smoothTyping {
              0%, 50% {
                width: 0ch;
                border-right: 2px solid rgba(251, 146, 60, 0.8);
              }
              80%, 100% {
                width: 15ch;
                border-right: 2px solid transparent;
              }
            }
            
            /* Additional glow effects */
            .Hero::before {
              content: '';
              position: absolute;
              top: -50%;
              left: -50%;
              width: 200%;
              height: 200%;
              background: radial-gradient(circle, rgba(251, 146, 60, 0.05) 0%, transparent 70%);
              animation: pulse 8s ease-in-out infinite;
              pointer-events: none;
            }
            
            @keyframes pulse {
              0%, 100% { opacity: 0.3; }
              50% { opacity: 0.6; }
            }
          `}
        </style>
      </>
    </div>
  )
}

export default IntroSection