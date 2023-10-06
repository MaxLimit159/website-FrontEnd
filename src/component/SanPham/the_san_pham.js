import Avatar from './avatar'
import Ten from './ten';
import Gia from './gia';


function TheSanPham(props) {
    return (
      <>
      <div className='container-wrapper'>
      <div className="wrapper">
        <Avatar url={props.member.avatar} />
        <Ten ten={props.member.ten} />
        <Gia gia={props.member.gia} />
        <button type="submit">Mua</button>
      </div>
      </div>
      </>
    );
}

export default TheSanPham;