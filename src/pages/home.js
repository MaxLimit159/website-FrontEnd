import Header from '../component/header';
import Footer from '../component/footer';
import Latest from '../component/Home/danh_sach';
const dsLatest = [
  {
  'ten':'Loai san pham',
  'ds_san_pham':[{
        picture: "avatars/cheese.png",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...."
      },
      {
        picture: "avatars/tomato.png",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...."
      },
      {
        picture: "avatars/cheese.png",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...."
      },
      {
        picture: "avatars/tomato.png",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...."
      },
      {
        picture: "avatars/tomato.png",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...."
      },
      {
        picture: "avatars/cheese.png",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...."
      },
      {
        picture: "avatars/tomato.png",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...."
      },
      {
        picture: "avatars/cheese.png",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...."
      }]
  }
];
function Home(){
        const sanphamlist = dsLatest.map(function(item){
            return (
              <Latest member={item}/>
            );
          });
          return (
            <>
            <Header/> 
            {sanphamlist}
            <Footer/>
            </>
          );
}
export default Home;