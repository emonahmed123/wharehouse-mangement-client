import { Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import InventorieUpdate from './Pages/Home/InventorieUpdate/InventorieUpdate';
import Login from './Pages/Login/Login';
import Singup from './Pages/Login/Singup/Singup';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header'
function App() {
  return (
    <div className="App">
       <Header></Header>
     
           <Routes>
                <Route  path='/' element={  <Home></Home>}></Route>
               <Route  path='/home' element={<Home></Home>}></Route> 
               <Route  path='/login' element={<Login></Login>}></Route> 
                 <Route path='/sigup' element={<Singup></Singup>}></Route>
            <Route path='/inventorieupdate/:bikeId' element={<InventorieUpdate/>}></Route>
      
      </Routes>

              <Footer></Footer>

    </div>
  );
}

export default App;
