import Thongtin from './thong_tin'
import Avatar from './avatar'
function ChiTiet(props) {
    return (
      <>
      <Avatar url={props.member.avatar} gia={props.member.gia} ten={props.member.ten}/>
      <Thongtin mo_ta={props.member.mo_ta}/>
      </>
    );
}

export default ChiTiet;