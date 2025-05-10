import React from 'react'

const Footer = () => {
  return (
     <footer className="bg-gray-900 text-white pt-12 pb-6">
     <div className="container mx-auto px-4">
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
         {/* Logo and contact */}
         <div>
           <div className="flex items-center mb-4">
             <div className="h-8 w-8 bg-yellow-400 rounded-md"></div>
             <span className="ml-2 font-bold text-xl">E-Quiz</span>
           </div>
           <p className="text-sm text-gray-400 mb-2">Call Us</p>
           <p className="text-blue-400 font-medium mb-4">00 123 456 789</p>
           <p className="text-sm text-gray-400 mb-2">Lorem ipsum dolor sit amet connect.</p>
           <p className="text-sm text-gray-400 mb-4">example@gmail.com</p>
           <div className="flex space-x-4">
             {['twitter', 'facebook', 'instagram', 'youtube', 'linkedin'].map((social) => (
               <a 
                 key={social}
                 href="#" 
                 className="text-gray-400 hover:text-white transition"
               >
                 <span className="w-6 h-6 flex items-center justify-center border border-gray-600 rounded-sm">
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="currentColor" viewBox="0 0 24 24">
                     <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12z"/>
                   </svg>
                 </span>
               </a>
             ))}
           </div>
         </div>

         {/* About links */}
         <div>
           <h3 className="font-bold text-lg mb-4">About</h3>
           <ul className="space-y-3">
             {['About Us', 'Courses', 'Instructors', 'Events', 'Become a Teacher'].map((item) => (
               <li key={item}>
                 <a href="#" className="text-gray-400 hover:text-white transition">{item}</a>
               </li>
             ))}
           </ul>
         </div>

         {/* Links 1 */}
         <div>
           <h3 className="font-bold text-lg mb-4">Links</h3>
           <ul className="space-y-3">
             {['News & Blogs', 'Library', 'Gallery', 'Partners', 'Career'].map((item) => (
               <li key={item}>
                 <a href="#" className="text-gray-400 hover:text-white transition">{item}</a>
               </li>
             ))}
           </ul>
         </div>

         {/* Links 2 */}
         <div>
           <h3 className="font-bold text-lg mb-4">Links</h3>
           <ul className="space-y-3">
             {['Documentation', 'FAQs', 'Forum', 'Sitemap'].map((item) => (
               <li key={item}>
                 <a href="#" className="text-gray-400 hover:text-white transition">{item}</a>
               </li>
             ))}
           </ul>
         </div>
       </div>

       {/* Footer bottom */}
       <div className="pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
         <div className="flex space-x-6 mb-4 md:mb-0">
           <a href="#" className="text-sm text-gray-400 hover:text-white">Terms of Use</a>
           <a href="#" className="text-sm text-gray-400 hover:text-white">Privacy policy</a>
         </div>
         <p className="text-sm text-gray-400">© 2023 elearning. All right reserved.</p>
       </div>
     </div>
   </footer>
  )
}

export default Footer