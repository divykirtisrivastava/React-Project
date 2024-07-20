import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SolarFarmAgri() {
    let data  = JSON.parse(localStorage.getItem('data')) || {}

    function setFarmAgri(value) {
      let newdata = {...data, farmAgri: value}
       localStorage.setItem('data', JSON.stringify(newdata))
     }

     const handlePopState = () => {
        let newData = { ...data };
    
        delete newData.farmAgri;
        localStorage.setItem('data', JSON.stringify(newData))
      };
    
      window.onpopstate = handlePopState;
  return (
    <div>
      <div className="h-[90vh] w-full bg-slate-100">
        <div>
          <h1 className="flex items-center justify-center pt-10 text-xl font-bold">
          What type of agri enterprise do you operate?
          </h1>
        </div>
        <div className="gap-5 flex pt-10 items-center justify-center">
          <Link
          to="/solar/solarFarmMounting"
          className="flex justify-center items-center " onClick={()=>setFarmAgri('Dairy & beef suckler')}>
            <div className="h-[37vh] w-[15vw] bg-slate-50 rounded-xl flex flex-col justify-center items-center drop-shadow-xl border hover:border-green-600">
              <div>
                <img src="https://getyourquote.greenenergyhomes.ie/unique-image/dairy-products1.png" alt="" className="h-[10vh]" />
              </div>
              <div>
                <h1 className="text-3xl p-10">Dairy & beef suckler</h1>
              </div>
            </div>
          </Link>
          <Link 
          to="/solar/solarFarmMounting"
          className="flex justify-center items-center"  onClick={()=>setFarmAgri('Horses - Equestrian')}>
            <div className="h-[37vh] w-[15vw] border bg-slate-50 rounded-xl flex flex-col justify-center items-center drop-shadow-xl hover:border-green-600">
              <div>
                <img src="https://getyourquote.greenenergyhomes.ie/unique-image/jumping-horse-silhouette-facing-left-side-view.png" alt="" className="h-[10vh]" />
              </div>
              <div>
                <h1 className="text-3xl p-10">Horses - Equestrian</h1>
              </div>
            </div>
          </Link>
          <Link
          to="/solar/solarFarmMounting"
          className="flex justify-center items-center" onClick={()=>setFarmAgri('Other')}>
            <div className="h-[37vh] w-[15vw] bg-slate-50 rounded-xl flex flex-col justify-center items-center drop-shadow-xl border hover:border-green-600">
              <div>
                <img src="https://getyourquote.greenenergyhomes.ie/unique-image/dog-house.png" alt="" className="h-[10vh]" />
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
