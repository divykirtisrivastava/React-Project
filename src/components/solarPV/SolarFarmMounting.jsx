import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SolarFarmMounting() {
    let data  = JSON.parse(localStorage.getItem('data')) || {}

    function setFarmMounting(value) {
      let newdata = {...data, farmMounting: value}
       localStorage.setItem('data', JSON.stringify(newdata))
     }

     const handlePopState = () => {
        let newData = { ...data };
    
        delete newData.farmMounting;
        localStorage.setItem('data', JSON.stringify(newData))
      };
    
      window.onpopstate = handlePopState;
  return (
    <div>
      <div className="h-[90vh] w-full bg-slate-100">
        <div>
          <h1 className="flex items-center justify-center pt-10 text-xl font-bold">
          which best describes your enterprise?
          </h1>
        </div>
        <div className="gap-5 flex pt-10 items-center justify-center">
          <Link
          to="/solar/solarFarmPhase"
          className="flex justify-center items-center " onClick={()=>setFarmMounting('Roof Mounted')}>
            <div className="h-[37vh] w-[15vw] bg-slate-50 rounded-xl flex flex-col justify-center items-center drop-shadow-xl border hover:border-green-600">
              <div>
                <img src="https://getyourquote.greenenergyhomes.ie/unique-image/roof.png" alt="" className="h-[10vh]" />
              </div>
              <div>
                <h1 className="text-3xl p-10">Roof Mounted</h1>
              </div>
            </div>
          </Link>
          <Link 
          to="/solar/solarFarmPhase"
          className="flex justify-center items-center"  onClick={()=>setFarmMounting('Ground Mounted')}>
            <div className="h-[37vh] w-[15vw] border bg-slate-50 rounded-xl flex flex-col justify-center items-center drop-shadow-xl hover:border-green-600">
              <div>
                <img src="https://getyourquote.greenenergyhomes.ie/unique-image/technology.png" alt="" className="h-[10vh]" />
              </div>
              <div>
                <h1 className="text-3xl p-10">Ground Mounted</h1>
              </div>
            </div>
          </Link>
         
        </div>
      </div>
    </div>
  );
}
