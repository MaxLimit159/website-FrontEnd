import Header from '../component/header';
import Footer from '../component/footer';
const tests = [{
    ten:"ten_test",
    avatar: "avatars/cheese.png",
    gia:100000,
    sl:2,
    thanhtien:200000
}];

function ThanhToan() {
    const testlist = tests.map(function(test){
        return (
            <tr>
            <td>{test.ten}<img src={test.avatar}/></td>
            <td>{test.gia}</td>
            <td>{test.sl}</td>
            <td>{test.thanhtien}</td>
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
        <div className='left'>
            <p>Thông tin người nhận hàng:</p>
            <p>Họ tên</p>
            <p>Điện thoại</p>
            <p>Địa chỉ</p>
        </div>
        <div className='right'>
            <p>Hình thức thanh toán:</p>
            <p>COD</p>
            <p>Chuyển khoản ngân hàng</p>
            <p>Thanh toán qua MOMO</p>
        </div>
        <a href="#"><button>Thanh toán</button></a>
        <Footer/>
        </>
      );
}
export default ThanhToan;