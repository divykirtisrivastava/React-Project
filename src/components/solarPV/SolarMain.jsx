import React from "react";
import business from "../../assets/business.png";
import { Link, useNavigate } from "react-router-dom";


export default function SolarMain() {
  let data  = JSON.parse(localStorage.getItem('data')) || {}

  function setPropertity(value) {
    let newdata = {...data, propertyType: value}
     localStorage.setItem('data', JSON.stringify(newdata))
   }

   const handlePopState = () => {
    let newData = { ...data };

    delete newData.propertyType;
    localStorage.setItem('data', JSON.stringify(newData))
  };

  window.onpopstate = handlePopState;
  return (
    <div>
      <div className="h-[90vh] w-full bg-slate-100">
        <div className="flex justify-center pt-10 font-bold text-center">
          <h1 className="text-xl text-bold">
            We will get you a Solar PV estimate in seconds. Let's start by
            telling us where you would like to have <br />
            Solar PV installed?
          </h1>
        </div>
        <div>
          <h1 className="flex items-center justify-center pt-10">
            A warm welcome to Green Energy Home , Ireland's highest rated Solar
            PV installer.
          </h1>
        </div>
        <div className="gap-5 flex pt-10 items-center justify-center">
          <Link 
          to='/solar/solarType'
          className="flex justify-center items-center "  onClick={()=>setPropertity('Business')}>
            <div className="h-[37vh] w-[15vw] bg-slate-50 rounded-xl flex flex-col justify-center items-center drop-shadow-xl border hover:border-green-600">
              <div>
                <img
                  src="https://getyourquote.greenenergyhomes.ie/unique-image/business.png"
                  alt=""
                  className="h-[10vh]"
                />
              </div>
              <div>
                <h1 className="text-3xl p-10">Business</h1>
              </div>
            </div>
          </Link>

          <Link 
          to="/solar/solarHome"
          className="flex justify-center items-center"  onClick={()=>setPropertity("Home")}>
            <div className="h-[37vh] w-[15vw] border bg-slate-50 rounded-xl flex flex-col justify-center items-center drop-shadow-xl hover:border-green-600">
              <div>
                <img
                  src="https://getyourquote.greenenergyhomes.ie/unique-image/home-page%20(1).png"
                  alt=""
                  className="h-[10vh]"
                />
              </div>
              <div>
                <h1 className="text-3xl p-10">Home</h1>
              </div>
            </div>
          </Link>
          <Link
          to="/solar/solarFarmAgri"
          className="flex justify-center items-center"  onClick={()=>setPropertity("Farm")}>
            <div className="h-[37vh] w-[15vw] bg-slate-50 rounded-xl flex flex-col justify-center items-center drop-shadow-xl border hover:border-green-600">
              <div>
                <img
                  src="https://getyourquote.greenenergyhomes.ie/unique-image/house.png"
                  alt=""
                  className="h-[10vh]"
                />
              </div>
              <div>
                <h1 className="text-3xl p-10">Farm</h1>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
