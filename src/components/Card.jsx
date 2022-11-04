import React from 'react'
import Mockup from '../assets/mockup.png'


function Card() {
    return (
      <div className="w-full py-[1rem] px-4 bg-black">




        <div className="max-w-[1200px] grid md:grid-cols-3 gap-8 mx-auto">

            
          <div className="w-full bg-white shadow-xl shadow-purple-500/40 flex flex-col  my-4 rounded-lg hover:scale-105 duration-300">
           
              <img className="w-[500px] mx-auto my-4" src={Mockup} alt="/" />

              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
                <p class="text-gray-700 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus quia, nulla! Maiores et perferendis eaque,
                  exercitationem praesentium nihil.
                </p>
           
              <div class="px-6 pt-4 pb-2">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #photography
                </span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #travel
                </span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #winter
                </span>
              </div>
            </div>
          </div>
      

          <div className="w-full bg-white shadow-xl shadow-purple-500/40 flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
           
           <img className="w-[500px] mx-auto my-4" src={Mockup} alt="/" />

           <div class="px-6 py-4">
             <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
             <p class="text-gray-700 text-base">
               Lorem ipsum dolor sit amet, consectetur adipisicing elit.
               Voluptatibus quia, nulla! Maiores et perferendis eaque,
               exercitationem praesentium nihil.
             </p>
        
           <div class="px-6 pt-4 pb-2">
             <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
               #photography
             </span>
             <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
               #travel
             </span>
             <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
               #winter
             </span>
           </div>
         </div>
       </div>


       <div className="w-full bg-white shadow-xl shadow-purple-500/40 flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
           
           <img className="w-[500px] mx-auto my-4" src={Mockup} alt="/" />

           <div class="px-6 py-4">
             <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
             <p class="text-gray-700 text-base">
               Lorem ipsum dolor sit amet, consectetur adipisicing elit.
               Voluptatibus quia, nulla! Maiores et perferendis eaque,
               exercitationem praesentium nihil.
             </p>
        
           <div class="px-6 pt-4 pb-2">
             <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
               #photography
             </span>
             <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
               #travel
             </span>
             <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
               #winter
             </span>
           </div>
         </div>
       </div>

       
        </div>
      </div>
    );
}

export default Card