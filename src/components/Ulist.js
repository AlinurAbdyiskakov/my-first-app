function Ulist (props) {
    let list = [];
    props.items.forEach((items)=>{
        list.push(<li>{list}</li>);
    }

    )
    return (
        <ul type="square">{list}</ul>
    );
}
export default Ulist;