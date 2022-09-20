function Tile(props) {
    return <div id={`tile-${props.index}`} className="tile">{props.value}</div>
}

export default Tile;