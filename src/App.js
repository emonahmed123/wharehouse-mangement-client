import { Routes,Route } from 'react-router-dom';
import './App.css';
import Additems from './Pages/AddItems/Additems';
import Blogs from './Pages/Blogs/Blogs';
import Home from './Pages/Home/Home';
import MangeInventori from './Pages/Home/Inventories/MangeInventori/MangeInventori';
import InventorieUpdate from './Pages/Home/InventorieUpdate/InventorieUpdate';
import Login from './Pages/Login/Login';
import RequreAuth from './Pages/Login/RequreAuth/RequerAuth';
import Singup from './Pages/Login/Singup/Singup';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header'
import NotFound from './Pages/Shared/NotFound/NotFound'
function App() {
  return (
    <div className="App">
       <Header></Header>
     
           <Routes>
                <Route  path='/' element={  <Home></Home>}></Route>
               <Route  path='/home' element={<Home></Home>}></Route> 
               <Route  path='/login' element={<Login></Login>}></Route> 
                 <Route path='/sigup' element={<Singup></Singup>}></Route>
            <Route path='/inventorieupdate/:bikeId' element=  {
          
                      <RequreAuth>
                                  <InventorieUpdate/>
                        </RequreAuth>      }>
            </Route>
             <Route path='/additems' element={
             <RequreAuth>
                       <Additems></Additems>
             </RequreAuth>}>

             </Route>
             <Route path='/mangeitem' element={

                         <RequreAuth>
                              <MangeInventori/>

                         </RequreAuth>

             }> 
                   
                   </Route>
                 <Route path='/blogs' element={<Blogs></Blogs>}></Route>

               <Route path='*' element={<NotFound/>}></Route>
   
      </Routes>
         

              <Footer></Footer>

    </div>
  );
}

export default App;
