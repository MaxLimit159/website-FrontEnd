function Avatar(props) {
    return (
        <>
        <img src={props.url}/>
        <div style={{display:"inline-block",margin:"20px"}}>
        <h3>{props.ten}</h3>
        <p>Giá:{props.gia}</p>
        <label>So Luong:</label>
        <input type="number"/><br/>
        <button>Chọn mua</button>
        </div>
        </>
    );
}

export default Avatar;