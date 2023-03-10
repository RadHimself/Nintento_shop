import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigaton.component';
import { Routes, Route, Outlet } from 'react-router-dom';
import Authentication from './routes/authentication/authentication.component';
//Nintendo shop

const Shop = () => {
  return (
    <h1>Shop placeholder</h1>
  )
};

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route index element={<Home/>}/>
        <Route path ='shop' element={<Shop/>}/>
        <Route path ='auth' element={<Authentication/>}/>
      </Route>
    </Routes>
    
  );
}

export default App;
