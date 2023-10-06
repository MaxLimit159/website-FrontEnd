import Home from './pages/home.js';
import { Route,Routes } from 'react-router-dom';
import SanPham from './pages/san_pham.js';
import ChiTiet from './pages/chi_tiet.js';
import GioHang from './pages/gio_hang.js';
import ThanhToan from './pages/thanh_toan.js';
import "./App.css";
function App() {
  return (
    <>
      <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/san-pham" element={<SanPham/>}></Route>
    <Route path="/chi-tiet" element={<ChiTiet/>}></Route>
    <Route path="/gio-hang" element={<GioHang/>}></Route>
    <Route path="/thanh-toan" element={<ThanhToan/>}></Route>
    </Routes>
    </>
  );
}

export default App;
