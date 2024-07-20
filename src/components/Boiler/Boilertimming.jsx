import React from "react";
import business from "../../assets/business.png";
import { Link, useNavigate } from "react-router-dom";


export default function Boilertimming() {
  let data  = JSON.parse(localStorage.getItem('data')) || {}

    function setBoilerTimming(value) {
      let newdata = {...data, boilerTimming: value}
       localStorage.setItem('data', JSON.stringify(newdata))
     }

     const handlePopState = () => {
      let newData = { ...data };
  
      delete newData.boilerTimming;
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
          to="/form"
          className="gap-5 flex pt-10 items-center justify-center">
          <div className="flex justify-center items-center " onClick={()=>setBoilerTimming('Immediate')}>
            <div className="h-[37vh] w-[15vw] bg-slate-50 rounded-xl flex flex-col justify-center items-center drop-shadow-xl border hover:border-green-600">
              <div>
                <img
                  src="https://getyourquote.greenenergyhomes.ie/unique-image/delivery-on-time.png"
                  alt=""
                  className="h-[10vh]"
                />
              </div>
              <div>
                <h1 className="text-3xl p-10">Immediate</h1>
              </div>
            </div>
          </div>

          <Link
          to="/form"
          className="flex justify-center items-center" onClick={()=>setBoilerTimming('Later')}>
            <div className="h-[37vh] w-[15vw] border bg-slate-50 rounded-xl flex flex-col justify-center items-center drop-shadow-xl hover:border-green-600">
              <div>
                <img
                  src="https://getyourquote.greenenergyhomes.ie/unique-image/people.png"
                  alt=""
                  className="h-[10vh]"
                />
              </div>
              <div>
                <h1 className="text-3xl p-10">Later</h1>
              </div>
            </div>
          </Link>
        </Link>
      </div>
    </div>
  );
}
