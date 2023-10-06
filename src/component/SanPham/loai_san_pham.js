import TheSanPham from './the_san_pham'

function LoaiSanPham(props) {
    const listSanPhams = props.member.ds_san_pham.map(function(item){
        return (
          <TheSanPham member={item}/>
        );
      });
    return (
    <>
        <p>{props.member.ten}</p>
        <div className='container-group'>
        {listSanPhams}
        </div>
      </>
    );
}

export default LoaiSanPham;