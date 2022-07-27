//import logo from './logo.svg';
import './App.sass';
import Layout from './components/Layout/Layout';
import { Route, Routes, Navigate } from 'react-router-dom';
import CarList from './components/CarList/CarList';
import Car from './components/Car/Car';

import Terms from './components/Terms/Terms';
import Main from './controllers/Main/Main';
import Cars from './controllers/Cars/Cars';
import Contacts from './components/Contacts/Contacts';
import Docs from './components/Docs/Docs';


function App() {
  //console.log(cars2());
  //let allcars = getCars();
  return (
    <div className="App">
      
      <Layout>
          <Routes>            
            <Route path="/" element={<Main />}/>
            <Route path="/cars" element={<Cars />}/>
            <Route path="/cars/:id" element={<Car />}/>
            <Route path="/contacts" element={<Contacts />}/>
            <Route path="/documents" element={<Docs />}/>
            <Route path="/terms" element={<Terms/>}/>
            
            {/* <Route to="*" element={<Navigate to="/" />}/> */}
            <Route path="*" element={<div>Not found</div>} />            
          </Routes> 
      </Layout>
      
    </div>
  );
}

export default App;
