import Header from '../component/header';
import Footer from '../component/footer';
import LoaiSanPham from '../component/SanPham/loai_san_pham';
const dsLoaiSanPham = [
  {
  'ten':'Loai san pham 1',
  'ds_san_pham':[{
        avatar: "avatars/cheese.png",
        ten: "Phô mai",
        gia: "20,000"
      },
      {
        avatar: "avatars/tomato.png",
        ten: "Cà chua",
        gia: "1,000"
      },
      {
        avatar: "avatars/cheese.png",
        ten: "Phô mai",
        gia: "20,000"
      },
      {
        avatar: "avatars/tomato.png",
        ten: "Cà chua",
        gia: "1,000"
      },
      {
        avatar: "avatars/tomato.png",
        ten: "Cà chua",
        gia: "1,000"
      },
      {
        avatar: "avatars/cheese.png",
        ten: "Phô mai 2",
        gia: "15,000"
      },
      {
        avatar: "avatars/tomato.png",
        ten: "Cà chua 2",
        gia: "2,000"
      }]
  }
];
  
function sanpham(){
        const listLoaiSanPhams = dsLoaiSanPham.map(function(item){
            return (
              <LoaiSanPham member={item}/>
            );
          });
        
          return (
            <>
            <Header/> 
            {listLoaiSanPhams}
            <Footer/>
            </>
          );
}
export default sanpham;