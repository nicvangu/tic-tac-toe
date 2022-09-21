import './Tile.css';

function Tile(props) {
    const { onClick, index, value } = props;
    const occupiedClass = value != '' ? 'tile-occupied': '';
    
    return <div id={`tile-${index}`} className={`tile ${occupiedClass}`} onClick={onClick}>{value}</div>
}

export default Tile;