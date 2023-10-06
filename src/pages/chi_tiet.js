import Header from '../component/header';
import Footer from '../component/footer';
import ChiTiet from '../component/ChiTiet/chi_tiet';

const chitietsanpham = [{
    ten:"ten_test",
    avatar: "avatars/cheese.png",
    gia:"100,000",
    loai_sp:"loaisp_test",
    mo_ta:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",

}];
function chiTiet() {
    const chitiet = chitietsanpham.map(function(item){
        return (
          <ChiTiet member={item}/>
        );
      });
      return (
        <>
        <Header/> 
        {chitiet}
        <Footer/>
        </>
      );
}
export default chiTiet;