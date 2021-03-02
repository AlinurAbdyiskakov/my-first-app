function Table (props) {
    let list = "";
    props.items.forEach((item)=>{
        list.push(<th>{list}</th>);
    }

    )
    return (
        <table type="square">{list}</table>
    );
}
export default Table;