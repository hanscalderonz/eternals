import React from 'react';
import { NavLink } from 'react-router-dom';

function Alert() {
  return (
    <>
    <div className='flex gap-2 mb-4 justify-between py-4'>
         <div className='flex w-10/12 bg-white items-center py-4 px-2 gap-4'>
          Alertas  
          <div className='bg-red-600 text-white w-6 h-6 rounded-full text-center'>
          <span className='notification '>{5}</span>
         </div>
         
        </div>   

        <div className='flex items-center'>
        <button className="bg-blue-600 text-white px-4 py-4 rounded-md">
        <NavLink className="text-white" to="/setup-notifications">Configurar alertas</NavLink>
         </button>
        </div>
    </div>
    
    </>

  );
}

export default Alert;
