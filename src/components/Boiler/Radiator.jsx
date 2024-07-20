import React from "react";
import business from "../../assets/business.png";
import { Link, useNavigate } from "react-router-dom";


export default function Radiator() {
  let data  = JSON.parse(localStorage.getItem('data')) || {}

    function setBoilerRadiator(value) {
      let newdata = {...data, boilerRadiator: value}
       localStorage.setItem('data', JSON.stringify(newdata))
     }

     const handlePopState = () => {
      let newData = { ...data };
  
      delete newData.boilerRadiator;
      localStorage.setItem('data', JSON.stringify(newData))
    };
  
    window.onpopstate = handlePopState;
  return (
    <div>
      <div className="h-[90vh] w-[100vw] bg-slate-100">
        <div>
          <h1 className="flex justify-center pt-10 text-xl">
          To assist us in determining the suitable boiler size for your home, please specify the total number of radiators you have
          </h1>
        </div>
        <div className="gap-5 flex pt-10 items-center justify-center flex-wrap">
          <Link
          to="/boiler/fuel"
          className="flex justify-center items-center " onClick={()=>setBoilerRadiator('1-4')}>
            <div className="h-[37vh] w-[15vw] bg-slate-50 rounded-xl flex flex-col justify-center items-center drop-shadow-xl border hover:border-green-600">
              <div>
                <img
                  src="https://getyourquote.greenenergyhomes.ie/unique-image/radiator%20(2).png"
                  alt=""
                  className="h-[10vh]"
                />
              </div>
              <div>
                <h1 className="text-3xl p-10">1-4</h1>
              </div>
            </div>
          </Link>
          <Link
          to="/boiler/fuel"
          className="flex justify-center items-center " onClick={()=>setBoilerRadiator('5-8')}>
            <div className="h-[37vh] w-[15vw] bg-slate-50 rounded-xl flex flex-col justify-center items-center drop-shadow-xl border hover:border-green-600">
              <div>
                <img
                  src="https://getyourquote.greenenergyhomes.ie/unique-image/5-8img.png"
                  alt=""
                  className="h-[10vh]"
                />
              </div>
              <div>
                <h1 className="text-3xl p-10">5-8</h1>
              </div>
            </div>
          </Link>
          <Link
          to="/boiler/fuel"
          className="flex justify-center items-center " onClick={()=>setBoilerRadiator('9-12')}>
            <div className="h-[37vh] w-[15vw] bg-slate-50 rounded-xl flex flex-col justify-center items-center drop-shadow-xl border hover:border-green-600">
              <div>
                <img
                  src="https://getyourquote.greenenergyhomes.ie/unique-image/5-8radiator.png"
                  alt=""
                  className="h-[10vh]"
                />
              </div>
              <div>
                <h1 className="text-3xl p-10">9-12</h1>
              </div>
            </div>
          </Link>
          <Link
          to="/boiler/fuel"
          className="flex justify-center items-center " onClick={()=>setBoilerRadiator('13-16')}>
            <div className="h-[37vh] w-[15vw] bg-slate-50 rounded-xl flex flex-col justify-center items-center drop-shadow-xl border hover:border-green-600">
              <div>
                <img
                  src="https://getyourquote.greenenergyhomes.ie/unique-image/9-12radiator.png"
                  alt=""
                  className="h-[10vh]"
                />
              </div>
              <div>
                <h1 className="text-3xl p-10">13-16</h1>
              </div>
            </div>
          </Link>
          <Link
          to="/boiler/fuel"
          className="flex justify-center items-center " onClick={()=>setBoilerRadiator('17-19')}>
            <div className="h-[37vh] w-[15vw] bg-slate-50 rounded-xl flex flex-col justify-center items-center drop-shadow-xl border hover:border-green-600">
              <div>
                <img
                  src="https://getyourquote.greenenergyhomes.ie/unique-image/13-16radiator.png"
                  alt=""
                  className="h-[10vh]"
                />
              </div>
              <div>
                <h1 className="text-3xl p-10">17-19</h1>
              </div>
            </div>
          </Link>
          <Link
          to="/boiler/fuel"
          className="flex justify-center items-center " onClick={()=>setBoilerRadiator('19+')}>
            <div className="h-[37vh] w-[15vw] bg-slate-50 rounded-xl flex flex-col justify-center items-center drop-shadow-xl border hover:border-green-600">
              <div>
                <img
                  src="https://getyourquote.greenenergyhomes.ie/unique-image/19+radiator.png"
                  alt=""
                  className="h-[10vh]"
                />
              </div>
              <div>
                <h1 className="text-3xl p-10">19+</h1>
              </div>
            </div>
          </Link>

   
        </div>
      </div>
    </div>
  );
}
