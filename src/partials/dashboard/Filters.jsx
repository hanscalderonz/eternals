import React from 'react';
import checkIcon from '../../images/check-circle.png'
function Filters() {

    const information = [
        {
          id: '0',
          title: '50',
          description: '% infull last 7 days',
        },
        {
          id: '1',
          title: '50',
          description: '% infull last 7 days',
         
        },
        {
          id: '2',
          title: '60',
          description: '% infull last 7 days',
          
        },
       
        
      ];  
  return (
    <>
    <div className='grid grid-cols-3 gap-28 mb-4'>
    {
                information.map(info => {
                  return (
                    <div className='text-center  border border-black p-8'>
                    <p className='flex gap-1 justify-center'><img src={checkIcon} alt="checkIcon"/>{info.title}</p>
                    <p>{info.description}</p> 
                    </div>
               
                  )
                })
              }
               </div>
    
    </>

  );
}

export default Filters;