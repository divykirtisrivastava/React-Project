import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './components/Home.jsx'
import Solar from './Solar.jsx'
import Radiator from './components/Boiler/Radiator.jsx'
import Fuel from './components/Boiler/Fuel.jsx'
import Boiler from './Boiler.jsx'
import SolarMain from './components/solarPV/SolarMain.jsx'
import SolarType from './components/solarPV/SolarType.jsx'
import SolarTimming from './components/solarPV/SolarTimming.jsx'
import SolarRequire from './components/solarPV/SolarRequire.jsx'
import FinalForm from './components/FinalForm.jsx'
import SolarHome from './components/solarPV/SolarHome.jsx'
import SolarStories from './components/solarPV/SolarStories.jsx'
import SolarHomeTimming from './components/solarPV/SolarHomeTimming.jsx'
import SolarElectricity from './components/solarPV/SolarElectricity.jsx'
import SolarFarmAgri from './components/solarPV/SolarFarmAgri.jsx'
import SolarFarmMounting from './components/solarPV/SolarFarmMounting.jsx'
import SolarFarmPhase from './components/solarPV/SolarFarmPhase.jsx'
import BoilerHome from './components/Boiler/BoilerHome.jsx'
import BoilerConstructionYear from './components/Boiler/BoilerConstructionYear.jsx'
import Boilertimming from './components/Boiler/Boilertimming.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path='/' element = {<Home/>}/>

    <Route path='/solar' element = {<Solar/>}>
      <Route path='' element = {<SolarMain/>}/>
      <Route path='/solar/solarType' element = {<SolarType/>}/>
      <Route path='/solar/solarHome' element = {<SolarHome/>}/>
      <Route path='/solar/solarStories' element = {<SolarStories/>}/>
      <Route path='/solar/solarTimming' element = {<SolarTimming/>}/>
      <Route path='/solar/solarFarmAgri' element = {<SolarFarmAgri/>}/>
      <Route path='/solar/solarFarmMounting' element = {<SolarFarmMounting/>}/>
      <Route path='/solar/solarFarmPhase' element = {<SolarFarmPhase/>}/>
      <Route path='/solar/solarHomeTimming' element = {<SolarHomeTimming/>}/>
      <Route path='/solar/solarElectricity' element = {<SolarElectricity/>}/>
      <Route path='/solar/solarRequire' element = {<SolarRequire/>}/>
    </Route>


    <Route path='/boiler' element = {<Boiler/>}>
      <Route path='' element = {<BoilerHome/>}/>
      <Route path='/boiler/year' element = {<BoilerConstructionYear/>}/>
      <Route path='/boiler/radiator' element = {<Radiator/>}/>
      <Route path='/boiler/fuel' element = {<Fuel/>}/>
      <Route path='/boiler/timming' element = {<Boilertimming/>}/>
    </Route>
    <Route path='/form' element={<FinalForm/>}/>
    </>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
