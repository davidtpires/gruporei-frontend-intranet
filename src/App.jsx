import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'
import 'bootstrap/dist/css/bootstrap.min.css';
import ListPowerBIComponent from './components/ListPowerBIComponent';

function App() {

  return (
    <>
    <BrowserRouter>
      <HeaderComponent />
        <Routes>
          <Route path='/' element = { <ListPowerBIComponent />}></Route>
          <Route path='/powerbi' element = { <ListPowerBIComponent />}></Route>

          {/* <Route path='/add-employee' element = { <EmployeeComponent /> }></Route> */}
          {/* <Route path='/edit-employee/:id' element = {<EmployeeComponent />}></Route> */}
        </Routes>
      <FooterComponent />
    </BrowserRouter>
    </>
  )
}

export default App
