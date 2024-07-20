import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SolarType() {

  let data = JSON.parse(localStorage.getItem('data')) || {}

  function setPropertitySize(value) {
    let newdata = { ...data, propertySize: value }
    localStorage.setItem('data', JSON.stringify(newdata))
  }

  const handlePopState = () => {
    let newData = { ...data };

    delete newData.propertySize;
    localStorage.setItem('data', JSON.stringify(newData))

  };

  window.onpopstate = handlePopState;

  return (
    // for back button
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
            to="/solar/solarTimming"
            className="flex justify-center items-center " onClick={() => setPropertitySize('small')}>
            <div className="h-[37vh] w-[15vw] bg-slate-50 rounded-xl flex flex-col justify-center items-center drop-shadow-xl border hover:border-green-600">
              <div>
                <img src="https://getyourquote.greenenergyhomes.ie/unique-image/business%20(1).png" alt="" className="h-[10vh]" />
              </div>
              <div>
                <h1 className="text-3xl p-10">Small Electricity</h1>
              </div>
            </div>
          </Link>
          <Link
            to="/solar/solarTimming"
            className="flex justify-center items-center" onClick={() => setPropertitySize('Medium')}>
            <div className="h-[37vh] w-[15vw] border bg-slate-50 rounded-xl flex flex-col justify-center items-center drop-shadow-xl hover:border-green-600">
              <div>
                <img src="https://getyourquote.greenenergyhomes.ie/unique-image/working-factory.png" alt="" className="h-[10vh]" />
              </div>
              <div>
                <h1 className="text-3xl p-10">Medium Electricity</h1>
              </div>
            </div>
          </Link>
          <Link
            to="/solar/solarTimming"
            className="flex justify-center items-center" onClick={() => setPropertitySize('Large')}>
            <div className="h-[37vh] w-[15vw] bg-slate-50 rounded-xl flex flex-col justify-center items-center drop-shadow-xl border hover:border-green-600">
              <div>
                <img src="https://getyourquote.greenenergyhomes.ie/unique-image/factory.png" alt="" className="h-[10vh]" />
              </div>
              <div>
                <h1 className="text-3xl p-10">Large</h1>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
