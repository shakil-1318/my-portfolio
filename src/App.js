import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Blogs from './components/Blogs/Blogs';
import CarShop from './components/CarShop/CarShop';



function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/blog" element={<Blogs />} />
          <Route path="/carshop" element={<CarShop />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
