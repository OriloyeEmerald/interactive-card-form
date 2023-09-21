import React from 'react';

const Auth = ({cardName, cardNumber, handleInputName, handleInputNumber }) => {
  return (
    <div className='card-name mt-[7rem] flex flex-col items-center'>

  <div className="mt-2">
    <label htmlFor="card-name" className='block text-black text-xs font-bold mb-1 text-start text-[1rem]'>Cardholder Name</label>
    <input type="text" placeholder='e.g. Jane Appleseed' id='card-name' value={cardName}
    className='shadow appearance-none border rounded py-2 px-3 text-sm w-full text-[1.3rem]' onChange={handleInputName}/>
  </div>
  <br />
  <div className="card-number mt-2">
    <label htmlFor="card-number" className='block text-black text-[1rem] font-bold mb-1 text-start '>Card Number</label>
    <input type="number" placeholder='e.g. 1234 5678 9123 0000' id='card-number' value={cardNumber} className='shadow appearance-none border rounded py-2 px-4 text-[1.3rem] w-full' onChange={handleInputNumber}/>
  </div>
  <br />
  <div className='flex gap-[2px] mt-2'>
    <div className="card-date">
      <label htmlFor="card-date" className='block text-black font-bold mb-1  text-start text-[1rem]'>Exp. Date (MM/YY)</label>
      <div className="date-input flex gap-[15px]">
        <input type="text" placeholder='MM' id='card-date' className='shadow appearance-none border rounded py-[.5rem] px-2 text-sm w-1/4 text-center text-[1.1rem]' />
        <input type="text" placeholder='YY' id='card-date' className='shadow appearance-none border rounded py-1 px-2 text-sm w-1/4 text-center text-[1.1rem]' />
      </div>
    </div>
    <div className="cvc">
      <label htmlFor="cvc" className='block text-black font-bold mb-1 text-start text-[1rem]'>CVC</label>
      <input type="number" placeholder='e.g. 123' id='card-cvc' className='shadow appearance-none border rounded py-2 px-3 text-sm w-full text-[1.2rem]' />
      
    </div>
  </div>
  <br />
  <button className='btn text-center py-3 px-4 rounded mt-4 bg-blue-500 text-white w-full'>Confirm</button>

</div>

  );
}

export default Auth;
