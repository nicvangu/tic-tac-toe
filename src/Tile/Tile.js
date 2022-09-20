import './Tile.css';

function Tile(props) {
    const { onClick, index, value } = props;

    console.log(props.value)
    return <div id={`tile-${index}`} className="tile" onClick={onClick}>{value}</div>
}

export default Tile;