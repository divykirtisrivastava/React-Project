import React from "react";
import business from "../../assets/business.png";
import { Link, useNavigate } from "react-router-dom";


export default function Fuel() {
  let data  = JSON.parse(localStorage.getItem('data')) || {}

    function setBoilerFuel(value) {
      let newdata = {...data, boilerFuel: value}
       localStorage.setItem('data', JSON.stringify(newdata))
     }

     const handlePopState = () => {
      let newData = { ...data };
  
      delete newData.boilerFuel;
      localStorage.setItem('data', JSON.stringify(newData))
    };
  
    window.onpopstate = handlePopState;
  return (
    <div>
      <div className="h-[90vh] w-full bg-slate-100">
        <div>
          <h1 className="flex items-center justify-center pt-10">
          What fuel do your currently use to heat your property?
          </h1>
        </div>
        <Link 
          to="/boiler/timming"
          className="gap-5 flex pt-10 items-center justify-center">
          <div className="flex justify-center items-center " onClick={()=>setBoilerFuel('Natural Gas')}>
            <div className="h-[37vh] w-[15vw] bg-slate-50 rounded-xl flex flex-col justify-center items-center drop-shadow-xl border hover:border-green-600">
              <div>
                <img
                  src="https://getyourquote.greenenergyhomes.ie/unique-image/flame.png"
                  alt=""
                  className="h-[10vh]"
                />
              </div>
              <div>
                <h1 className="text-3xl p-10">Natural Gas</h1>
              </div>
            </div>
          </div>

          <Link
          to="/boiler/timming"
          className="flex justify-center items-center" onClick={()=>setBoilerFuel('Oil')}>
            <div className="h-[37vh] w-[15vw] border bg-slate-50 rounded-xl flex flex-col justify-center items-center drop-shadow-xl hover:border-green-600">
              <div>
                <img
                  src="https://getyourquote.greenenergyhomes.ie/unique-image/oil.png"
                  alt=""
                  className="h-[10vh]"
                />
              </div>
              <div>
                <h1 className="text-3xl p-10">Oil</h1>
              </div>
            </div>
          </Link>
        </Link>
      </div>
    </div>
  );
}
