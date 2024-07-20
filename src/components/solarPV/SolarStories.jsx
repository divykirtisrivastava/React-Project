import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SolarStories() {
    let data  = JSON.parse(localStorage.getItem('data')) || {}

    function setPropertityStories(value) {
      let newdata = {...data, propertyStories: value}
       localStorage.setItem('data', JSON.stringify(newdata))
     }

     const handlePopState = () => {
        let newData = { ...data };
    
        delete newData.propertyStories;
        localStorage.setItem('data', JSON.stringify(newData))
      };
    
      window.onpopstate = handlePopState;
  return (
    <div>
      <div className="h-[90vh] w-full bg-slate-100">
        <div>
          <h1 className="flex items-center justify-center pt-10 text-xl font-bold">
          How many stories does your property have?
          </h1>
        </div>
        <div className="gap-5 flex pt-10 items-center justify-center">
          <Link
          to="/solar/solarHomeTimming"
          className="flex justify-center items-center " onClick={()=>setPropertityStories('One Story')}>
            <div className="h-[37vh] w-[15vw] bg-slate-50 rounded-xl flex flex-col justify-center items-center drop-shadow-xl border hover:border-green-600">
              <div>
                <img src="https://getyourquote.greenenergyhomes.ie/unique-image/dining-table.png" alt="" className="h-[10vh]" />
              </div>
              <div>
                <h1 className="text-3xl p-10">One Story</h1>
              </div>
            </div>
          </Link>
          <Link 
          to="/solar/solarHomeTimming"
          className="flex justify-center items-center"  onClick={()=>setPropertityStories('Two Stories')}>
            <div className="h-[37vh] w-[15vw] border bg-slate-50 rounded-xl flex flex-col justify-center items-center drop-shadow-xl hover:border-green-600">
              <div>
                <img src="https://getyourquote.greenenergyhomes.ie/unique-image/real-estate.png" alt="" className="h-[10vh]" />
              </div>
              <div>
                <h1 className="text-3xl p-10">Two Stories</h1>
              </div>
            </div>
          </Link>
          <Link
          to="/solar/solarHomeTimming"
          className="flex justify-center items-center" onClick={()=>setPropertityStories('Three Stories+')}>
            <div className="h-[37vh] w-[15vw] bg-slate-50 rounded-xl flex flex-col justify-center items-center drop-shadow-xl border hover:border-green-600">
              <div>
                <img src="https://getyourquote.greenenergyhomes.ie/unique-image/house-front-of-three-floors.png" alt="" className="h-[10vh]" />
              </div>
              <div>
                <h1 className="text-3xl p-10">Three Stories+</h1>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
