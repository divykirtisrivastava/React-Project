import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SolarTimming() {

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
       {/* <div class="w-[80px] h-[40px] bg-[#4BA4A1] absolute top-[50%] left-[0px] flex justify-center items-center text-white text-xl font-bold flip-button cursor-pointer" tabIndex="0" onClick={handlePopState}>
        <div class="flip-button-inner">
          <div class="flip-button-front">
            {"<"}
          </div>
          <div class="flip-button-back">
            Back
          </div>
        </div>
      </div> */}
      <div className="h-[90vh] w-full bg-slate-100">
        <div>
          <h1 className="flex items-center justify-center pt-10 text-xl font-bold">
            When do you use your home the most?
          </h1>
        </div>
        <div className="gap-5 flex pt-10 items-center justify-center">
          <Link
          to="/solar/solarRequire"
          className="flex justify-center items-center " onClick={()=>setTimming('Monday to Friday 9-5')}>
            <div className="h-[37vh] w-[15vw] bg-slate-50 rounded-xl flex flex-col justify-center items-center drop-shadow-xl border hover:border-green-600">
              <div>
                <img src="https://getyourquote.greenenergyhomes.ie/unique-image/calendar%20(3).png" alt="" className="h-[10vh]" />
              </div>
              <div>
                <h1 className="text-3xl p-10">Monday to Friday 9-5</h1>
              </div>
            </div>
          </Link>
          <Link 
          to="/solar/solarRequire"
          className="flex justify-center items-center"  onClick={()=>setTimming('Monday to Sunday 9-5')}>
            <div className="h-[37vh] w-[15vw] border bg-slate-50 rounded-xl flex flex-col justify-center items-center drop-shadow-xl hover:border-green-600">
              <div>
                <img src="https://getyourquote.greenenergyhomes.ie/unique-image/calendar%20(4).png" alt="" className="h-[10vh]" />
              </div>
              <div>
                <h1 className="text-3xl p-10">Monday to Sunday 9-5</h1>
              </div>
            </div>
          </Link>
          <Link
          to="/solar/solarRequire"
          className="flex justify-center items-center" onClick={()=>setTimming('24/7')}>
            <div className="h-[37vh] w-[15vw] bg-slate-50 rounded-xl flex flex-col justify-center items-center drop-shadow-xl border hover:border-green-600">
              <div>
                <img src="https://getyourquote.greenenergyhomes.ie/unique-image/weekly-calendar.png" alt="" className="h-[10vh]" />
              </div>
              <div>
                <h1 className="text-3xl p-10">24/7</h1>
              </div>
            </div>
          </Link>
          <Link
          to="/solar/solarRequire"
          className="flex justify-center items-center" onClick={()=>setTimming('Other')}>
            <div className="h-[37vh] w-[15vw] bg-slate-50 rounded-xl flex flex-col justify-center items-center drop-shadow-xl border hover:border-green-600">
              <div>
                <img src="https://getyourquote.greenenergyhomes.ie/unique-image/calendar%20(5).png" alt="" className="h-[10vh]" />
              </div>
              <div>
                <h1 className="text-3xl p-10">Other</h1>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
