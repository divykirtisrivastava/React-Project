import React from "react";
import { Link } from "react-router-dom";

export default function BoilerHome() {
    let data  = JSON.parse(localStorage.getItem('data')) || {}

    function setPropertity(value) {
      let newdata = {...data, property: value}
       localStorage.setItem('data', JSON.stringify(newdata))
     }

     const handlePopState = () => {
      let newData = { ...data };
  
      delete newData.property;
      localStorage.setItem('data', JSON.stringify(newData))
    };
  
    window.onpopstate = handlePopState;
  return (
    <div>
      <div className="h-[90vh] w-full bg-slate-100">
        <div>
          <h1 className="flex items-center justify-center pt-10 text-xl font-bold">
          Which option best describes your property?
          </h1>
        </div>
        <div className="gap-5 flex pt-10 items-center justify-center">
          <Link 
          to="/boiler/year"
          className="flex justify-center items-center " onClick={()=>setPropertity('Semi-Detached')}>
            <div className="h-[37vh] w-[15vw] bg-slate-50 rounded-xl flex flex-col justify-center items-center drop-shadow-xl border hover:border-green-600">
              <div>
                <img src="https://getyourquote.greenenergyhomes.ie/unique-image/semi-detached.png" alt="" className="h-[10vh]" />
              </div>
              <div>
                <h1 className="text-3xl p-10">Semi-Detached</h1>
              </div>
            </div>
          </Link>
          <Link
          to='/boiler/year'
          className="flex justify-center items-center"onClick={()=>setPropertity('Detached')}>
            <div className="h-[37vh] w-[15vw] border bg-slate-50 rounded-xl flex flex-col justify-center items-center drop-shadow-xl hover:border-green-600">
              <div>
                <img src="https://getyourquote.greenenergyhomes.ie/unique-image/detached.png" alt="" className="h-[10vh]" />
              </div>
              <div>
                <h1 className="text-3xl p-10">Detached</h1>
              </div>
            </div>
          </Link>
          <Link
          to="/boiler/year"
          className="flex justify-center items-center" onClick={()=>setPropertity('Terrace')}>
            <div className="h-[37vh] w-[15vw] bg-slate-50 rounded-xl flex flex-col justify-center items-center drop-shadow-xl border hover:border-green-600">
              <div>
                <img src="https://getyourquote.greenenergyhomes.ie/unique-image/facade.png" alt="" className="h-[10vh]" />
              </div>
              <div>
                <h1 className="text-3xl p-10">Terrace</h1>
              </div>
            </div>
          </Link>
          <Link
          to="/boiler/year"
          className="flex justify-center items-center" onClick={()=>setPropertity('Apartment')}>
            <div className="h-[37vh] w-[15vw] bg-slate-50 rounded-xl flex flex-col justify-center items-center drop-shadow-xl border hover:border-green-600">
              <div>
                <img src="https://getyourquote.greenenergyhomes.ie/unique-image/apartment.png" alt="" className="h-[10vh]" />
              </div>
              <div>
                <h1 className="text-3xl p-10">Apartment</h1>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
