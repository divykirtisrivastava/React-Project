import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SolarHomeTimming() {

    let data  = JSON.parse(localStorage.getItem('data')) || {}

    function setTimming(value) {
      let newdata = {...data, solarTimming: value}
       localStorage.setItem('data', JSON.stringify(newdata))
     }

     const handlePopState = () => {
        let newData = { ...data };
  
        delete newData.solarTimming;
        localStorage.setItem('data', JSON.stringify(newData))

      };
  
      window.onpopstate = handlePopState;
  return (
    <div>
       
      <div className="h-[90vh] w-full bg-slate-100">
        <div>
          <h1 className="flex items-center justify-center pt-10 text-xl font-bold">
          At what time do you utilize the most?
          </h1>
        </div>
        <div className="gap-5 flex pt-10 items-center justify-center">
          <Link
          to="/solar/solarElectricity"
          className="flex justify-center items-center " onClick={()=>setTimming('Morning')}>
            <div className="h-[37vh] w-[15vw] bg-slate-50 rounded-xl flex flex-col justify-center items-center drop-shadow-xl border hover:border-green-600">
              <div>
                <img src="https://getyourquote.greenenergyhomes.ie/unique-image/morning.png" alt="" className="h-[10vh]" />
              </div>
              <div>
                <h1 className="text-3xl p-10">Morning</h1>
              </div>
            </div>
          </Link>
          <Link 
          to="/solar/solarElectricity"
          className="flex justify-center items-center"  onClick={()=>setTimming('Afternoon')}>
            <div className="h-[37vh] w-[15vw] border bg-slate-50 rounded-xl flex flex-col justify-center items-center drop-shadow-xl hover:border-green-600">
              <div>
                <img src="https://getyourquote.greenenergyhomes.ie/unique-image/noon.png" alt="" className="h-[10vh]" />
              </div>
              <div>
                <h1 className="text-3xl p-10">Afternoon</h1>
              </div>
            </div>
          </Link>
          <Link
          to="/solar/solarElectricity"
          className="flex justify-center items-center" onClick={()=>setTimming('Evening')}>
            <div className="h-[37vh] w-[15vw] bg-slate-50 rounded-xl flex flex-col justify-center items-center drop-shadow-xl border hover:border-green-600">
              <div>
                <img src="https://getyourquote.greenenergyhomes.ie/unique-image/moon.png" alt="" className="h-[10vh]" />
              </div>
              <div>
                <h1 className="text-3xl p-10">Evening</h1>
              </div>
            </div>
          </Link>
          <Link
          to="/solar/solarElectricity"
          className="flex justify-center items-center" onClick={()=>setTimming('All day')}>
            <div className="h-[37vh] w-[15vw] bg-slate-50 rounded-xl flex flex-col justify-center items-center drop-shadow-xl border hover:border-green-600">
              <div>
                <img src="https://getyourquote.greenenergyhomes.ie/unique-image/24-hours.png" alt="" className="h-[10vh]" />
              </div>
              <div>
                <h1 className="text-3xl p-10">All Day</h1>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
