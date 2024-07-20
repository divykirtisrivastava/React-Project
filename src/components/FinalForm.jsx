import React, { useState, useEffect } from "react";
import axios from "axios"; // Import Axios for making HTTP requests
import Nav from "./Nav";


const FinalForm = () => {
 
  let [inp , setInp] = useState({
    fname:'',
    lname:'',
    phone:'',
    email:'',
    eircode:'',
    county:'Antrim',
    address:''
  })
let {fname,lname,phone,email,eircode,county,address} = inp
  function handleChange(e){
    setInp({...inp, [e.target.name]: e.target.value})
  }

  let data = JSON.parse(localStorage.getItem('data')) || {}
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    let formData  = {...data, ...inp}
    console.log(formData)
    console.log("Form Data Submitted:", formData);

    // try {
    //   // Perform form submission using Axios
    //   const response = await axios.post(
    //     "https://getyourquote.greenenergyhomes.ie/mailforreact.php",
    //     formData
    //   );

    //   console.log("Form submitted successfully:", response.data);

    // } catch (error) {
    //   console.error("Error submitting form:", error);
    // }
  };

  
  return (
    <>
    <Nav/>
      <div className="w-full flex justify-center h-[80vh] items-center ">
        <div className="flex flex-col justify-center items-center text-[25px] w-3/4 shadow-2xl">
          <h3 className="form-head font-bold" style={{ padding: "50px" }}>
            Alright, let's get your details and create your tailored Solar PV
            estimate!
          </h3>

          <form
            action="https://getyourquote.greenenergyhomes.ie/mail.php"
            method="post"
            className="form-content"
            onSubmit={handleSubmit}
          >
           
            <div className="flex flex-col justify-evenly h-[400px]">
              <div className="flex w-[700px] text-[20px] justify-between">
                <div className="flex flex-col ">
                  <label htmlFor="Fname">First Name</label>
                  <input
                    className="border-[1px] border-gray-400 rounded required w-[340px]"
                    id="Fname"
                    name="fname"
                    type="text"
                    placeholder="First Name"
                    value={fname}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="Lname">Last Name</label>
                  <input
                   className="border-[1px] border-gray-400 rounded required w-[340px]"
                    id="Lname"
                    name="lname"
                    type="text"
                    placeholder="Last Name"
                    value={lname}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="flex w-[700px]  text-[20px] justify-between">
                <div className="flex flex-col">
                  <label htmlFor="phone">Phone</label>
                  <input
                   className="border-[1px] border-gray-400 rounded required w-[340px]"
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="9999999999"
                    value={phone}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="email">E-Mail</label>
                  <input
                  className="border-[1px] border-gray-400 rounded required w-[340px]"
                    id="email"
                    name="email"
                    type="email"
                    placeholder="user@gmail.com"
                    value={email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="flex w-[700px]  text-[20px] justify-between">
                <div className="flex flex-col">
                  <label htmlFor="Eircode">Eircode</label>
                  <input
                 className="border-[1px] border-gray-400 rounded required w-[340px]"
                    id="Eircode"
                    name="eircode"
                    type="text"
                    placeholder="Eircode"
                    value={eircode}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="County">County</label>
                  <select
                  className="border-[1px] border-gray-400 rounded required w-[340px]"
                    name="county"
                    value={county}
                    onChange={handleChange}
                    required
                  >
                    <option value="antrim">Antrim</option>
                    <option value="armagh">Armagh</option>
                    <option value="carlow">Carlow</option>
                    <option value="cavan">Cavan</option>
                    <option value="clare">Clare</option>
                    <option value="cork">Cork</option>
                    <option value="derry">Derry</option>
                    <option value="donegal">Donegal</option>
                    <option value="down">Down</option>
                    <option value="dublin">Dublin</option>
                    <option value="fermanagh">Fermanagh</option>
                    <option value="galway">Galway</option>
                    <option value="kerry">Kerry</option>
                    <option value="kildare">Kildare</option>
                    <option value="kilkenny">Kilkenny</option>
                    <option value="laois">Laois</option>
                    <option value="leitrim">Leitrim</option>
                    <option value="limerick">Limerick</option>
                    <option value="longford">Longford</option>
                    <option value="louth">Louth</option>
                    <option value="mayo">Mayo</option>
                    <option value="meath">Meath</option>
                    <option value="monaghan">Monaghan</option>
                    <option value="offaly">Offaly</option>
                    <option value="roscommon">Roscommon</option>
                    <option value="sligo">Sligo</option>
                    <option value="tipperary">Tipperary</option>
                    <option value="tyrone">Tyrone</option>
                    <option value="waterford">Waterford</option>
                    <option value="westmeath">Westmeath</option>
                    <option value="wexford">Wexford</option>
                    <option value="wicklow">Wicklow</option>
                  </select>
                </div>
              </div>
              <div className="left-side  text-[20px]">
                <div className="location">
                  <div className="flex flex-col" style={{ width: "100%" }}>
                    <label htmlFor="address">Address</label>
                    <input
                      className="border-[1px] border-gray-400 rounded required"
                      id="address"
                      name="address"
                      type="text"
                      placeholder="Address"
                      value={address}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="left-side">
                <div className="button-submit">
                  <button
                    className="bg-[#4BA4A1] p-2 text-white mt-[30px] mb-[30px] rounded"
                    style={{ width: "100%" }}
                    id="submit"
                  >
                    
                      View Estimated Prices
                   
                   
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default FinalForm;