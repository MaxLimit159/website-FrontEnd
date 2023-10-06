import Header from '../component/header';
import Footer from '../component/footer';
import { NavLink } from "react-router-dom";
const tests = [{
    ten:"ten_test",
    avatar: "avatars/cheese.png",
    gia:100000,
    sl:2,
    thanhtien:200000
}];

function GioHang() {
    const testlist = tests.map(function(test){
        return (
            <tr>
            <td>{test.ten}<img src={test.avatar}/></td>
            <td>{test.gia}</td>
            <td>{test.sl}</td>
            <td>{test.thanhtien}</td>
            <td><a href="#"><button>Xóa</button></a><a href="#"><button>Cập nhập</button></a></td>
        </tr>
        );
      });
      return (
        <>
        <Header/> 
        <table className='table'>
            <tr>
                <th>Sản Phảm</th>
                <th>Đơn Giá</th>
                <th>Số Lượng</th>
                <th>Thành Tiền</th>
            </tr>
            {testlist}
        </table>
        <NavLink to="/san-pham"><button>Tiếp tục mua hàng</button></NavLink><NavLink to="/thanh-toan"><button>Thanh toán</button></NavLink>
        <Footer/>
        </>
      );
}
export default GioHang;