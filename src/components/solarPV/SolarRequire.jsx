import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SolarRequire() {

    let data  = JSON.parse(localStorage.getItem('data')) || {}

    function setRequire(value) {
      let newdata = {...data, solarRequirement: value}
       localStorage.setItem('data', JSON.stringify(newdata))
     }

     const handlePopState = () => {
      let newData = { ...data };
  
      delete newData.solarRequirement;
      localStorage.setItem('data', JSON.stringify(newData))
    };
  
    window.onpopstate = handlePopState;
  return (
    <div>
      <div className="h-[90vh] w-full bg-slate-100">
        <div>
          <h1 className="flex items-center justify-center pt-10 text-xl font-bold">
          Bi-monthly Bill
          </h1>
        </div>
        <div className="gap-5 flex pt-10 items-center justify-center">
          <Link
          to='/form'
          className="flex justify-center items-center " onClick={()=>setRequire('Imediate')}>
            <div className="h-[37vh] w-[15vw] bg-slate-50 rounded-xl flex flex-col justify-center items-center drop-shadow-xl border hover:border-green-600">
              <div>
                <img src="https://getyourquote.greenenergyhomes.ie/unique-image/stopwatch.png" alt="" className="h-[10vh]" />
              </div>
              <div>
                <h1 className="text-3xl p-10">Imediate</h1>
              </div>
            </div>
          </Link>
          <Link
          to='/form'
          className="flex justify-center items-center"  onClick={()=>setRequire('1 Month')}>
            <div className="h-[37vh] w-[15vw] border bg-slate-50 rounded-xl flex flex-col justify-center items-center drop-shadow-xl hover:border-green-600">
              <div>
                <img src="https://getyourquote.greenenergyhomes.ie/unique-image/calendar.png" alt="" className="h-[10vh]" />
              </div>
              <div>
                <h1 className="text-3xl p-10">1 Month</h1>
              </div>
            </div>
          </Link>
          <Link 
          to='/form'
          className="flex justify-center items-center"  onClick={()=>setRequire('3 - 6 Month')}>
            <div className="h-[37vh] w-[15vw] bg-slate-50 rounded-xl flex flex-col justify-center items-center drop-shadow-xl border hover:border-green-600">
              <div>
                <img src="https://getyourquote.greenenergyhomes.ie/unique-image/calendar%20(1).png" alt="" className="h-[10vh]" />
              </div>
              <div>
                <h1 className="text-3xl p-10">3 - 6 Month</h1>
              </div>
            </div>
          </Link>
          <Link 
          to='/form'
          className="flex justify-center items-center"  onClick={()=>setRequire('6 months+')}>
            <div className="h-[37vh] w-[15vw] bg-slate-50 rounded-xl flex flex-col justify-center items-center drop-shadow-xl border hover:border-green-600">
              <div>
                <img src="https://getyourquote.greenenergyhomes.ie/unique-image/calendar%20(2).png" alt="" className="h-[10vh]" />
              </div>
              <div>
                <h1 className="text-3xl p-10">6 months+</h1>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
