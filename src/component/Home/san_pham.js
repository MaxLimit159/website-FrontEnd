import Avatar from './picture'
import Desc from './desc';


function TheNews(props) {
    return (
      <>
        <Avatar url={props.member.picture} />
        <Desc desc={props.member.desc} />
      </>
    );
}

export default TheNews;