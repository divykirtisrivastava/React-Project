import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SolarElectricity() {
    let data  = JSON.parse(localStorage.getItem('data')) || {}

    function setElectricity(value) {
      let newdata = {...data, electricityConsume: value}
       localStorage.setItem('data', JSON.stringify(newdata))
     }
 
        const handlePopState = () => {
          let newData = { ...data };

          delete newData.electricityConsume;
          localStorage.setItem('data', JSON.stringify(newData))
        };

        window.onpopstate = handlePopState;


  return (
    <div>
      <div className="h-[90vh] w-full bg-slate-100">
        <div>
          <h1 className="flex items-center justify-center pt-10 text-xl font-bold">
          What is the amount you typically allocate for your electricity bill every two months?
          </h1>
        </div>
        <div className="gap-5 flex pt-10 items-center justify-center">
          <Link
          to="/solar/solarRequire"
          className="flex justify-center items-center " onClick={()=>setElectricity('€300')}>
            <div className="h-[37vh] w-[15vw] bg-slate-50 rounded-xl flex flex-col justify-center items-center drop-shadow-xl border hover:border-green-600">
              <div>
                <img src="https://getyourquote.greenenergyhomes.ie/unique-image/coins.png" alt="" className="h-[10vh]" />
              </div>
              <div>
                <h1 className="text-3xl p-10">{"<"}€300</h1>
              </div>
            </div>
          </Link>
          <Link
          to="/solar/solarRequire"
          className="flex justify-center items-center " onClick={()=>setElectricity('€400')}>
            <div className="h-[37vh] w-[15vw] bg-slate-50 rounded-xl flex flex-col justify-center items-center drop-shadow-xl border hover:border-green-600">
              <div>
                <img src="https://getyourquote.greenenergyhomes.ie/unique-image/coin-stack.png" alt="" className="h-[10vh]" />
              </div>
              <div>
                <h1 className="text-3xl p-10">{"<"}€400</h1>
              </div>
            </div>
          </Link>
          <Link
          to="/solar/solarRequire"
          className="flex justify-center items-center " onClick={()=>setElectricity('€500')}>
            <div className="h-[37vh] w-[15vw] bg-slate-50 rounded-xl flex flex-col justify-center items-center drop-shadow-xl border hover:border-green-600">
              <div>
                <img src="https://getyourquote.greenenergyhomes.ie/unique-image/coins%20(1).png" alt="" className="h-[10vh]" />
              </div>
              <div>
                <h1 className="text-3xl p-10">{"<"}€500</h1>
              </div>
            </div>
          </Link>
          <Link
          to="/solar/solarRequire"
          className="flex justify-center items-center " onClick={()=>setElectricity('€500+')}>
            <div className="h-[37vh] w-[15vw] bg-slate-50 rounded-xl flex flex-col justify-center items-center drop-shadow-xl border hover:border-green-600">
              <div>
                <img src="https://getyourquote.greenenergyhomes.ie/unique-image/coins%20(1).png" alt="" className="h-[10vh]" />
              </div>
              <div>
                <h1 className="text-3xl p-10">{"<"}€500+</h1>
              </div>
            </div>
          </Link>
         
        </div>
      </div>
    </div>
  );
}
