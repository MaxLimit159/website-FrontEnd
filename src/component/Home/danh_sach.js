import SanPham from './san_pham'

function MucNews(props) {
    const listNews = props.member.ds_san_pham.map(function(item){
        return (
          
          <div className='container-wrapper'>
          <div className="wrapper">
          <SanPham member={item}/>
          </div>
          </div>
        );
      });
    return (
    <>
        <p>{props.member.ten}</p>
        <div className='container-group'>
        {listNews}
        </div>
      </>
    );
}

export default MucNews;