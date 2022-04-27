import React from 'react';

function Alert() {
  return (

    <>
    <div className='flex items-center'>
         <div className='flex w-11/12 bg-white'>
          <p>Alertas</p>   
          <div className='bg-red-600 text-white w-6 h-6 rounded-full text-center'>
          <span className='notification '>{5}</span>
         </div>
         
        </div>   

        <div>
        <button className="bg-blue-600 text-white">
        <span>Configurar alerta</span>
    </button>
        </div>
    </div>
    
    </>

  );
}

export default Alert;
