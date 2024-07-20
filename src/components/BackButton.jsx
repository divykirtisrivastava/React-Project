import React from 'react'

export default function BackButton({getBack}) {
  return (
    // <div className='w-[80px] h-[40px] bg-[#4BA4A1] absolute top-[50%] left-[0px] flex justify-center items-center text-white text-xl font-bold'>
    //   {"<"}
    // </div>
    <div class="w-[80px] h-[40px] bg-[#4BA4A1] absolute top-[50%] left-[0px] flex justify-center items-center text-white text-xl font-bold flip-button cursor-pointer" tabIndex="0" onClick={getBack}>
    <div class="flip-button-inner">
      <div class="flip-button-front">
      {"<"}
      </div>
      <div class="flip-button-back">
       Back
      </div>
    </div>
  </div>
  )
}
