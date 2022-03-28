import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './Components/Home';
import { Login } from './Components/Login';
import { Products } from './Components/Products';
import { Register } from './Components/Register';
import { SingleProduct } from './Components/SingleProduct';
import { Navbar } from './Components/Navbar';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path={"/"} element={<Home/>}></Route>
        <Route path={"/register"} element={<Register/>}></Route>
       <Route path={"/login"} element={<Login/>}></Route>
         <Route path={"/products"} element={<Products/>}></Route>
        <Route path={"/products:productId"} element={<SingleProduct/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
